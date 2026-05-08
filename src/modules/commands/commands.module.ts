import { GraphModule } from '@modules/graph/graph.module';
import { Module } from '@nestjs/common';
import { SeedCommand } from './seed.command';

@Module({
  imports: [GraphModule],
  providers: [SeedCommand],
})
export class CommandsModule {}
