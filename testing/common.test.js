import glob from 'glob';
import { ClientFunction } from 'testcafe';
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';
import { compareScreenshot } from './helpers/screenshot-comparer';
import { shouldRunFramework, shouldRunTestAtIndex } from './helpers/matrix-test-helper';

const execCode = ClientFunction((code) => {
  // eslint-disable-next-line no-eval
  const result = eval(code);
  if (result && typeof result.then === 'function') {
    return Promise.race([result, new Promise((resolve) => setTimeout(30000, resolve))]);
  }

  return Promise.resolve();
});

const execTestCafeCode = (t, code) => {
  // eslint-disable-next-line no-eval
  const testCafeFunction = eval(code);
  return testCafeFunction(t);
};

fixture`Getting Started`
  .beforeEach((t) => t.resizeWindow(1000, 800))
  .clientScripts([
    { module: 'mockdate' },
  ]);

const getDemoPaths = (platform) => glob.sync(`JSDemos/Demos/**/${platform}`);

['jQuery', 'React', 'Vue', 'Angular'].forEach((approach) => {
  const demoPaths = getDemoPaths(approach);
  if (!shouldRunFramework(approach)) return;

  demoPaths.forEach((demoPath, index) => {
    if (!shouldRunTestAtIndex(index)) return;

    const testParts = demoPath.split('/');
    const widgetName = testParts[2];
    const demoName = testParts[3];
    const testName = `${widgetName}-${demoName}`;

    const preTestCodePath = join(demoPath, '../pre-test-code.js');
    const testCodePath = join(demoPath, '../test-code.js');
    const testCafeTestCodePath = join(demoPath, '../testcafe-test-code.js');

    const preTestCodes = existsSync(preTestCodePath) ? [{ content: readFileSync(preTestCodePath, 'utf8') }] : [];
    const testCodeSource = existsSync(testCodePath) ? readFileSync(testCodePath, 'utf8') : null;
    const testCafeCodeSource = existsSync(testCafeTestCodePath) ? readFileSync(testCafeTestCodePath, 'utf8') : null;

    test
      .page`http://127.0.0.1:808${index % 4}/JSDemos/Demos/${widgetName}/${demoName}/${approach}/`
      .clientScripts(preTestCodes)(testName, async (t) => {
        if (testCodeSource) {
          await execCode(testCodeSource);
        }

        if (testCafeCodeSource) {
          await execTestCafeCode(t, testCafeCodeSource);
        }

        await t.expect(
          await compareScreenshot(t, `${testName}.png`),
        ).ok();
      });
  });
});
