/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const {
  src, dest, parallel, series,
} = require('gulp');
const { existsSync } = require('fs');
const minify = require('gulp-minify');

const { init } = require('../utils/shared/config-helper');
const { systemSync } = require('../utils/shared/child-process-utils');

const devextremePath = init().devextreme;

let devextremeDistPath = 'node_modules/devextreme-dist';

const prepareDevextreme = (callback) => {
  if (devextremePath.length !== 0 && existsSync(devextremePath)) {
    systemSync(`cd ${devextremePath}/packages/devextreme && npm run build-npm-devextreme`);
    devextremeDistPath = `${devextremePath}/packages/devextreme/artifacts/npm/devextreme-dist`;
  } else {
    console.warn('Path to DevExtreme monorepo not specified in "repository.config.json", so uses DevExtreme dist from node_modules');
  }

  callback();
};

exports.copyCommonAspFiles = series(
  prepareDevextreme,
  parallel(
    () => src([
      `${devextremeDistPath}/css/**/*`,
      'node_modules/devexpress-diagram/dist/**/*.css',
      'node_modules/devexpress-gantt/dist/**/*.css',
    ])
      .pipe(dest('MVCDemos/Content/DevExtreme'))
      .pipe(dest('NetCoreDemos/wwwroot/css')),

    () => src(`${devextremeDistPath}/css/icons/*`)
      .pipe(dest('MVCDemos/Content/icons')),

    () => src([
      `${devextremeDistPath}/js/**/*`,
      'node_modules/globalize/dist/**/+(currency|date|message|number|globalize).js',
      'node_modules/cldrjs/dist/**/!(node_main.js)',
      'node_modules/devextreme-aspnet-data/js/**/**',
      'node_modules/jquery/dist/jquery.js',
      'node_modules/jszip/dist/jszip.js',
      'node_modules/devexpress-diagram/dist/**/*.js',
      'node_modules/devexpress-gantt/dist/**/*.js',
    ])
      .pipe(minify({
        ext: {
          min: '.min.js',
        },
        ignoreFiles: ['dx*', '.min.js', '.map'],
      }))
      .pipe(dest('MVCDemos/Scripts'))
      .pipe(dest('NetCoreDemos/wwwroot/js')),

    () => src('JSDemos/menuMeta.json')
      .pipe(dest('MVCDemos/App_Data'))
      .pipe(dest('NetCoreDemos')),
  ),
);
