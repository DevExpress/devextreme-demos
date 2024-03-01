import { BuildOptions, build } from 'esbuild';
import { existsSync, mkdirSync, removeSync } from 'fs-extra';
import { Demo, Framework } from '../helper/types';
import { createDemoLayout, getDestinationPathByDemo, getSourcePathByDemo } from '../helper/index';

interface Bundler {
  framework: Framework;
  getBuildOptions(demo: Demo): BuildOptions;
  buildDemo(demo: Demo): Promise<void>;
}
export default class AngularBundler implements Bundler {
  framework: Framework;

  constructor() {
    this.framework = 'Angular';
  }

  getBuildOptions = (demo: Demo): BuildOptions => ({});

  buildDemo = async (demo: Demo): Promise<void> => {
    const sourceDemoPath = getSourcePathByDemo(demo, this.framework);
    if (!existsSync(sourceDemoPath)) {
      return;
    }

    const excludedDemos = ['Localization', 'CellCustomization', 'TimeZonesSupport', 'ExportToPDF'];
    let thisDemoExcluded = false;
    excludedDemos.forEach((excludedDemo) => {
      if (sourceDemoPath.includes(excludedDemo)) {
        thisDemoExcluded = true;
      }
    });
    if (thisDemoExcluded) {
      return;
    }

    const destinationDemoPath = getDestinationPathByDemo(demo, this.framework);
    if (existsSync(destinationDemoPath)) {
      removeSync(destinationDemoPath);
    }

    mkdirSync(destinationDemoPath, { recursive: true });

    // const options = this.getBuildOptions(demo);
    // await build(options);

    createDemoLayout(demo, this.framework);
  };
}
