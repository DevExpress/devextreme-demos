/* eslint-disable import/no-extraneous-dependencies */

const {
  src, dest, parallel, series, task,
} = require('gulp');
const fs = require('fs');
const path = require('path');
const clean = require('gulp-clean');
const { systemSync } = require('../utils/shared/child-process-utils');
const { init } = require('../utils/shared/config-helper');

const aspnetPath = init()['devextreme-aspnet'];

function checkAspnetPath(callback) {
  if (!aspnetPath) {
    throw Error('Aspnet repo path is not specified. Look at repository.config.json');
  }

  if (!fs.existsSync(aspnetPath)) {
    throw Error(`Specified aspnet repo path (${aspnetPath}) doesn't exists.`);
  }

  callback();
}

function runBuild(callback) {
  systemSync(`cd ${aspnetPath} && npm i`);
  systemSync(`cd ${aspnetPath} && npm run build`);
  callback();
}

function restorePackages(callback) {
  systemSync('dotnet restore NetCoreDemos');
  callback();
}

task('prepareMisc', parallel(
  () => src('MVCDemos/AppData/*.ldf', { read: false }).pipe(clean()),
  () => src('NetCoreDemos/Northwind.mdf')
    .pipe(dest('MVCDemos/App_Data')),

  () => src('NetCoreDemos/project.lock.json', { read: false, allowEmpty: true }).pipe(clean()),

  () => src('SampleImages/**/*')
    .pipe(dest('MVCDemos/Content/SampleData/SampleImages'))
    .pipe(dest('NetCoreDemos/wwwroot/SampleData/SampleImages')),
));

exports.buildAndCopyAspFiles = series(
  checkAspnetPath,
  runBuild,
  parallel(
    'prepareMisc',

    () => src('artifacts/*.{dll,pdb,xml}', { cwd: aspnetPath })
      .pipe(dest('MVCDemos/lib')),

    () => src('artifacts/*.nupkg', { cwd: aspnetPath })
      .pipe(dest('NetCoreDemos/Nuget')),

    // TODO: back to the "demo-template.css" after migrating WidgetsGallery
    // () => src('Demos/WidgetsGallery/WidgetsGallery/build/demo-template.css', { cwd: aspnetPath })
    //   .pipe(dest('MVCDemos/Content'))
    //   .pipe(dest('NetCoreDemos/wwwroot/css')),
  ),
  restorePackages,
);

const aspnetPackagesPath = path.resolve('aspnetPackages');

function checkAspnetPackagesPath(callback) {
  if (!fs.existsSync(aspnetPackagesPath)) {
    throw new Error(`The folder is missing: "${aspnetPackagesPath}"! Did you forget to build devextreme-aspnet packages?`);
  }

  callback();
}

exports.copyAspFiles = series(
  checkAspnetPackagesPath,
  parallel(
    'prepareMisc',

    () => src(`${aspnetPackagesPath}/*.{dll,pdb,xml}`)
      .pipe(dest('MVCDemos/lib')),

    () => src(`${aspnetPackagesPath}/*.nupkg`)
      .pipe(dest('NetCoreDemos/Nuget')),
  ),
  restorePackages,
);
