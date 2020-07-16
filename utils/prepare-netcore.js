const path = require('path');
const fs = require('fs');
const systemSync = require('./cp_utils').systemSync;
const common = require('./prepare-common');
const fs_utils = require('./fs_utils');

const createNugetPackage = (netCorePath, hgPath) => {
    const rootDir = process.cwd();
    const netCoreDemos = path.join(rootDir, 'NetCoreDemos');
    const netCoreProjPath = path.join(netCorePath, 'DevExtreme.AspNet.Core.csproj');
    const netCoreReleasePath = path.join(hgPath, 'DevExtreme.AspNet.Mvc/AspNetCore/DevExtreme.AspNet.Core/bin/Release');
    const nugetPath = path.join(hgPath, 'DevExtreme.AspNet.Mvc/AspNetCore/NuGet');
    const demosNugetPath = path.join(netCoreDemos, 'NuGet');
    const version = require(path.join(rootDir, 'JSDemos', 'node_modules/devextreme/package.json')).version;

    fs_utils.recreateLink(nugetPath);

    if(fs.existsSync(demosNugetPath)) {
        fs.rmdirSync(demosNugetPath, {recursive: true});
    }

    fs_utils.recreateLink(nugetPath, demosNugetPath);

    systemSync('dotnet restore ' + netCoreProjPath);
    systemSync('dotnet msbuild ' + netCoreProjPath + ' -p:Configuration=Release');
    systemSync('dotnet pack ' + netCorePath + ' --no-build --configuration=Release');

    fs.readdirSync(netCoreReleasePath)
        .filter(file => /.*\.symbols.nupkg$/.test(file))
        .map(file => fs.unlinkSync(path.join(netCoreReleasePath, file)));

    const nugetFiles = fs.readdirSync(netCoreReleasePath)
                            .filter(file => /.*\.nupkg$/.test(file));

    fs.copyFile(path.join(netCoreReleasePath, nugetFiles[0]), path.join(nugetPath, nugetFiles[0]), (error) => {
        if(error) {
            console.log(error);
            return;
        } else {
            console.log('Nuget Package has been created');

            const netCoreDemosProj = path.join(netCoreDemos, 'DevExtreme.NETCore.Demos.csproj');
            let content = fs.readFileSync(netCoreDemosProj, 'utf-8');

            content = content.replace(/(\"DevExtreme.AspNet.Core\"\s*Version=")(\d+\.\d+\.\d+).*?(?=")/, '$1' + version);
            
            fs.writeFileSync(netCoreDemosProj, content, 'utf-8');

            console.log('NetCore Demos project has been modified');

            systemSync('dotnet restore ' + netCoreDemos);
        }
    });
};

const prepareNetCoreDemos = async () => {
    const response = await common.prepareWorkspace();

    const netCorePath = path.join(response.hgPath, 'DevExtreme.AspNet.Mvc/AspNetCore/DevExtreme.AspNet.Core');

    fs_utils.recreateLink(
        path.join(response.hgPath, 'EULA_DXTREME.txt'),
        path.join(netCorePath, 'LICENSE.txt'),
        createNugetPackage(netCorePath, response.hgPath
    ));
};

(async () => await prepareNetCoreDemos())();