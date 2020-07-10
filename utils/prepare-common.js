const path = require('path');
const fs = require('fs');
const pq = require('./prompts_questions');
const reposHelper = require('./repos_helper');
const fs_utils = require('./fs_utils');

const scripts = [

]

const prepareWorkspace = async () => {
    const hgPath = await reposHelper.getRepositoryPath('HG');

    const rootDir = process.cwd();
    const jsDemos = path.join(rootDir, 'JSDemos')
    const netCoreDemos = path.join(rootDir, 'NetCoreDemos');
    const mvcDemos = path.join(rootDir, 'MVCDemos');
    const mvcDemosAppData = path.normalize(path.join(mvcDemos + '/App_Data'));
    const hgJSDemos = path.join(hgPath, 'Demos/WidgetsGallery/WidgetsGallery');
    const dxStyles = path.join(jsDemos, 'node_modules/devextreme/dist/css');
    const dxIcons = path.join(jsDemos, 'node_modules/devextreme/dist/css/icons');
    const dxScripts = path.join(jsDemos, 'node_modules/devextreme/dist/js');
    const globalize = path.join(jsDemos, 'node_modules/globalize/dist');
    const cldr = path.join(jsDemos, 'node_modules/cldrjs/dist');
    const dxAspNetData = path.join(jsDemos, 'node_modules/devextreme-aspnet-data/js');
    const jQuery = path.join(jsDemos, 'node_modules/jquery/dist');
    const jszip = path.join(jsDemos, 'node_modules/jszip/dist');

    fs_utils.recreateLink(path.join(hgPath, 'SampleImages'), path.join(mvcDemos, 'Content/SampleData/SampleImages'));
    fs_utils.recreateLink(path.join(hgPath, 'SampleImages'), path.join(netCoreDemos, 'wwwroot/SampleData/SampleImages'));
 
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

    fs.copyFileSync(path.join(hgPath, 'SampleDatabases/Northwind.mdf'), path.join(mvcDemosAppData, 'Northwind.mdf'));

    fs_utils.recreateLink(path.join(hgJSDemos, 'build/demo-template.css'), path.join(mvcDemos, 'Content/demo-template.css'));
    fs_utils.recreateLink(path.join(hgJSDemos, 'build/demo-template.css'), path.join(netCoreDemos, 'wwwroot/css/demo-template.css'));

    fs_utils.recreateLink(path.join(jsDemos, 'menuMeta.json'), path.join(mvcDemosAppData, 'menuMeta.json'));
    fs_utils.recreateLink(path.join(jsDemos, 'menuMeta.json'), path.join(netCoreDemos, 'menuMeta.json'));

    return hgPath;
}

module.exports.prepareWorkspace = prepareWorkspace;