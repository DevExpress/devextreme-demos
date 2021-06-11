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

fixture`Getting Started`
  .beforeEach((t) => t.resizeWindow(1000, 800))
  .clientScripts([
    { module: 'mockdate' },
  ]);

  const ensureDevExpressThemesInitialized = ClientFunction(() => 
    new Promise((resolve, reject) => {

      const onInitialized = () => setTimeout(resolve, 100);                
      const trySubscribeInitialized = (callback) => {

        const gbthis = globalThis || Window.globalThis;          
        const initialized = gbthis?.DevExpress?.ui?.themes?.initialized;
        if(initialized){
          initialized(callback);
          return true;
        }
        return false;
      };

      if(!trySubscribeInitialized(onInitialized)) {
        const subscribeInitializedId = setInterval(() => {
          if(trySubscribeInitialized(onInitialized)) {
            clearInterval(subscribeInitializedId);
            clearTimeout(subscribeInitializedWatcherId);
            subscribeInitializedId = -1;
          }
        }, 100);

        const subscribeInitializedWatcherId = setTimeout(() => {
          if(subscribeInitializedId!=-1) {
            clearInterval(subscribeInitializedId);
            resolve();
          }              
        }, 10*1000);
      }
    })
);

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
        if (testCodeSource) {
          await execCode(testCodeSource);
        }

        await ensureDevExpressThemesInitialized();

        if (testCafeCodeSource) {
          await execTestCafeCode(t, testCafeCodeSource);
        }

        await t.expect(
          await compareScreenshot(t, `${testName}.png`),
        ).ok();
      });    
  });
});
