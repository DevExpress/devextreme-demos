/* eslint-disable no-useless-return */
import { join } from 'path';
import {
  copySync, existsSync, readdirSync, readFileSync, writeFileSync,
} from 'fs-extra';
import { version as DXVersion } from 'devextreme/package.json';
import { Demo } from './types';

const sourceDemosDir = join(__dirname, '..', '..', '..', 'JSDemos', 'Demos');
const destinationPublishDir = join(__dirname, '..', '..', '..', 'publish-demos');

export const getSourcePathByDemo = (demo: Demo, framework: string) => join(sourceDemosDir, demo.Widget, demo.Name, framework);

export const getDestinationPathByDemo = (demo: Demo, framework: string) => join(destinationPublishDir, 'Demos', demo.Widget, demo.Name, framework);

export const copyMetadata = () => {
  const sourceData = join(sourceDemosDir, '..', 'data');
  const sourceImages = join(sourceDemosDir, '..', 'images');

  const destinationCss = join(destinationPublishDir, 'css');
  const destinationData = join(destinationPublishDir, 'data');
  const destinationImages = join(destinationPublishDir, 'images');

  const nodeModulesPath = join(__dirname, '..', '..', '..', 'node_modules');
  const diagramCss = join(nodeModulesPath, 'devexpress-diagram', 'dist', 'dx-diagram.css');
  const ganttCss = join(nodeModulesPath, 'devexpress-gantt', 'dist', 'dx-gantt.css');

  copySync(diagramCss, join(destinationCss, 'dx-diagram.css'));
  copySync(ganttCss, join(destinationCss, 'dx-gantt.css'));
  copySync(sourceData, destinationData);
  copySync(sourceImages, destinationImages);
};

const getBundlePath = (distDemoPath: string) => readdirSync(distDemoPath).find((item) => item.startsWith('bundle'));

const copyDemoStyles = (source: string, dist: string) => {
  const sourceCss = join(source, 'styles.css');
  const destinationCss = join(dist, 'styles.css');
  if (existsSync(sourceCss)) {
    copySync(sourceCss, destinationCss);
  }
};

const copyReactDemoLayout = (demo: Demo, framework: string): void => {
  const destinationDemoPath = getDestinationPathByDemo(demo, framework);
  const sourceDemoTemplate = join(__dirname, '..', 'React', 'index.html');

  const options = {
    demo_title: `DevExtreme ${framework} Demo - ${demo.Widget} ${demo.Title}`,
    dx_version: DXVersion,
    bundle_path: getBundlePath(destinationDemoPath),
  };

  let htmlTemplate = readFileSync(sourceDemoTemplate, 'utf-8');
  Object.keys(options).forEach((key) => {
    htmlTemplate = htmlTemplate.replace(`{{${key}}}`, options[key]);
  });

  writeFileSync(join(destinationDemoPath, 'index.html'), htmlTemplate);
};

export const copyDemoMetadata = (demo: Demo, framework: string) => {
  const sourceDemoPath = getSourcePathByDemo(demo, framework);
  const destinationDemoPath = getDestinationPathByDemo(demo, framework);
  copyDemoStyles(sourceDemoPath, destinationDemoPath);

  if (framework === 'React') {
    copyReactDemoLayout(demo, 'React');
  }
};

export const isSkipDemo = (demo: Demo) => {
  const { Widget } = demo;
  const isLocalization = Widget === 'Localization';

  return isLocalization;
};
