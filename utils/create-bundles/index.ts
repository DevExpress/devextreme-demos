import * as esbuild from 'esbuild';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs-extra';
import {
  copyDemoMetadata, getSourcePathByDemo, getDestinationPathByDemo, isSkipDemo, copyMetadata,
} from './helper';
import { Demo, Item } from './helper/types';

import * as menuMeta from '../../JSDemos/menuMeta.json';

const buildReactDemo = async (demo: Demo) => {
  const sourceDemoPath = getSourcePathByDemo(demo, 'React');
  if (!existsSync(sourceDemoPath)) {
    return;
  }

  const destionationDemoPath = getDestinationPathByDemo(demo, 'React');
  mkdirSync(destionationDemoPath, { recursive: true });

  // Build demo bundle
  const entryDemoPoint = join(sourceDemoPath, 'index.js');
  await esbuild.build({
    entryPoints: [entryDemoPoint],
    outdir: destionationDemoPath,
    entryNames: '[dir]/bundle.[hash]',
    bundle: true,
    minify: true,
    loader: { '.js': 'jsx' },
    // TODO: Fix globolize aliases
  }).then(() => {
    copyDemoMetadata(demo, 'React');
  });
};

const buildDemo = async () => {
  const menu: Item[] = (menuMeta as any).default;

  for (const meta of menu) {
    const groups = meta.Groups;
    for (const group of groups) {
      const demos = group.Demos || [];
      for (const demo of demos) {
        if (isSkipDemo(demo)) {
          return;
        }

        console.log(`Demo: ${demo.Widget} - ${demo.Name}`);
        // eslint-disable-next-line no-await-in-loop
        await buildReactDemo(demo);
      }
    }
  }
};

buildDemo();
copyMetadata();
