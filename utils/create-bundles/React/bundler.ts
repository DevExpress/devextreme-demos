import { build, BuildOptions } from 'esbuild';
import { existsSync, mkdirSync, removeSync } from 'fs-extra';
import { join } from 'path';
import ignoreMissingCss from '../plugins/ignore-missing-css';
import {
  getDestinationPathByDemo, getSourcePathByDemo, createDemoLayout,
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
      plugins: [ignoreMissingCss],
      external: ['*.png', '*.svg'],
    };

    return options;
  };

  buildDemo = async (demo: Demo): Promise<void> => {
    const sourceDemoPath = getSourcePathByDemo(demo, this.framework);
    if (!existsSync(sourceDemoPath)) {
      return;
    }

    const destinationDemoPath = getDestinationPathByDemo(demo, this.framework);
    if (existsSync(destinationDemoPath)) {
      removeSync(destinationDemoPath);
    }

    mkdirSync(destinationDemoPath, { recursive: true });

    const options = this.getBuildOptions(demo);
    await build(options);

    createDemoLayout(demo, this.framework);
  };

  #getEntryPoints = (sourceDemoPath: string) => [join(sourceDemoPath, 'index.js'), join(sourceDemoPath, 'styles.css')];
}
