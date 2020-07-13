const path = require('path');
const fs = require('fs');
const systemSync = require('./cp_utils').systemSync;
const common = require('./prepare-common');
const fs_utils = require('./fs_utils');

const aspMvcDll = 'DevExtreme.AspNet.Mvc.dll';
const aspMvcXml = 'DevExtreme.AspNet.Mvc.Xml';

(async () => {
    const hgPath = await common.prepareWorkspace();

    const rootDir = process.cwd();
    const mvcDemosPath = path.join(rootDir, 'MVCDemos');
    const mvcDemosLibPath = path.join(mvcDemosPath, 'lib');
    const aspMvcPath = path.join(hgPath, 'DevExtreme.AspNet.Mvc');
    const nugetPath = path.join(hgPath, '.nuget/Nuget.exe');

    systemSync(nugetPath + ' restore ' + aspMvcPath + '/DevExtreme.AspNet.Mvc.Generator.sln');
    systemSync(nugetPath + ' restore ' + aspMvcPath + '/DevExtreme.AspNet.Mvc.Lib-Release.sln');
    systemSync(nugetPath + ' restore ' + mvcDemosPath + '/DevExtreme.MVC.Demos.sln');
    systemSync('dotnet msbuild ' + aspMvcPath + '/DevExtreme.AspNet.Mvc.Generator.sln');
    systemSync(aspMvcPath + '/DevExtreme.AspNet.Mvc.Generator/bin/Debug/DevExtreme.AspNet.Mvc.Generator.exe');
    systemSync('dotnet msbuild ' + aspMvcPath + '/DevExtreme.AspNet.Mvc.Lib-Release.sln');

    fs_utils.recreateLink(path.normalize(mvcDemosLibPath));
    fs_utils.recreateLink(path.join(aspMvcPath, 'bin', aspMvcDll), path.join(mvcDemosLibPath, aspMvcDll));
    fs_utils.recreateLink(path.join(aspMvcPath, 'bin', aspMvcXml), path.join(mvcDemosLibPath, aspMvcXml));
})();