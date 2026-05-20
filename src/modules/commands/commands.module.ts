import { CreateSuperUserCommand } from '@commands/create-superuser.command';
import { GraphModule } from '@modules/graph/graph.module';
import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { LayoutRebuildCommand } from './layout-rebuild.command';
import { SeedCommand } from './seed/seed.command';

@Module({
  imports: [GraphModule, UsersModule],
  providers: [CreateSuperUserCommand, LayoutRebuildCommand, SeedCommand],
})
export class CommandsModule {}
