const { join } = require('path');
const { init } = require('../utils/shared/config-helper');
const createConfig = require('../utils/internal/create-config');

const demosDir = join(__dirname, '..', 'JSDemos/Demos');

function prepareJs(callback) {
  init();
  createConfig.useBundles = false;
  createConfig.run(demosDir);
  callback();
}

exports.js = prepareJs;

exports.bundles = function bundles(callback) {
  createConfig.useBundles = true;
  createConfig.run(demosDir);
  callback();
};
