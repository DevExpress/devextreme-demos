import { readFileSync, existsSync } from 'fs-extra';
import { Demo, Framework, Item } from '../create-bundles/helper/types.js';
import * as esbundler from '../create-bundles';
import * as menuMeta from '../../JSDemos/menuMeta.json';

type ChangedFile = { filename: string };
type ChangedDemo = {
  Widget: string,
  Name: string,
  Framework: Framework
};

const getDemosByMenuMeta = (changedDemos: ChangedDemo[]) => {
  const menu: Item[] = (menuMeta as any).default;
  const result: Demo[] = [];

  for (const meta of menu) {
    for (const group of meta.Groups) {
      const demos = group.Demos || [];
      for (const demo of demos) {
        for (const changedDemo of changedDemos) {
          if (demo.Widget === changedDemo.Widget && demo.Name === changedDemo.Name) {
            result.push(demo);
          }
        }
      }
    }
  }

  return result;
};

const getListChangedDemos = () => {
  if (process.env.CHANGEDFILEINFOSPATH && !existsSync(process.env.CHANGEDFILEINFOSPATH)) {
    process.exit();
  }

  const changedFilesContents = readFileSync(process.env.CHANGEDFILEINFOSPATH, 'utf-8');
  const transformFiles: ChangedFile[] = JSON.parse(changedFilesContents);
  const transformDemos: ChangedDemo[] = transformFiles
    .filter((item: ChangedFile) => item.filename.startsWith('JSDemos'))
    .map((item: ChangedFile) => {
      const parts = item.filename.split('/');
      return {
        Widget: parts[2],
        Name: parts[3],
        Framework: parts[4] as Framework,
      };
    })
    .filter((demo: ChangedDemo) => {
      if (process.env.FRAMEWORK !== demo.Framework) {
        return false;
      }

      return true;
    });

  const changedDemos = getDemosByMenuMeta(transformDemos);
  return changedDemos;
};

const bundler = esbundler.getBundler(process.env.FRAMEWORK as Framework);
const changedDemos = getListChangedDemos();
changedDemos.forEach((demo) => {
  esbundler.buildDemo(demo, bundler);
});
