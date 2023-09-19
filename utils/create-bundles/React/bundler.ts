import { build, BuildOptions } from 'esbuild';
import { existsSync, mkdirSync } from 'fs-extra';
import { join } from 'path';
import {
  copyDemoStyles, getDestinationPathByDemo, getSourcePathByDemo, createDemoLayout,
} from '../helper';
import { Bundler } from '../helper/bundler';
import { Demo, Framework } from '../helper/types';

export default class ReactBundler implements Bundler {
  framework: Framework = 'React';

  getBuildOptions = (demo: Demo): BuildOptions => {
    const sourceDemoPath = getSourcePathByDemo(demo, this.framework);
    const destinationDemoPath = getDestinationPathByDemo(demo, this.framework);

    const options: BuildOptions = {
      bundle: true,
      minify: true,
      loader: { '.js': 'jsx' },
      entryNames: '[dir]/bundle.[hash]',
      outdir: destinationDemoPath,
      entryPoints: this.#getEntryPoints(sourceDemoPath),
    };

    return options;
  };

  buildDemo = async (demo: Demo): Promise<void> => {
    const sourceDemoPath = getSourcePathByDemo(demo, this.framework);
    if (!existsSync(sourceDemoPath)) {
      return;
    }

    const destinationDemoPath = getDestinationPathByDemo(demo, this.framework);
    mkdirSync(destinationDemoPath, { recursive: true });

    const options = this.getBuildOptions(demo);
    await build(options);

    copyDemoStyles(sourceDemoPath, destinationDemoPath);
    createDemoLayout(demo, this.framework);
  };

  #getEntryPoints = (sourceDemoPath: string) => [join(sourceDemoPath, 'index.js')];
}
