import { writeFileSync, existsSync } from 'fs-extra';
import { join } from 'path';
import * as menuMeta from '../../../JSDemos/menuMeta.json';
import { getSourcePathByDemo, isSkipDemo } from '../helper';
import { Item } from '../helper/types';

const generatePolyfills = () => {
  const menu: Item[] = (menuMeta as any).default;

  for (const meta of menu) {
    for (const group of meta.Groups) {
      const demos = group.Demos || [];
      for (const demo of demos) {
        if (isSkipDemo(demo)) {
          break;
        }

        if (existsSync(getSourcePathByDemo(demo, 'Angular'))) {
          const polyfillContent = 'import \'zone.js\';\n';
          const filePath = join(getSourcePathByDemo(demo, 'Angular'), 'polyfill.ts');
          writeFileSync(filePath, polyfillContent);

          console.log(`Polyfills file created: ${demo.Widget} - ${demo.Name}`);
        } else {
          console.log(`No angular project for: ${demo.Widget} - ${demo.Name}`);
        }
      }
    }
  }
};

generatePolyfills();
