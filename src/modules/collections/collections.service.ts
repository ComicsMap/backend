import { Collection } from '@entities/users/collections/collection.entity';
import { User } from '@entities/users/user.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectRepository(Collection)
    private readonly collectionRepository: EntityRepository<Collection>,
  ) {}

  public initUserCollection(user: User) {
    this.collectionRepository.create({ owner: user });
  }
}
