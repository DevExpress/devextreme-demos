import * as esbuild from 'esbuild';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs-extra';
import {
  copyDemoMetadata, getSourcePathByDemo, getDestinationPathByDemo, isSkipDemo,
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
  esbuild.build({
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

const menu: Item[] = (menuMeta as any).default;
menu.forEach((meta) => {
  meta.Groups.forEach((group) => {
    group.Demos?.forEach((demo) => {
      if (isSkipDemo(demo)) {
        return;
      }

      buildReactDemo(demo);
    });
  });
});
