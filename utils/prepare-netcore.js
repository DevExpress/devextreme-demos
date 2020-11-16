'use strict';

const path = require('path');
const fs = require('fs');
const childProcessUtils = require('./cp_utils');
const common = require('./prepare-common');


const modifyNetCoreProject = (netCoreDemos, version) => {
    const netCoreDemosProj = path.join(netCoreDemos, 'DevExtreme.NETCore.Demos.csproj');

    let content = fs.readFileSync(netCoreDemosProj, 'utf-8');

    content = content.replace(/("DevExtreme.AspNet.Core"\s*Version=")(\d+\.\d+\.\d+).*?(?=")/, '$1' + version);

    fs.writeFileSync(netCoreDemosProj, content, 'utf-8');

    console.log('NetCore Demos project has been modified');

    childProcessUtils.systemSync('dotnet restore ' + netCoreDemos);
};

const prepareNetCoreDemos = async() => {
    const rootDir = process.cwd();
    const mercurialPath = await common.prepareWorkspace();
    const netCoreDemos = path.join(rootDir, 'NetCoreDemos');
    const nugetPath = path.join(mercurialPath, 'DevExtreme.AspNet.Mvc/AspNetCore/NuGet');
    const demosNugetPath = path.join(netCoreDemos, 'NuGet');
    const version = require(path.join(mercurialPath, 'GitHub/artifacts/npm/devextreme/package.json')).version.split('-')[0];

    if(fs.existsSync(demosNugetPath)) {
        fs.unlinkSync(demosNugetPath);
    }

    fs.symlink(nugetPath, demosNugetPath, () => modifyNetCoreProject(netCoreDemos, version));
};

(async() => await prepareNetCoreDemos())();
