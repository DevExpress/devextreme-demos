'use strict';

const { series, src, dest } = require('gulp');

function prepareJs(callback) {
    require('../utils/shared/config-helper').init();
    require('../utils/internal/create-config.js');
    callback();
}

exports.js = series(
    prepareJs,
    () => src('utils/.eslintrc.js')
        .pipe(dest('gulpfile.js'))
);
