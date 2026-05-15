import { User } from '@entities/users/user.entity';
import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { BANNED_USERNAMES } from '@modules/users/users.constants';
import * as Types from '@modules/users/users.types';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import bcrypt from 'bcrypt';

const HASH_ROUNDS = 10;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: EntityRepository<User>,
  ) {}

  public async validateUser(
    login: string,
    password: string,
  ): Promise<Nullable<User>> {
    const user = await this.usersRepository.findOne({
      $or: [{ username: login }, { email: login }],
    });

    if (
      !user?.password ||
      !UsersService.comparePassword(password, user.password)
    )
      return null;

    return user;
  }

  public async getUserByUuid(uuid: string): Promise<User> {
    const user = await this.usersRepository.findOne({ uuid });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  public async create(data: Types.CreateUserData): Promise<User> {
    if (BANNED_USERNAMES.includes(data.username))
      throw new BadRequestException(
        `Username "${data.username}" is not allowed`,
      );

    const existingUser = await Promise.all([
      this.usersRepository.findOne({ username: data.username }),
      this.usersRepository.findOne({ email: data.email }),
    ]);

    if (existingUser[0])
      throw new ConflictException(
        `Username ${data.username} is already in use`,
      );
    if (existingUser[1])
      throw new ConflictException(`Email ${data.email} is already in use`);

    const hashedPassword = UsersService.hashPassword(data.password);

    const user = this.usersRepository.create({
      ...data,
      password: hashedPassword,
    });

    await this.usersRepository.getEntityManager().persist(user).flush();

    return user;
  }

  private static hashPassword(password: string): string {
    return bcrypt.hashSync(password, HASH_ROUNDS);
  }

  private static comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
