import { build, BuildOptions } from 'esbuild';
// eslint-disable-next-line import/no-extraneous-dependencies
import vuePlugin from 'esbuild-plugin-vue3';
import { existsSync, mkdirSync, removeSync } from 'fs-extra';
import { join } from 'path';
import {
  copyDemoStyles, getDestinationPathByDemo, getSourcePathByDemo, createDemoLayout,
} from '../helper';
import { Bundler } from '../helper/bundler';
import { Demo, Framework } from '../helper/types';

export default class VueBundler implements Bundler {
  framework: Framework = 'Vue';

  getBuildOptions = (demo: Demo): BuildOptions => {
    const sourceDemoPath = getSourcePathByDemo(demo, this.framework);
    const destinationDemoPath = getDestinationPathByDemo(demo, this.framework);

    const options: BuildOptions = {
      bundle: true,
      minify: true,
      entryNames: '[dir]/bundle.[hash]',
      outdir: destinationDemoPath,
      entryPoints: this.#getEntryPoints(sourceDemoPath),
      plugins: [vuePlugin() as any],
      external: ['*.png', '*.svg'],
      define: {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
      },
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

  #getEntryPoints = (sourceDemoPath: string) => [join(sourceDemoPath, 'index.js')];
}
