/* eslint-disable import/no-extraneous-dependencies */
import * as esbuild from 'esbuild';
import alias from 'esbuild-plugin-alias';
import { join } from 'path';
import { existsSync, mkdirSync, copyFileSync } from 'fs';

import * as menuMeta from '../../JSDemos/menuMeta.json';

interface Demo {
  Title: string;
  Name: string;
  DocUrl: string;
  Widget: string;
  DemoType: string;
}

interface Group {
  Name: string;
  Equivalents: string;
  Demos: Demo[];
}

interface Item {
  Name: string;
  Equivalents: string;
  Groups: Group[];
}

const getOutDir = (destintation: string) => join(__dirname, '..', '..', 'publish-demos', 'Demo', destintation);
const getPathToDemo = (destinationDemo: string) => join(__dirname, '..', '..', 'JSDemos', 'Demos', destinationDemo);

const hasLocalizationModule = (demo: Demo) => {
  const { Widget, Name } = demo;
  const isLocalization = Widget === 'Localization';
  const isSchedulerLocalization = Widget === 'Scheduler' && (Name === 'CustomTemplates' || Name === 'TimeZonesSupport');

  return isLocalization || isSchedulerLocalization;
};

const buildReactDemo = async (demoComponent: string, demoName: string) => {
  const destinationDemo = join(demoComponent, demoName, 'React');
  const pathToDemo = getPathToDemo(destinationDemo);
  if (!existsSync(pathToDemo)) {
    return;
  }

  const outDir = getOutDir(destinationDemo);
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  // Copy demo layout
  // copyFileSync(join(__dirname, 'React', 'index.html'), join(outDir, 'index.html'));

  // Copy demos styles
  const pathDemoStyles = join(pathToDemo, 'styles.css');
  if (existsSync(pathDemoStyles)) {
    // copyFileSync(pathDemoStyles, join(outDir, 'styles.css'));
  }

  // Build demo bundle
  const entryDemoPoint = join(pathToDemo, 'index.js');
  await esbuild.build({
    entryPoints: [entryDemoPoint],
    bundle: true,
    minify: true,
    outfile: join(outDir, 'demo-bundle.js'),
    loader: { '.js': 'jsx' },
    plugins: [
      alias({
        // TODO: Fix globolize aliases
        // globalize: 'globalize/dist/globalize',
      }),
    ],
  });
};

const menu: Item[] = (menuMeta as any).default;
menu.forEach((meta) => {
  meta.Groups.forEach((group) => {
    group.Demos?.forEach((demo) => {
      const { Name, Widget } = demo;

      const isSkipDemo = hasLocalizationModule(demo);
      if (isSkipDemo) {
        return;
      }

      buildReactDemo(Widget, Name);
    });
  });
});
