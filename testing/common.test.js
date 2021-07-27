import glob from 'glob';
import { ClientFunction } from 'testcafe';
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';
import { compareScreenshot } from './helpers/screenshot-comparer';
import { shouldRunFramework, shouldRunTestAtIndex, getPortByIndex } from './helpers/matrix-test-helper';

const singleTestName = undefined;
const execCode = ClientFunction((code) => {
  // eslint-disable-next-line no-eval
  const result = eval(code);
  if (result && typeof result.then === 'function') {
    return Promise.race([result, new Promise((resolve) => setTimeout(resolve, 60000))]);
  }

  return Promise.resolve();
});
const waitForAngularLoading = ClientFunction(() => new Promise((resolve) => {
  let demoAppCounter = 0;
  const demoAppIntervalHandle = setInterval(() => {
    const demoApp = document.querySelector('demo-app');
    if ((demoApp && demoApp.innerText !== 'Loading...') || demoAppCounter === 200) {
      setTimeout(resolve, 1000);
      clearInterval(demoAppIntervalHandle);
    }
    demoAppCounter += 1;
  }, 100);
}));

const execTestCafeCode = (t, code) => {
  // eslint-disable-next-line no-eval
  const testCafeFunction = eval(code);
  return testCafeFunction(t);
};

fixture`Getting Started`
  .beforeEach(async (t) => {
    // eslint-disable-next-line spellcheck/spell-checker
    t.ctx.watchDogHandle = setTimeout(() => { throw new Error('test timeout exceeded'); }, 3 * 60 * 1000);
    await t.resizeWindow(1000, 800);
  })
  // eslint-disable-next-line spellcheck/spell-checker
  .afterEach((t) => clearTimeout(t.ctx.watchDogHandle))
  .clientScripts([{ module: 'mockdate' }, './helpers/test-utils.js']);

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

    const clientScriptPath = join(demoPath, '../client-script.js');
    const testCodePath = join(demoPath, '../test-code.js');
    const testCafeTestCodePath = join(demoPath, '../testcafe-test-code.js');
    const visualTestSettingsPath = join(demoPath, '../visualtestrc.json');

    const clientScriptSource = existsSync(clientScriptPath) ? [{ content: readFileSync(clientScriptPath, 'utf8') }] : [];
    const testCodeSource = existsSync(testCodePath) ? readFileSync(testCodePath, 'utf8') : null;
    const testCafeCodeSource = existsSync(testCafeTestCodePath) ? readFileSync(testCafeTestCodePath, 'utf8') : null;
    const visualTestSettings = existsSync(visualTestSettingsPath) ? JSON.parse(readFileSync(visualTestSettingsPath, 'utf8')) : null;

    const approachLowerCase = approach.toLowerCase();
    const ignoreApproach = visualTestSettings
      && visualTestSettings[approachLowerCase]
      && visualTestSettings[approachLowerCase].ignore;

    if (ignoreApproach) return;
    if (singleTestName && (testName !== singleTestName)) return;
    (singleTestName ? test.only : test)
      .page`http://127.0.0.1:808${getPortByIndex(index)}/JSDemos/Demos/${widgetName}/${demoName}/${approach}/`
      .clientScripts(clientScriptSource)(testName, async (t) => {
        if (approach === 'Angular') {
          await waitForAngularLoading();
        }
        if (testCodeSource) {
          await execCode(testCodeSource);
        }

        if (testCafeCodeSource) {
          await execTestCafeCode(t, testCafeCodeSource);
        }

        await t.expect(
          await compareScreenshot(t, `${testName}.png`),
        ).ok('INVALID_SCREENSHOT');
      });
  });
});
