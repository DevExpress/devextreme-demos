'use strict';


const { src, dest, symlink, parallel, series } = require('gulp');
const { existsSync } = require('fs');
const { join } = require('path');
const clean = require('gulp-clean');
const mercurialPath = require('../repository.config.json').hg;
const { systemSync } = require('../utils/shared/child-process-utils');

if(!mercurialPath) {
    throw Error('Mercurial path is not specified. Look at repository.config.json');
}

if(!existsSync(mercurialPath)) {
    throw Error(`Specified mercurial path (${mercurialPath}) doesn't exists.`);
}

function runMvcBuild(callback) {
    systemSync(`${join(mercurialPath, 'DevExtreme.AspNet.Mvc', 'build.cmd')}`);
    callback();
}

function restorePackages(callback) {
    systemSync(`${join(mercurialPath, '.nuget', 'NuGet.exe')} restore ${join('MVCDemos', 'DevExtreme.MVC.Demos.sln')}`);
    systemSync('dotnet restore NetCoreDemos');
    callback();
}

exports.copyMercurialAspFiles = series(
    runMvcBuild,
    parallel(
        () => src('MVCDemos/AppData/*.ldf', { read: false }).pipe(clean()),

        () => src('NetCoreDemos/project.lock.json', { read: false, allowEmpty: true }).pipe(clean()),

        () => src('SampleDatabases/Northwind.mdf', { cwd: mercurialPath })
            .pipe(dest('MVCDemos/App_Data')),

        () => src('SampleImages/**/*', { cwd: mercurialPath })
            .pipe(dest('MVCDemos/Content/SampleData/SampleImages'))
            .pipe(dest('NetCoreDemos/wwwroot/SampleData/SampleImages')),

        () => src('Demos/WidgetsGallery/WidgetsGallery/build/demo-template.css', { cwd: mercurialPath })
            .pipe(symlink('MVCDemos/Content'))
            .pipe(symlink('NetCoreDemos/wwwroot/css')),

        () => src('Demos/WidgetsGallery/AspNetCoreDemos.DemoShell/wwwroot/DemoShell/**/*', { cwd: mercurialPath })
            .pipe(dest('NetCoreDemos/wwwroot/DemoShell')),

        () => src('Demos/WidgetsGallery/AspNetCoreDemos.DemoShell/DemoShell/**/*', { cwd: mercurialPath })
            .pipe(dest('NetCoreDemos/DemoShell')),

        () => src('Demos/WidgetsGallery/AspNetCoreDemos.DemoShell/.editorconfig', { cwd: mercurialPath })
            .pipe(dest('NetCoreDemos')),

        () => src('DevExtreme.AspNet.Mvc/Bin/**/*', { cwd: mercurialPath })
            .pipe(dest('MVCDemos/lib')),

        () => src('DevExtreme.AspNet.Mvc/AspNetCore/NuGet/**/*', { cwd: mercurialPath })
            .pipe(dest('NetCoreDemos/Nuget')),
    ),
    restorePackages
);
