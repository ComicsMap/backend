import { LayoutBuilderService } from '@modules/graph/layout-builder.service';
import { Logger } from '@nestjs/common';
import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'layout:rebuild',
  description: 'Rebuild the global graph layout (clusters + ELK positions)',
})
export class LayoutRebuildCommand extends CommandRunner {
  private readonly logger = new Logger(LayoutRebuildCommand.name);

  constructor(private readonly layoutBuilder: LayoutBuilderService) {
    super();
  }

  async run(): Promise<void> {
    await this.layoutBuilder.rebuild();
  }
}
