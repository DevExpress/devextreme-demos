/* eslint-disable no-use-before-define */
/* eslint-disable no-continue */
import { readFileSync, existsSync } from 'fs';

process.env.CHANGEDFILEINFOSPATH = 'changedfiles.json';

let targetFramework;
let total;
let current;
const explicitTests = getExplicitTests();

const concurrency = (process.env.CONCURRENCY && (+process.env.CONCURRENCY)) || 1;

const currentCriteria = process.env.CONSTEL;
if (currentCriteria) {
  const match = currentCriteria.match(/(?<name>\w+)(?<parallel>\((?<current>\d+)\/(?<total>\d+)\))?/);
  if (match) {
    targetFramework = match.groups.name;
    const parallelFilter = match.groups.parallel;
    if (parallelFilter) {
      total = +match.groups.total;
      current = +match.groups.current;
    }
  }
}

function shouldRunTestExplicitlyInternal(framework, product, demo) {
  return explicitTests.some((x) => x.framework.test(framework)
    && x.demo.test(demo)
    && x.product.test(product));
}

function patternGroupFromValues(product, demo, framework, screenshot) {
  const wrap = (x) => RegExp(x || '.*', 'i');
  return {
    product: wrap(product),
    demo: wrap(demo),
    framework: wrap(framework),
    screenshot: wrap(screenshot),
  };
}

function getExplicitTestsFromArgs() {
  const result = [];
  // eslint-disable-next-line spellcheck/spell-checker
  process.argv.slice(2).forEach((argument) => {
    const parts = argument.split('-');
    result.push(patternGroupFromValues(...parts));
  });
  return result.length ? result : undefined;
}

function getExplicitTests() {
  debugger;
  const changedFilesPath = process.env.CHANGEDFILEINFOSPATH;
  if (!changedFilesPath || !existsSync(changedFilesPath)) return getExplicitTestsFromArgs();

  const changedFiles = JSON.parse(readFileSync(changedFilesPath));
  if (!changedFiles) {
    return undefined;
  }

  const result = [];

  const demoExpr = /JSDemos\/Demos\/(?<product>\w+)\/(?<demo>\w+)\/(?<framework>angular|angularjs|jquery|knockout|react|vue)\/.*/i;
  const demoFilesExpr = /JSDemos\/Demos\/(?<product>\w+)\/(?<demo>\w+)\/(?<data>.*)/i;
  const commonEtalonsExpr = /testing\/etalons\/(?<product>\w+)-(?<demo>\w+)(?<suffix>.*).png/i;
  const manualEtalonsExpr = /testing\/widgets\/.*\/(?<screenshot>.*)(mask)?.png/i;

  // eslint-disable-next-line no-restricted-syntax
  for (const changedFile of changedFiles) {
    const fileName = changedFile.filename;

    if (/mvcdemos.*/i.test(fileName)
      || /netcoredemos.*/i.test(fileName)) continue;

    const parseResult = demoExpr.exec(fileName)
      || demoFilesExpr.exec(fileName)
      || commonEtalonsExpr.exec(fileName)
      || manualEtalonsExpr.exec(fileName);

    if (parseResult) {
      if (parseResult.groups.data && parseResult.groups.data === 'description.md') continue;

      result.push(patternGroupFromValues(
        parseResult.groups.product,
        parseResult.groups.demo,
        parseResult.groups.framework,
        parseResult.groups.screenshot,
      ));
    } else {
      return undefined;
    }
  }

  return result;
}

export function shouldRunFramework(currentFramework) {
  return !currentFramework
    || !targetFramework
    || currentFramework.toLowerCase() === targetFramework.toLowerCase();
}

export function shouldRunTestAtIndex(testIndex) {
  return !total || !current || !testIndex
    || (testIndex % total) === (current - 1);
}

export function shouldRunTest(currentFramework, testIndex) {
  return shouldRunFramework(currentFramework) && shouldRunTestAtIndex(testIndex);
}

export function shouldRunTestExplicitly(demoUrl) {
  if (!explicitTests) return false;

  const parts = demoUrl.split('/').filter((x) => x && x.length);

  return shouldRunTestExplicitlyInternal(
    parts[parts.length - 1],
    parts[parts.length - 3],
    parts[parts.length - 2],
  );
}

export function runTestAt(test, demoUrl) {
  return (shouldRunTestExplicitly(demoUrl) ? test.only : test).page(demoUrl);
}

export function runTest(testObject, framework, product, demo, index, callback, knownScreenshots) {
  if (explicitTests) {
    if (shouldRunTestExplicitlyInternal(framework, product, demo)) {
      callback(testObject.only);
      return;
    }

    if (knownScreenshots) {
      const screenshotObject = knownScreenshots.reduce(
        (accumulator, value) => {
          accumulator[value] = true;
          return accumulator;
        },
        {},
      );
      const explicitScreenshot = explicitTests
        .map((x) => x.screenshot)
        .filter((x) => x)
        .some((x) => screenshotObject[x]);

      if (explicitScreenshot) {
        callback(testObject.only);
        return;
      }
    }
  }

  if (!shouldRunTest(framework, index)) return;
  callback(testObject);
}

export function getPortByIndex(testIndex) {
  return (total && (Math.floor(testIndex / total) % concurrency)) || 0;
}
