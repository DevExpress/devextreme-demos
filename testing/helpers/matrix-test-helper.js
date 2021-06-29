let targetFramework = 'jquery';
let total = 1;
let current = 1;

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

export function shouldRunFramework(currentFramework) {
  return !currentFramework || currentFramework.toLowerCase() === targetFramework.toLowerCase();
}

export function shouldRunTestAtIndex(testIndex) {
  return (testIndex % total) === (current - 1);
}

export function shouldRunTest(currentFramework, testIndex) {
  return shouldRunFramework(currentFramework) && shouldRunTestAtIndex(testIndex);
}

export function getPortByIndex(testIndex) {
  return (testIndex / total) % (process.env.CONCURRENCY || 1);
}
