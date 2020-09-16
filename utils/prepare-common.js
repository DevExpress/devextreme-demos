const path = require('path');
const fs = require('fs');
const reposHelper = require('./repos_helper');
const fs_utils = require('./fs_utils');
const cp_utils = require('./cp_utils');

const prepareProjects = (hgPath) => {
    const rootDir = process.cwd();
    const jsDemos = path.join(rootDir, 'JSDemos')
    const netCoreDemos = path.join(rootDir, 'NetCoreDemos');
    const mvcDemos = path.join(rootDir, 'MVCDemos');
    const mvcDemosAppData = path.normalize(path.join(mvcDemos + '/App_Data'));
    const hgJSDemos = path.join(hgPath, 'Demos/WidgetsGallery/WidgetsGallery');
    const hgNetCoreDemoShell = path.join(hgPath, 'Demos/WidgetsGallery/AspNetCoreDemos.DemoShell');
    const dxStyles = path.join(jsDemos, 'node_modules/devextreme/dist/css');
    const dxIcons = path.join(jsDemos, 'node_modules/devextreme/dist/css/icons');
    const dxScripts = path.join(jsDemos, 'node_modules/devextreme/dist/js');
    const globalize = path.join(jsDemos, 'node_modules/globalize/dist');
    const cldr = path.join(jsDemos, 'node_modules/cldrjs/dist');
    const dxAspNetData = path.join(jsDemos, 'node_modules/devextreme-aspnet-data/js');
    const jQuery = path.join(jsDemos, 'node_modules/jquery/dist');
    const jszip = path.join(jsDemos, 'node_modules/jszip/dist');
    const dxDiagrammDist = path.join(jsDemos, 'node_modules/devexpress-diagram/dist');
    const dxGanttDist = path.join(jsDemos, 'node_modules/devexpress-gantt/dist');

    fs.readdirSync(mvcDemosAppData)
        .filter(file => /.*\.ldf$/.test(file))
        .map(file => fs.unlinkSync(mvcDemosAppData, file));

    fs_utils.copyRecursiveSync(dxStyles, path.join(mvcDemos, 'Content/DevExtreme'));
    fs_utils.copyRecursiveSync(dxIcons, path.join(mvcDemos, 'Content/icons'));
    fs_utils.copyRecursiveSync(dxScripts, path.join(mvcDemos, 'Scripts'));
    fs_utils.copyRecursiveSync(globalize, path.join(mvcDemos, 'Scripts'));
    fs_utils.copyRecursiveSync(cldr, path.join(mvcDemos, 'Scripts'));
    fs_utils.copyRecursiveSync(dxAspNetData, path.join(mvcDemos, 'Scripts'));
    fs_utils.copyRecursiveSync(jQuery, path.join(mvcDemos, 'Scripts'));
    fs_utils.copyRecursiveSync(jszip, path.join(mvcDemos, 'Scripts'));
    fs_utils.copyRecursiveSync(dxStyles, path.join(netCoreDemos, 'wwwroot/css'));
    fs_utils.copyRecursiveSync(dxScripts, path.join(netCoreDemos, 'wwwroot/js'));
    fs_utils.copyRecursiveSync(globalize, path.join(netCoreDemos, 'wwwroot/js'));
    fs_utils.copyRecursiveSync(cldr, path.join(netCoreDemos, 'wwwroot/js'));
    fs_utils.copyRecursiveSync(dxAspNetData, path.join(netCoreDemos, 'wwwroot/js'));
    fs_utils.copyRecursiveSync(jQuery, path.join(netCoreDemos, 'wwwroot/js'));
    fs_utils.copyRecursiveSync(jszip, path.join(netCoreDemos, 'wwwroot/js'));

    fs.readdirSync(dxDiagrammDist)
        .filter(file => /.*\.css$/.test(file))
        .forEach(file => { 
            fs_utils.copyRecursiveSync(path.join(dxDiagrammDist, file), path.join(mvcDemos, 'Content/DevExtreme', file));
            fs_utils.copyRecursiveSync(path.join(dxDiagrammDist, file), path.join(netCoreDemos, 'wwwroot/css', file));
    });

    fs.readdirSync(dxDiagrammDist)
        .filter(file => /.*\.js$/.test(file))
        .forEach(file => { 
            fs_utils.copyRecursiveSync(path.join(dxDiagrammDist, file), path.join(mvcDemos, 'Scripts', file));
            fs_utils.copyRecursiveSync(path.join(dxDiagrammDist, file), path.join(netCoreDemos, 'wwwroot/js', file));
    });

    fs.readdirSync(dxGanttDist)
        .filter(file => /.*\.css$/.test(file))
        .forEach(file => { 
            fs_utils.copyRecursiveSync(path.join(dxGanttDist, file), path.join(mvcDemos, 'Content/DevExtreme', file));
            fs_utils.copyRecursiveSync(path.join(dxGanttDist, file), path.join(netCoreDemos, 'wwwroot/css', file));
    });

    fs.readdirSync(dxGanttDist)
        .filter(file => /.*\.js$/.test(file))
        .forEach(file => {
            fs_utils.copyRecursiveSync(path.join(dxGanttDist, file), path.join(mvcDemos, 'Scripts', file));
            fs_utils.copyRecursiveSync(path.join(dxGanttDist, file), path.join(netCoreDemos, 'wwwroot/js', file));
    });

    fs.copyFileSync(path.join(hgPath, 'SampleDatabases/Northwind.mdf'), path.join(mvcDemosAppData, 'Northwind.mdf'));

    fs_utils.recreateLink(path.join(hgPath, 'SampleImages'), path.join(mvcDemos, 'Content/SampleData/SampleImages'));
    fs_utils.recreateLink(path.join(hgPath, 'SampleImages'), path.join(netCoreDemos, 'wwwroot/SampleData/SampleImages'));

    fs_utils.recreateLink(path.join(hgJSDemos, 'build/demo-template.css'), path.join(mvcDemos, 'Content/demo-template.css'));
    fs_utils.recreateLink(path.join(hgJSDemos, 'build/demo-template.css'), path.join(netCoreDemos, 'wwwroot/css/demo-template.css'));

    fs_utils.recreateLink(path.join(jsDemos, 'menuMeta.json'), path.join(mvcDemosAppData, 'menuMeta.json'));
    fs_utils.recreateLink(path.join(jsDemos, 'menuMeta.json'), path.join(netCoreDemos, 'menuMeta.json'));

    fs_utils.recreateLink(path.join(hgNetCoreDemoShell, 'wwwroot/DemoShell'), path.join(netCoreDemos, 'wwwroot/DemoShell'));
    fs_utils.recreateLink(path.join(hgNetCoreDemoShell, 'DemoShell'), path.join(netCoreDemos, 'DemoShell'));
    fs.copyFileSync(path.join(hgNetCoreDemoShell, '.editorconfig'), path.join(netCoreDemos, '.editorconfig'));
}

const prepareWorkspace = async () => {
    const hgPath = await reposHelper.getRepositoryPath('HG');
    const hgWG = path.join(hgPath, 'Demos/WidgetsGallery');

    cp_utils.systemSync('call ' + hgWG + '/prepareWG.cmd');
    prepareProjects(hgPath);

    return hgPath;
}

module.exports.prepareWorkspace = prepareWorkspace;