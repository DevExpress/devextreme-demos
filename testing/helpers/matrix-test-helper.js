export default class MatrixTestHelper {
  constructor() {
    this.checkFrameworkInternal = (x) => !x || x.toLowerCase() === 'jquery';
    this.checkTestIndexInternal = () => true;
    const currentCriteria = process.env.CONSTEL;
    if (currentCriteria) {
      const match = currentCriteria.match(/(?<name>\w+)(?<parallel>\((?<current>\d+)\/(?<total>\d+)\))?/);
      if (match) {
        const frameworkName = match.groups.name;
        this.checkFrameworkInternal = (x) => !x || x.toLowerCase() === frameworkName.toLowerCase();
        const parallelFilter = match.groups.parallel;
        if (parallelFilter) {
          const total = +match.groups.total;
          const current = +match.groups.current;
          this.checkTestIndexInternal = (x) => (x % total) === (current - 1);
        }
      }
    }
  }

  shouldRunTest(frameworkName, testIndex) {
    return this.checkFrameworkInternal(frameworkName) && this.checkTestIndexInternal(testIndex);
  }

  shouldRunFramework(frameworkName) {
    return this.checkFrameworkInternal(frameworkName);
  }

  shouldRunTestAtIndex(testIndex) {
    return this.checkTestIndexInternal(testIndex);
  }
}
