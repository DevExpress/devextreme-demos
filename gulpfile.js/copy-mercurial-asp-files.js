'use strict';


const { src, dest, parallel, series } = require('gulp');
const { existsSync, readFileSync } = require('fs');
const { join } = require('path');
const clean = require('gulp-clean');
const replace = require('gulp-replace');
const mercurialPath = require('../repository.config.json').hg;
const { systemSync } = require('../utils/shared/child-process-utils');

function checkMercurialPath(callback) {
    if(!mercurialPath) {
        throw Error('Mercurial path is not specified. Look at repository.config.json');
    }

    if(!existsSync(mercurialPath)) {
        throw Error(`Specified mercurial path (${mercurialPath}) doesn't exists.`);
    }

    callback();
}

function runMvcBuild(callback) {
    systemSync(`${join(mercurialPath, 'DevExtreme.AspNet.Mvc', 'build.cmd')}`);
    callback();
}

function restorePackages(callback) {
    const nuget = join(mercurialPath, '.nuget', 'NuGet.exe');
    systemSync(`${nuget} restore ${join('MVCDemos', 'DevExtreme.MVC.Demos.sln')}`);
    systemSync('dotnet restore NetCoreDemos');
    callback();
}

function changeNetCoreVersion() {
    const projectAssetsPath = join(
        mercurialPath,
        'DevExtreme.AspNet.Mvc',
        'AspNetCore',
        'DevExtreme.AspNet.Core',
        'obj',
        'project.assets.json'
    );

    if(!existsSync(projectAssetsPath)) {
        throw new Error(`NetCore assets path ${projectAssetsPath} does not exists`);
    }

    const version = JSON.parse(readFileSync(projectAssetsPath)).project.version;

    return src('NetCoreDemos/DevExtreme.NETCore.Demos.csproj')
        .pipe(replace(/("DevExtreme.AspNet.Core"\s*Version=")(\d+\.\d+\.\d+).*?(?=")/, `$1${version}`))
        .pipe(dest('NetCoreDemos'));
}

exports.copyMercurialAspFiles = series(
    checkMercurialPath,
    runMvcBuild,
    changeNetCoreVersion,
    parallel(
        () => src('MVCDemos/AppData/*.ldf', { read: false }).pipe(clean()),
        () => src('SampleDatabases/Northwind.mdf', { cwd: mercurialPath })
            .pipe(dest('MVCDemos/App_Data')),

        () => src('NetCoreDemos/project.lock.json', { read: false, allowEmpty: true }).pipe(clean()),

        () => src('SampleImages/**/*', { cwd: mercurialPath })
            .pipe(dest('MVCDemos/Content/SampleData/SampleImages'))
            .pipe(dest('NetCoreDemos/wwwroot/SampleData/SampleImages')),

        () => src('Demos/WidgetsGallery/WidgetsGallery/build/demo-template.css', { cwd: mercurialPath })
            .pipe(dest('MVCDemos/Content'))
            .pipe(dest('NetCoreDemos/wwwroot/css')),

        () => src('Demos/WidgetsGallery/AspNetCoreDemos.DemoShell/wwwroot/DemoShell/**/*', { cwd: mercurialPath, removeBOM: false })
            .pipe(dest('NetCoreDemos/wwwroot/DemoShell')),

        () => src('Demos/WidgetsGallery/AspNetCoreDemos.DemoShell/DemoShell/**/*', { cwd: mercurialPath, removeBOM: false })
            .pipe(dest('NetCoreDemos/DemoShell')),

        () => src('Demos/WidgetsGallery/AspNetCoreDemos.DemoShell/.editorconfig', { cwd: mercurialPath, removeBOM: false })
            .pipe(dest('NetCoreDemos')),

        () => src('DevExtreme.AspNet.Mvc/Bin/**/*', { cwd: mercurialPath })
            .pipe(dest('MVCDemos/lib')),

        () => src('DevExtreme.AspNet.Mvc/AspNetCore/NuGet/**/*', { cwd: mercurialPath })
            .pipe(dest('NetCoreDemos/Nuget')),
    ),
    restorePackages
);
