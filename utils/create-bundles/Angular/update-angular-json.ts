import { writeFileSync, existsSync } from 'fs-extra';
import { Demo, Item } from '../helper/types';
import { getSourcePathByDemo, getDestinationPathByDemo, isSkipDemo } from '../helper';
import * as menuMeta from '../../../JSDemos/menuMeta.json';

export const getProjectNameByDemo = (Demo: Demo) => (`${Demo.Widget.toLowerCase()}-${Demo.Name.toLowerCase()}`);

const createConfigForDemo = (Demo: Demo) => {
  const demoSourcePath = getSourcePathByDemo(Demo, 'Angular').split('\\').join('/');
  const demoDestinationPath = getDestinationPathByDemo(Demo, 'Angular').split('\\').join('/');
  return {
    projectType: 'application',
    schematics: {
      '@schematics/angular:application': {
        strict: false,
      },
    },
    root: demoSourcePath,
    sourceRoot: demoSourcePath,

    architect: {
      build: {
        builder: '@angular-devkit/build-angular:browser',
        options: {
          outputPath: demoDestinationPath,
          index: `${demoDestinationPath}/index.html`,
          main: `${demoSourcePath}/app/app.component.ts`,
          polyfills: `${demoSourcePath}/polyfills.ts`,
          tsConfig: `${demoSourcePath}/tsconfig.json`,
          scripts: [],
        },
        configurations: {
          production: {
            budgets: [
              {
                type: 'initial',
                maximumWarning: '500kb',
                maximumError: '2mb',
              },
              {
                type: 'anyComponentStyle',
                maximumWarning: '2kb',
                maximumError: '4kb',
              },
            ],
            outputHashing: 'all',
          },
        },
        defaultConfiguration: 'production',
      },
    },
  };
};

const createAngularJson = () => {
  const angularJsonObject = {
    version: 1,
    newProjectRoot: 'projects',
    projects: {},
    defaultProject: 'accordion-overview',
  };
  const menu: Item[] = (menuMeta as any).default;

  for (const meta of menu) {
    for (const group of meta.Groups) {
      const demos = group.Demos || [];
      for (const demo of demos) {
        if (isSkipDemo(demo)) {
          break;
        }

        if (existsSync(getSourcePathByDemo(demo, 'Angular'))) {
          console.log(`Angular Config created: ${demo.Widget} - ${demo.Name}`);

          angularJsonObject.projects[getProjectNameByDemo(demo)] = createConfigForDemo(demo);
        } else {
          console.log(`No angular project for: ${demo.Widget} - ${demo.Name}`);
        }
      }
    }
  }

  const jsonString = JSON.stringify(angularJsonObject);
  const filePath = 'angular2.json';
  writeFileSync(filePath, jsonString);
};

createAngularJson();
