'use strict';

const { src, dest, parallel } = require('gulp');

const parallelTasks = [
    () => src([
        'node_modules/devextreme/dist/css/**/*',
        'node_modules/devexpress-diagram/dist/**/*.css',
        'node_modules/devexpress-gantt/dist/**/*.css'
    ])
        .pipe(dest('MVCDemos/Content/DevExtreme'))
        .pipe(dest('NetCoreDemos/wwwroot/css')),

    () => src('node_modules/devextreme/dist/css/icons/*')
        .pipe(dest('MVCDemos/Content/icons')),

    () => src([
        'node_modules/devextreme/dist/js/**/*',
        'node_modules/globalize/dist/**/*',
        'node_modules/cldrjs/dist/**/*',
        'node_modules/devextreme-aspnet-data/js/**/**',
        'node_modules/jquery/dist/**/*',
        'node_modules/jszip/dist/**/*',
        'node_modules/devexpress-diagram/dist/**/*.js',
        'node_modules/devexpress-gantt/dist/**/*.js'
    ])
        .pipe(dest('MVCDemos/Scripts'))
        .pipe(dest('NetCoreDemos/wwwroot/js')),

    () => src('JSDemos/menuMeta.json') // TODO make link
        .pipe(dest('MVCDemos/App_Data'))
        .pipe(dest('NetCoreDemos'))
];

exports.copyCommonAspFiles = parallel.apply(this, parallelTasks);
