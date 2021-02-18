'use strict';

const { series, src, dest } = require('gulp');
const { systemSync } = require('../utils/shared/child-process-utils');

function prepareJs(callback) {
    try {
        systemSync('git update-index --skip-worktree repository.config.json');
    } catch(e) {}
    require('../utils/internal/create-config.js');
    callback();
}

exports.js = series(
    prepareJs,
    () => src('utils/.eslintrc.js')
        .pipe(dest('gulpfile.js'))
);
