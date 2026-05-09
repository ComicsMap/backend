import { GraphModule } from '@modules/graph/graph.module';
import { Module } from '@nestjs/common';
import { LayoutRebuildCommand } from './layout-rebuild.command';
import { SeedCommand } from './seed.command';

@Module({
  imports: [GraphModule],
  providers: [LayoutRebuildCommand, SeedCommand],
})
export class CommandsModule {}
