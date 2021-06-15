import glob from 'glob';
import { ClientFunction } from 'testcafe';
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';
import { compareScreenshot } from './helpers/screenshot-comparer';

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

const doEvents = ClientFunction(() => new Promise((resolve) => {
  setTimeout(resolve, 17); // 17 = ceil(1/60) sec; ~1 frame
}));

const ensureDevExpressThemesInitialized = ClientFunction(() => new Promise((resolve) => {
  const onInitialized = () => setTimeout(resolve, 100);
  const trySubscribeInitialized = (callback) => {
    // eslint-disable-next-line no-undef
    const globThis = globalThis || Window.globalThis;
    const initialized = globThis
        && globThis.DevExpress
        && globThis.DevExpress.ui
        && globThis.DevExpress.ui.themes
        && globThis.DevExpress.ui.themes.initialized;

    if (initialized) {
      initialized(callback);
      return true;
    }
    return false;
  };

  if (!trySubscribeInitialized(onInitialized)) {
    let subscribeInitializedWatcherId = -1;
    let subscribeInitializedId = setInterval(() => {
      if (trySubscribeInitialized(onInitialized)) {
        clearInterval(subscribeInitializedId);
        clearTimeout(subscribeInitializedWatcherId);
        subscribeInitializedId = -1;
      }
    }, 100);

    subscribeInitializedWatcherId = setTimeout(() => {
      if (subscribeInitializedId !== -1) {
        clearInterval(subscribeInitializedId);
        resolve();
      }
    }, 10 * 1000);
  }
}));

fixture`Getting Started`
  // .beforeEach((t) => t.resizeWindow(1000, 800))
  .clientScripts([
    { module: 'mockdate' },
  ]);

const getDemoPaths = (platform) => glob.sync(`JSDemos/Demos/**/${platform}`);

['jQuery'/* , 'React', 'Vue', 'Angular' */].forEach((approach) => {
  const demoPaths = getDemoPaths(approach);

  demoPaths.forEach((demoPath) => {
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
      .page`http://127.0.0.1:8080/JSDemos/Demos/${widgetName}/${demoName}/${approach}/`
      .clientScripts(preTestCodes)(testName, async (t) => {
        await ensureDevExpressThemesInitialized();
        await doEvents();
        await t.resizeWindow(1000, 800);
        await doEvents();

        if (testCodeSource) {
          await execCode(testCodeSource);
          await doEvents();
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
