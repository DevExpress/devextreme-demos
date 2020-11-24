'use strict';

const path = require('path');
const fs = require('fs');
const childProcessUtils = require('../shared/child-process-utils');
const common = require('./prepare-common');


const modifyNetCoreProject = (netCoreDemos, demosNugetPath) => {
    const netCoreDemosProj = path.join(netCoreDemos, 'DevExtreme.NETCore.Demos.csproj');
    const version = fs.readdirSync(demosNugetPath)[0].match(/\d+\.\d+\.\d+/)[0];

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

    if(fs.existsSync(demosNugetPath)) {
        fs.rmdirSync(demosNugetPath, { recursive: true });
    }

    fs.symlink(nugetPath, demosNugetPath, 'junction', () => modifyNetCoreProject(netCoreDemos, demosNugetPath));
};

(async() => await prepareNetCoreDemos())();
