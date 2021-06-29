function findElements(selector) {
  return document.querySelectorAll(selector);
}

function postpone(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration || 5000));
}

function postponeUntilInternal(condition, interval, timeout, inverseCondition) {
  let i = 0;
  const theInterval = interval || 100;
  const theTimeout = timeout || 10000;
  return new Promise((resolve) => {
    const id = setInterval(() => {
      if (i * theInterval >= theTimeout || (inverseCondition ? !condition() : condition())) {
        clearInterval(id);
        resolve();
      }
      i += 1;
    }, theInterval);
  });
}

function postponeUntil(condition, interval, timeout) {
  return postponeUntilInternal(condition, interval, timeout, false);
}

function postponeUntilFoundInternal(selector, interval, timeout, inverseCondition) {
  const condition = Array.isArray(selector)
    ? (() => selector.every((x) => findElements(x).length))
    : (() => findElements(selector).length);
  return postponeUntilInternal(condition, interval, timeout, inverseCondition);
}
function postponeUntilFound(selector, interval, timeout) {
  return postponeUntilFoundInternal(selector, interval, timeout, false);
}
function postponeUntilNotFound(selector, interval, timeout) {
  return postponeUntilFoundInternal(selector, interval, timeout, true);
}

function getValues(getter) {
  const values = getter();
  return Array.isArray(values) ? values : [values];
}

// eslint-disable-next-line spellcheck/spell-checker
function importAnd(es6, cjs, callback) {
  if (window.Promise && window.System) {
    Promise.all(getValues(es6).map((x) => window.System.import(x))).then((x) => callback(...x));
  } else {
    // eslint-disable-next-line spellcheck/spell-checker
    callback(...getValues(cjs));
  }
}

// eslint-disable-next-line no-unused-vars
const testUtils = {
  postpone,
  postponeUntil,
  postponeUntilFound,
  postponeUntilNotFound,
  importAnd,
  findElements,
};

window.testUtils = testUtils;
