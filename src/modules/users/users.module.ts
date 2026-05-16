import { User } from '@comics-map/shared';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UsersController } from '@modules/users/users.controller';
import { UsersService } from '@modules/users/users.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [MikroOrmModule.forFeature([User])],
})
export class UsersModule {}
