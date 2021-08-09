/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable no-continue */
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let targetFramework;
let total;
let current;
let demoExpr;
let demoFilesExpr;
let commonEtalonsExpr;
let manualEtalonsExpr;

assignExpressions();

const ignoreChangesPathPatterns = [
  /mvcdemos.*/i,
  /netcoredemos.*/i,
  /jsdemos\/menumeta.json/i,
];

let explicitTests = getExplicitTests();

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

function getCallStack() {
  const orig = Error.prepareStackTrace;
  try {
    Error.prepareStackTrace = (_, stack) => stack;
    const err = new Error();
    Error.captureStackTrace(err, getCallStack);
    const { stack } = err;
    return stack;
  } finally {
    Error.prepareStackTrace = orig;
  }
}
function getCallStackInterestPoints() {
  const basePath = path.resolve(__dirname, '../../');

  return getCallStack()
    .map((x) => x.getFileName())
    .filter((x) => x
      && (x.indexOf('node_modules') === -1)
      && (x.indexOf('internal/modules/cjs') === -1))
    .map((x) => path.relative(basePath, path.dirname(x)))
    .filter((x) => x[0] !== '.')
    .slice(2);
}

function shouldRunTestExplicitlyInternal(framework, product, demo) {
  return explicitTests.masks.some((x) => x.framework.test(framework)
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

function getInterestProcessArgs() {
  // eslint-disable-next-line spellcheck/spell-checker
  return process.argv.slice(2);
}

export function getExplicitTestsFromArgs() {
  const result = { masks: [] };
  getInterestProcessArgs().forEach((argument) => {
    const parts = argument.split('-');
    result.masks.push(patternGroupFromValues(...parts));
  });
  return result.masks.length ? result : undefined;
}

export function getChangedFiles() {
  const changedFilesPath = process.env.CHANGEDFILEINFOSPATH;
  return changedFilesPath
    && existsSync(changedFilesPath)
    && JSON.parse(readFileSync(changedFilesPath));
}

function getExplicitTestsInternal() {
  const changedFiles = getChangedFiles();

  if (!changedFiles) return getExplicitTestsFromArgs();

  const result = { masks: [], traceTree: undefined };

  // eslint-disable-next-line no-restricted-syntax
  for (const changedFile of changedFiles) {
    const fileName = changedFile.filename;

    if (ignoreChangesPathPatterns.some((x) => x.test(fileName))) continue;

    let parseResult = demoExpr.exec(fileName)
      || demoFilesExpr.exec(fileName)
      || commonEtalonsExpr.exec(fileName);
    // eslint-disable-next-line no-cond-assign
    if (!parseResult && (parseResult = manualEtalonsExpr.exec(fileName))) {
      if (result.traceTree == null) result.traceTree = {};
      let currentNamePart = result.traceTree;
      // eslint-disable-next-line no-restricted-syntax
      for (const fileNamePart of fileName.split('/')) {
        const nextNamePart = currentNamePart[fileNamePart] || {};
        currentNamePart[fileNamePart] = nextNamePart;
        currentNamePart = nextNamePart;
      }
      continue;
    }

    if (parseResult) {
      parseResult.groups = parseResult.groups || {};
      if (parseResult.groups.data && parseResult.groups.data === 'description.md') continue;

      result.masks.push(patternGroupFromValues(
        parseResult.groups.product,
        parseResult.groups.demo,
        parseResult.groups.framework,
        fileName.split('/'),
      ));
    } else {
      console.log('Unable to parse changed file, running all tests: ', fileName);
      return undefined;
    }
  }

  return result;
}
function getExplicitTests() {
  const result = getExplicitTestsInternal();
  if (result) {
    // eslint-disable-next-line no-extend-native
    RegExp.prototype.toJSON = RegExp.prototype.toString;
    console.log('Test filters: \r\n', JSON.stringify(result, null, 2));
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
  let executor = test;
  if (explicitTests) {
    if (shouldRunTestExplicitly(demoUrl)) executor = test.only;
    else executor = test.skip;
  }
  return executor.page(demoUrl);
}

export function runTest(testObject, framework, product, demo, index, callback) {
  if (explicitTests) {
    if (shouldRunTestExplicitlyInternal(framework, product, demo)) {
      callback(testObject.only);
      return;
    }
debugger;
    if (explicitTests.traceTree) {
      const stackInterestPoints = getCallStackInterestPoints();
      // eslint-disable-next-line no-restricted-syntax
      for (const point of stackInterestPoints) {
        let currentTracePart = explicitTests.traceTree;
        // eslint-disable-next-line no-restricted-syntax
        for (const pointPart of point.split('/')) {
          if (!currentTracePart) break;
          currentTracePart = currentTracePart[pointPart];
        }
        if (currentTracePart) {
          callback(testObject.only);
          return;
        }
      }
    }

    return;
  }

  if (!shouldRunTest(framework, index)) return;
  callback(testObject);
}

export function getPortByIndex(testIndex) {
  return (total && (Math.floor(testIndex / total) % concurrency)) || 0;
}

export function updateExplicitTests() {
  explicitTests = getExplicitTests();
}

export function assignExpressions(source) {
  const exprSource = {
    ...{
      demoExpr: /JSDemos\/Demos\/(?<product>\w+)\/(?<demo>\w+)\/(?<framework>angular|angularjs|jquery|knockout|react|vue)\/.*/i,
      demoFilesExpr: /JSDemos\/Demos\/(?<product>\w+)\/(?<demo>\w+)\/(?<data>.*)/i,
      commonEtalonsExpr: /testing\/etalons\/(?<product>\w+)-(?<demo>\w+)(?<suffix>.*).png/i,
      manualEtalonsExpr: /testing\/widgets\/.*/i,
    },
    ...source,
  };
  demoExpr = exprSource.demoExpr;
  demoFilesExpr = exprSource.demoFilesExpr;
  commonEtalonsExpr = exprSource.commonEtalonsExpr;
  manualEtalonsExpr = exprSource.manualEtalonsExpr;
}
