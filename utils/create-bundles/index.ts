/* eslint-disable import/no-extraneous-dependencies */
import yargs from 'yargs';
import { Framework, Args, Item, Demo } from './helper/types';
import { copyMetadata, isSkipDemo } from './helper';
import { ESBundler } from './helper/bundler';
import ReactBundler from './React/bundler';

import * as menuMeta from '../../JSDemos/menuMeta.json';
import VueBundler from './Vue/bundler';

const argv = yargs.options({
  framework: { type: 'string' },
  'copy-metadata': { type: 'boolean' },
}).argv as Args;

export const getBundler = (framework: Framework): ESBundler => {
  if (framework === 'React') {
    return new ReactBundler();
  }

  if (framework === 'Vue') {
    return new VueBundler();
  }

  return undefined;
};

export const buildDemo = async (demo: Demo, bundler: ESBundler) => {
  console.log(`${bundler.framework} Demo: ${demo.Widget} - ${demo.Name}`);

  // eslint-disable-next-line no-await-in-loop
  await bundler.buildDemo(demo);
}

const buildDemos = async (bundler: ESBundler) => {
  const menu: Item[] = (menuMeta as any).default;

  for (const meta of menu) {
    for (const group of meta.Groups) {
      const demos = group.Demos || [];
      for (const demo of demos) {
        if (isSkipDemo(demo)) {
          break;
        }

        buildDemo(demo, bundler);
      }
    }
  }
};

if (argv['copy-metadata']) {
  copyMetadata();
}

if(argv.framework) {
  const currentBundler = getBundler(argv.framework);
  if (currentBundler) {
    buildDemos(currentBundler);
  }
}
