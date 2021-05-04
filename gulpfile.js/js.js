'use strict';
const { join } = require('path');
const { series, src, dest } = require('gulp');
const { init } = require('../utils/shared/config-helper');
const createConfig = require('../utils/internal/create-config.js');
const demosDir = join(__dirname, '..', 'JSDemos/Demos');

function prepareJs(callback) {
    init();
    createConfig.useBundles = false;
    createConfig.run(demosDir);
    callback();
}

exports.js = series(
    prepareJs,
    () => src('utils/.eslintrc.js')
        .pipe(dest('gulpfile.js'))
);

exports.bundles = function(callback) {
    createConfig.useBundles = true;
    createConfig.run(demosDir);
    callback();
};
