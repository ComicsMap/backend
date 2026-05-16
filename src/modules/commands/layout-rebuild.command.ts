import { GraphService } from '@modules/graph/graph.service';
import { Logger } from '@nestjs/common';
import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'layout:rebuild',
  description: 'Rebuild the global graph layout (clusters + ELK positions)',
})
export class LayoutRebuildCommand extends CommandRunner {
  private readonly logger = new Logger(LayoutRebuildCommand.name);

  constructor(private readonly graphService: GraphService) {
    super();
  }

  async run(): Promise<void> {
    await this.graphService.rebuildLayout();
  }
}
