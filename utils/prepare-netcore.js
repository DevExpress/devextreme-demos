const path = require('path');
const fs = require('fs');
const cp_utils = require('./cp_utils');
const common = require('./prepare-common');
const fs_utils = require('./fs_utils');
const util = require('util');

const modifyNetCoreProject = (netCoreDemos, version) => {
    const netCoreDemosProj = path.join(netCoreDemos, 'DevExtreme.NETCore.Demos.csproj');

    let content = fs.readFileSync(netCoreDemosProj, 'utf-8');

    content = content.replace(/(\"DevExtreme.AspNet.Core\"\s*Version=")(\d+\.\d+\.\d+).*?(?=")/, '$1' + version);
            
    fs.writeFileSync(netCoreDemosProj, content, 'utf-8');

    console.log('NetCore Demos project has been modified');

    cp_utils.systemSync('dotnet restore ' + netCoreDemos);
}

const prepareNetCoreDemos = async () => {
    const rootDir = process.cwd();
    const hgPath = await common.prepareWorkspace();
    const netCoreDemos = path.join(rootDir, 'NetCoreDemos');
    const nugetPath = path.join(hgPath, 'DevExtreme.AspNet.Mvc/AspNetCore/NuGet');
    const demosNugetPath = path.join(netCoreDemos, 'NuGet');
    const version = require(path.join(hgPath, 'GitHub/artifacts/npm/devextreme/package.json')).version.split('-')[0];

    if(fs.existsSync(demosNugetPath)) {
        fs.unlinkSync(demosNugetPath);
    }

    const recreateNugetLink = util.promisify(fs.symlink);
    
    recreateNugetLink(nugetPath, demosNugetPath).then(() => {
        modifyNetCoreProject(netCoreDemos, version);
    });
};

(async () => await prepareNetCoreDemos())();