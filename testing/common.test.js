import glob from 'glob';
import { ClientFunction } from 'testcafe';
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';
import { compareScreenshot } from 'devextreme-screenshot-comparer';
import { axeCheck, createReport } from '@testcafe-community/axe';
import {
  getPortByIndex,
  runTestAtPage,
  shouldRunFramework,
  shouldRunTestAtIndex,
} from '../utils/visual-tests/matrix-test-helper';
import { appendMdReport } from '../utils/axe-reporter/reporter';

const globalReadFrom = (basePath, relativePath, mapCallback) => {
  const absolute = join(basePath, relativePath);
  if (existsSync(absolute)) {
    const result = readFileSync(absolute, 'utf8');
    return (mapCallback && result && mapCallback(result)) || result;
  }
  return null;
};
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
    if ((demoApp && demoApp.innerText !== 'Loading...') || demoAppCounter === 120) {
      setTimeout(resolve, 1000);
      clearInterval(demoAppIntervalHandle);
    }
    demoAppCounter += 1;
  }, 1000);
}));

const injectStyle = (style) => `
    var style = document.createElement('style'); 
    style.innerHTML = \`${style}\`;
    document.getElementsByTagName('head')[0].appendChild(style);
  `;

const execTestCafeCode = (t, code) => {
  // eslint-disable-next-line no-eval
  const testCafeFunction = eval(code);
  return testCafeFunction(t);
};

['jQuery', 'React', 'Vue', 'Angular'].forEach((approach) => {
  if (!shouldRunFramework(approach)) { return; }
  fixture(approach)
    .beforeEach(async (t) => {
      // eslint-disable-next-line spellcheck/spell-checker
      t.ctx.watchDogHandle = setTimeout(() => { throw new Error('test timeout exceeded'); }, 3 * 60 * 1000);
      await t.resizeWindow(1000, 800);
    })
    // eslint-disable-next-line spellcheck/spell-checker
    .afterEach((t) => clearTimeout(t.ctx.watchDogHandle))
    .clientScripts([
      { module: 'mockdate' },
      { module: 'axe-core/axe.min.js' },
      join(__dirname, '../utils/visual-tests/inject/test-utils.js'),
      { content: injectStyle(globalReadFrom(__dirname, '../utils/visual-tests/inject/test-styles.css')) },
      {
        content: `
          window.addEventListener('error', function (e) {
              console.error(e.message); 
          });`,
      },
    ]);

  const getDemoPaths = (platform) => glob.sync('JSDemos/Demos/*/*')
    .map((path) => join(path, platform));

  getDemoPaths(approach).forEach((demoPath, index) => {
    if (!shouldRunTestAtIndex(index) || !existsSync(demoPath)) { return; }

    // eslint-disable-next-line max-len
    const readFrom = (relativePath, mapCallback) => globalReadFrom(demoPath, relativePath, mapCallback);

    const testParts = demoPath.split(/[/\\]/);
    const widgetName = testParts[2];
    const demoName = testParts[3];
    const testName = `${widgetName}-${demoName}`;

    const clientScriptSource = readFrom('../client-script.js', (x) => [{ content: x }]) || [];
    const testCodeSource = readFrom('../test-code.js');
    const testCafeCodeSource = readFrom('../testcafe-test-code.js');
    const visualTestSettings = readFrom('../visualtestrc.json', (x) => JSON.parse(x));
    const visualTestStyles = readFrom('../test-styles.css', (x) => injectStyle(x));

    let comparisonOptions;
    if (process.env.DISABLE_DEMO_TEST_SETTINGS !== 'all') {
      const approachLowerCase = approach.toLowerCase();
      const mergedTestSettings = (visualTestSettings && {
        ...visualTestSettings,
        ...visualTestSettings[approachLowerCase],
      }) || {};

      if (process.env.CI_ENV && process.env.DISABLE_DEMO_TEST_SETTINGS !== 'ignore') {
        if (mergedTestSettings.ignore) { return; }
      }
      if (process.env.DISABLE_DEMO_TEST_SETTINGS !== 'comparison-options') {
        comparisonOptions = mergedTestSettings['comparison-options'];
      }
    }

    runTestAtPage(test, `http://127.0.0.1:808${getPortByIndex(index)}/JSDemos/Demos/${widgetName}/${demoName}/${approach}/`)
      .clientScripts(clientScriptSource)(testName, async (t) => {
        if (visualTestStyles) {
          await execCode(visualTestStyles);
        }

        if (approach === 'Angular') {
          await waitForAngularLoading();
        }
        if (testCodeSource) {
          await execCode(testCodeSource);
        }

        if (testCafeCodeSource) {
          await execTestCafeCode(t, testCafeCodeSource);
        }

        if (process.env.STRATEGY === 'accessibility') {
          const { error, results } = await axeCheck(t, '.demo-container');

          if (results.violations.length > 0) {
            appendMdReport({ testName, results });
          }

          await t.expect(error).notOk();
          await t.expect(results.violations.length === 0).ok(createReport(results.violations));
        } else {
          const comparisonResult = await compareScreenshot(t, `${testName}.png`, undefined, comparisonOptions);
          if (!comparisonResult) {
            // eslint-disable-next-line no-console
            console.log(await t.getBrowserConsoleMessages());
          }
          await t.expect(comparisonResult).ok('INVALID_SCREENSHOT');
        }
      });
  });
});
