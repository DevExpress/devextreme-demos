'use strict';

const path = require('path');
const fs = require('fs');
const repositoriesHelper = require('./repos_helper');
const fileSystemUtils = require('./fs_utils');
const childProcessUtils = require('./cp_utils');

const prepareProjects = (mercurialPath) => {
    const rootDir = process.cwd();
    const jsDemos = path.join(rootDir, 'JSDemos');
    const netCoreDemos = path.join(rootDir, 'NetCoreDemos');
    const mvcDemos = path.join(rootDir, 'MVCDemos');
    const mvcDemosAppData = path.normalize(path.join(mvcDemos + '/App_Data'));
    const mercurialJSDemos = path.join(mercurialPath, 'Demos/WidgetsGallery/WidgetsGallery');
    const mercurialNetCoreDemoShell = path.join(mercurialPath, 'Demos/WidgetsGallery/AspNetCoreDemos.DemoShell');
    const dxStyles = path.join(jsDemos, 'node_modules/devextreme/dist/css');
    const dxIcons = path.join(jsDemos, 'node_modules/devextreme/dist/css/icons');
    const dxScripts = path.join(jsDemos, 'node_modules/devextreme/dist/js');
    const globalize = path.join(jsDemos, 'node_modules/globalize/dist');
    const cldr = path.join(jsDemos, 'node_modules/cldrjs/dist');
    const dxAspNetData = path.join(jsDemos, 'node_modules/devextreme-aspnet-data/js');
    const jQueryDist = path.join(jsDemos, 'node_modules/jquery/dist');
    const jsZipDist = path.join(jsDemos, 'node_modules/jszip/dist');
    const dxDiagramDist = path.join(jsDemos, 'node_modules/devexpress-diagram/dist');
    const dxGanttDist = path.join(jsDemos, 'node_modules/devexpress-gantt/dist');

    fs.readdirSync(mvcDemosAppData)
        .filter(file => /.*\.ldf$/.test(file))
        .map(file => fs.unlinkSync(mvcDemosAppData, file));

    fileSystemUtils.copyRecursiveSync(dxStyles, path.join(mvcDemos, 'Content/DevExtreme'));
    fileSystemUtils.copyRecursiveSync(dxIcons, path.join(mvcDemos, 'Content/icons'));
    fileSystemUtils.copyRecursiveSync(dxScripts, path.join(mvcDemos, 'Scripts'));
    fileSystemUtils.copyRecursiveSync(globalize, path.join(mvcDemos, 'Scripts'));
    fileSystemUtils.copyRecursiveSync(cldr, path.join(mvcDemos, 'Scripts'));
    fileSystemUtils.copyRecursiveSync(dxAspNetData, path.join(mvcDemos, 'Scripts'));
    fileSystemUtils.copyRecursiveSync(jQueryDist, path.join(mvcDemos, 'Scripts'));
    fileSystemUtils.copyRecursiveSync(jsZipDist, path.join(mvcDemos, 'Scripts'));
    fileSystemUtils.copyRecursiveSync(dxStyles, path.join(netCoreDemos, 'wwwroot/css'));
    fileSystemUtils.copyRecursiveSync(dxScripts, path.join(netCoreDemos, 'wwwroot/js'));
    fileSystemUtils.copyRecursiveSync(globalize, path.join(netCoreDemos, 'wwwroot/js'));
    fileSystemUtils.copyRecursiveSync(cldr, path.join(netCoreDemos, 'wwwroot/js'));
    fileSystemUtils.copyRecursiveSync(dxAspNetData, path.join(netCoreDemos, 'wwwroot/js'));
    fileSystemUtils.copyRecursiveSync(jQueryDist, path.join(netCoreDemos, 'wwwroot/js'));
    fileSystemUtils.copyRecursiveSync(jsZipDist, path.join(netCoreDemos, 'wwwroot/js'));

    fs.readdirSync(dxDiagramDist)
        .filter(file => /.*\.css$/.test(file))
        .forEach(file => {
            fileSystemUtils.copyRecursiveSync(path.join(dxDiagramDist, file), path.join(mvcDemos, 'Content/DevExtreme', file));
            fileSystemUtils.copyRecursiveSync(path.join(dxDiagramDist, file), path.join(netCoreDemos, 'wwwroot/css', file));
        });

    fs.readdirSync(dxDiagramDist)
        .filter(file => /.*\.js$/.test(file))
        .forEach(file => {
            fileSystemUtils.copyRecursiveSync(path.join(dxDiagramDist, file), path.join(mvcDemos, 'Scripts', file));
            fileSystemUtils.copyRecursiveSync(path.join(dxDiagramDist, file), path.join(netCoreDemos, 'wwwroot/js', file));
        });

    fs.readdirSync(dxGanttDist)
        .filter(file => /.*\.css$/.test(file))
        .forEach(file => {
            fileSystemUtils.copyRecursiveSync(path.join(dxGanttDist, file), path.join(mvcDemos, 'Content/DevExtreme', file));
            fileSystemUtils.copyRecursiveSync(path.join(dxGanttDist, file), path.join(netCoreDemos, 'wwwroot/css', file));
        });

    fs.readdirSync(dxGanttDist)
        .filter(file => /.*\.js$/.test(file))
        .forEach(file => {
            fileSystemUtils.copyRecursiveSync(path.join(dxGanttDist, file), path.join(mvcDemos, 'Scripts', file));
            fileSystemUtils.copyRecursiveSync(path.join(dxGanttDist, file), path.join(netCoreDemos, 'wwwroot/js', file));
        });

    fs.copyFileSync(path.join(mercurialPath, 'SampleDatabases/Northwind.mdf'), path.join(mvcDemosAppData, 'Northwind.mdf'));

    fileSystemUtils.recreateLink(path.join(mercurialPath, 'SampleImages'), path.join(mvcDemos, 'Content/SampleData/SampleImages'));
    fileSystemUtils.recreateLink(path.join(mercurialPath, 'SampleImages'), path.join(netCoreDemos, 'wwwroot/SampleData/SampleImages'));

    fileSystemUtils.recreateLink(path.join(mercurialJSDemos, 'build/demo-template.css'), path.join(mvcDemos, 'Content/demo-template.css'));
    fileSystemUtils.recreateLink(path.join(mercurialJSDemos, 'build/demo-template.css'), path.join(netCoreDemos, 'wwwroot/css/demo-template.css'));

    fileSystemUtils.recreateLink(path.join(jsDemos, 'menuMeta.json'), path.join(mvcDemosAppData, 'menuMeta.json'));
    fileSystemUtils.recreateLink(path.join(jsDemos, 'menuMeta.json'), path.join(netCoreDemos, 'menuMeta.json'));

    fileSystemUtils.recreateLink(path.join(mercurialNetCoreDemoShell, 'wwwroot/DemoShell'), path.join(netCoreDemos, 'wwwroot/DemoShell'));
    fileSystemUtils.recreateLink(path.join(mercurialNetCoreDemoShell, 'DemoShell'), path.join(netCoreDemos, 'DemoShell'));
    fs.copyFileSync(path.join(mercurialNetCoreDemoShell, '.editorconfig'), path.join(netCoreDemos, '.editorconfig'));
};

const prepareWorkspace = async() => {
    const mercurialPath = await repositoriesHelper.getRepositoryPath('HG');
    const mercurialWG = path.join(mercurialPath, 'Demos/WidgetsGallery');

    childProcessUtils.systemSync('call ' + mercurialWG + '/prepareWG.cmd');
    prepareProjects(mercurialPath);

    return mercurialPath;
};

module.exports.prepareWorkspace = prepareWorkspace;
