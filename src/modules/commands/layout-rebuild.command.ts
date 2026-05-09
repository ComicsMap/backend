import { LayoutBuilderService } from '@modules/graph/layout-builder.service';
import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'layout:rebuild',
  description: 'Rebuild the global graph layout (clusters + ELK positions)',
})
export class LayoutRebuildCommand extends CommandRunner {
  constructor(private readonly layoutBuilder: LayoutBuilderService) {
    super();
  }

  async run(): Promise<void> {
    const result = await this.layoutBuilder.rebuild();
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  }
}
