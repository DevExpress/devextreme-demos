import { readFileSync, existsSync } from 'fs';
import * as path from 'path';

const settings = {
  concurrency: undefined,
  targetFramework: undefined,
  total: undefined,
  current: undefined,
  verbose: undefined,
  demoExpr: undefined,
  demoFilesExpr: undefined,
  commonEtalonsExpr: undefined,
  manualEtalonsExpr: undefined,
  explicitTests: undefined,
  ignoreChangesPathPatterns: undefined,
  manualTestIndex: undefined,
};

// eslint-disable-next-line no-use-before-define
updateConfig();

function getCallStack() {
  const orig = Error.prepareStackTrace;
  try {
    Error.prepareStackTrace = (_, stack) => stack;
    const err = new Error();
    Error.captureStackTrace(err, getCallStack);
    return err.stack;
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
  return settings.explicitTests.masks.some((x) => x.framework.test(framework)
    && x.demo.test(demo)
    && x.product.test(product));
}

function patternGroupFromValues(product, demo, framework) {
  const wrap = (x) => RegExp(x || '.*', 'i');
  return {
    product: wrap(product),
    demo: wrap(demo),
    framework: wrap(framework),
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

  if (!changedFiles) { return getExplicitTestsFromArgs(); }

  const result = { masks: [], traceTree: undefined };

  // eslint-disable-next-line no-restricted-syntax
  for (const changedFile of changedFiles) {
    const fileName = changedFile.filename;

    if (settings.ignoreChangesPathPatterns.some((x) => x.test(fileName))) {
      // eslint-disable-next-line no-continue
      continue;
    }

    let parseResult = settings.demoExpr.exec(fileName)
      || settings.demoFilesExpr.exec(fileName)
      || settings.commonEtalonsExpr.exec(fileName);
    // eslint-disable-next-line no-cond-assign
    if (!parseResult && (parseResult = settings.manualEtalonsExpr.exec(fileName))) {
      if (result.traceTree == null) { result.traceTree = {}; }
      let currentNamePart = result.traceTree;
      // eslint-disable-next-line no-restricted-syntax
      for (const fileNamePart of fileName.split(/[/\\]/)) {
        const nextNamePart = currentNamePart[fileNamePart] || {};
        currentNamePart[fileNamePart] = nextNamePart;
        currentNamePart = nextNamePart;
      }
      // eslint-disable-next-line no-continue
      continue;
    }

    if (parseResult) {
      parseResult.groups = parseResult.groups || {};
      if (parseResult.groups.data && parseResult.groups.data === 'description.md') {
        // eslint-disable-next-line no-continue
        continue;
      }

      result.masks.push(patternGroupFromValues(
        parseResult.groups.product,
        parseResult.groups.demo,
        parseResult.groups.framework,
      ));
    } else {
      // eslint-disable-next-line no-console
      if (settings.verbose) { console.log('Unable to parse changed file, running all tests: ', fileName); }
      return undefined;
    }
  }

  return result;
}
function getExplicitTests() {
  const result = getExplicitTestsInternal();
  if (result) {
    const oldToJSON = RegExp.prototype.toJSON;
    try {
      // eslint-disable-next-line no-extend-native
      RegExp.prototype.toJSON = RegExp.prototype.toString;
      // eslint-disable-next-line no-console
      if (settings.verbose) { console.log('Test filters: \r\n', JSON.stringify(result, null, 2)); }
    } finally {
      // eslint-disable-next-line no-extend-native
      RegExp.prototype.toJSON = oldToJSON;
    }
  }

  return result;
}

export function shouldRunFramework(currentFramework) {
  return !currentFramework
    || !settings.targetFramework
    || currentFramework.toLowerCase() === settings.targetFramework.toLowerCase();
}

export function shouldRunTestAtIndex(testIndex) {
  return !settings.total || !settings.current || !testIndex
    || (testIndex % settings.total) === (settings.current - 1);
}

export function shouldRunTest(currentFramework, testIndex) {
  return shouldRunFramework(currentFramework) && shouldRunTestAtIndex(testIndex);
}

export function shouldRunTestExplicitly(demoUrl) {
  if (!settings.explicitTests) { return false; }

  const parts = demoUrl.split('/').filter((x) => x && x.length);

  return shouldRunTestExplicitlyInternal(
    parts[parts.length - 1],
    parts[parts.length - 3],
    parts[parts.length - 2],
  );
}

export function runTestAt(test, demoUrl) {
  let executor = test;
  if (settings.explicitTests) {
    if (shouldRunTestExplicitly(demoUrl)) { executor = test.only; } else { executor = test.skip; }
  }
  return executor.page(demoUrl);
}

export function runTest(testObject, framework, product, demo, callback) {
  const index = settings.manualTestIndex;
  settings.manualTestIndex += 1;
  if (settings.explicitTests) {
    if (shouldRunTestExplicitlyInternal(framework, product, demo)) {
      callback(testObject.only);
      return;
    }
    if (settings.explicitTests.traceTree) {
      const stackInterestPoints = getCallStackInterestPoints();
      // eslint-disable-next-line no-restricted-syntax
      for (const point of stackInterestPoints) {
        let currentTracePart = settings.explicitTests.traceTree;
        // eslint-disable-next-line no-restricted-syntax
        for (const pointPart of point.split(/[/\\]/)) {
          if (!currentTracePart) { break; }
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

  if (!shouldRunTest(framework, index)) { return; }
  callback(testObject);
}

export function getPortByIndex(testIndex) {
  return (settings.total && (Math.floor(testIndex / settings.total) % settings.concurrency)) || 0;
}

export function updateConfig(customSettings) {
  settings.verbose = true;
  settings.manualTestIndex = 0;
  settings.demoExpr = /JSDemos\/Demos\/(?<product>\w+)\/(?<demo>\w+)\/(?<framework>angular|angularjs|jquery|knockout|react|vue)\/.*/i;
  settings.demoFilesExpr = /JSDemos\/Demos\/(?<product>\w+)\/(?<demo>\w+)\/(?<data>.*)/i;
  settings.commonEtalonsExpr = /testing\/etalons\/(?<product>\w+)-(?<demo>\w+)(?<suffix>.*).png/i;
  settings.manualEtalonsExpr = /testing\/widgets\/.*/i;
  settings.concurrency = (process.env.CONCURRENCY && (+process.env.CONCURRENCY)) || 1;
  if (process.env.CONSTEL) {
    const match = process.env.CONSTEL.match(/(?<name>\w+)(?<parallel>\((?<current>\d+)\/(?<total>\d+)\))?/);
    if (match) {
      settings.targetFramework = match.groups.name;
      const parallelFilter = match.groups.parallel;
      if (parallelFilter) {
        settings.total = +match.groups.total;
        settings.current = +match.groups.current;
      }
    }
  }
  settings.ignoreChangesPathPatterns = [
    /mvcdemos.*/i,
    /netcoredemos.*/i,
    /jsdemos\/menumeta.json/i,
  ];

  if (customSettings) {
    Object.assign(settings, customSettings);
  }

  settings.explicitTests = getExplicitTests();
}
