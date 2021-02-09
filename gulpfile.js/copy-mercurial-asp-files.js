'use strict';


const { src, dest, symlink, parallel } = require('gulp');
const { existsSync } = require('fs');
const clean = require('gulp-clean');
const mercurialPath = require('../repository.config.json').hg;

if(!mercurialPath) {
    throw Error('Mercurial path is not specified. Look at repository.config.json');
}

if(!existsSync(mercurialPath)) {
    throw Error(`Specified mercurial path (${mercurialPath}) doesn't exists.`);
}

exports.copyMercurialAspFiles = parallel(
    () => src('MVCDemos/AppData/*.ldf', { read: false }).pipe(clean()),

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
        .pipe(dest('NetCoreDemos'))
);
