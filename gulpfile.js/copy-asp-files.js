/* eslint-disable import/no-extraneous-dependencies */

const {
  src, dest, parallel, series,
} = require('gulp');
const { existsSync } = require('fs');
const clean = require('gulp-clean');
const { systemSync } = require('../utils/shared/child-process-utils');
const { init } = require('../utils/shared/config-helper');

const aspnetPath = init()['devextreme-aspnet'];

function checkDotnetPath(callback) {
  if (!aspnetPath) {
    throw Error('Aspnet repo path is not specified. Look at repository.config.json');
  }

  if (!existsSync(aspnetPath)) {
    throw Error(`Specified aspnet repo path (${aspnetPath}) doesn't exists.`);
  }

  callback();
}

function runBuild(callback) {
  systemSync('npm i', aspnetPath);
  systemSync('npm run build', aspnetPath);
  callback();
}

function restorePackages(callback) {
  systemSync('dotnet restore NetCoreDemos');
  callback();
}

exports.copyAspFiles = series(
  checkDotnetPath,
  runBuild,
  parallel(
    () => src('MVCDemos/AppData/*.ldf', { read: false }).pipe(clean()),
    () => src('internal/SampleDatabases/Northwind.mdf', { cwd: aspnetPath })
      .pipe(dest('MVCDemos/App_Data')),

    () => src('NetCoreDemos/project.lock.json', { read: false, allowEmpty: true }).pipe(clean()),

    // TODO: discuss about "demo-template.css"
    // () => src('Demos/WidgetsGallery/WidgetsGallery/build/demo-template.css', { cwd: aspnetPath })
    //   .pipe(dest('MVCDemos/Content'))
    //   .pipe(dest('NetCoreDemos/wwwroot/css')),

    () => src('internal/SampleImages/**/*', { cwd: aspnetPath })
      .pipe(dest('MVCDemos/Content/SampleData/SampleImages'))
      .pipe(dest('NetCoreDemos/wwwroot/SampleData/SampleImages')),

    () => src('artifacts/*.{dll,pdb,xml}', { cwd: aspnetPath })
      .pipe(dest('MVCDemos/lib')),

    () => src('artifacts/*.nupkg', { cwd: aspnetPath })
      .pipe(dest('NetCoreDemos/Nuget')),
  ),
  restorePackages,
);
