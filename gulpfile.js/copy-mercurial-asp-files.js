'use strict';


const { src, dest, parallel } = require('gulp');
const clean = require('gulp-clean');
const mercurialPath = require('../repository.config.json').hg;

if(!mercurialPath) {
    throw Error('Mercurial path is not specified. Look at repository.config.json');
}

const parallelTasks = [
    () => src('MVCDemos/AppData/*.ldf', { read: false }).pipe(clean()),

    () => src('SampleDatabases/Northwind.mdf', { cwd: mercurialPath })
        .pipe(dest('MVCDemos/App_Data')),

    () => src('SampleImages/**/*', { cwd: mercurialPath })// TODO was link
        .pipe(dest('MVCDemos/Content/SampleData/SampleImages'))
        .pipe(dest('NetCoreDemos/wwwroot/SampleData/SampleImages')),

    () => src('Demos/WidgetsGallery/WidgetsGallery/build/demo-template.css', { cwd: mercurialPath }) // TODO was link
        .pipe(dest('MVCDemos/Content'))
        .pipe(dest('NetCoreDemos/wwwroot/css')),

    () => src('Demos/WidgetsGallery/AspNetCoreDemos.DemoShell/wwwroot/DemoShell/**/*', { cwd: mercurialPath })// TODO was link
        .pipe(dest('NetCoreDemos/wwwroot/DemoShell')),

    () => src('Demos/WidgetsGallery/AspNetCoreDemos.DemoShell/DemoShell/**/*', { cwd: mercurialPath })// TODO was link
        .pipe(dest('NetCoreDemos/DemoShell')),

    () => src('Demos/WidgetsGallery/AspNetCoreDemos.DemoShell/.editorconfig', { cwd: mercurialPath })
        .pipe(dest('NetCoreDemos'))

];

exports.copyMercurialAspFiles = parallel.apply(this, parallelTasks);

