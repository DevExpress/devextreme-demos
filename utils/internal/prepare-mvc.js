'use strict';

const path = require('path');
const fs = require('fs');
const common = require('./prepare-common');
const fileSystemUtils = require('../shared/fs-utils');

const aspMvcLib = 'DevExtreme.AspNet.Mvc.dll';
const aspMvcXml = 'DevExtreme.AspNet.Mvc.Xml';

(async() => {
    const mercurialPath = await common.prepareWorkspace();

    const rootDir = process.cwd();
    const mvcDemosPath = path.join(rootDir, 'MVCDemos');
    const mvcDemosLibPath = path.normalize(path.join(mvcDemosPath, 'lib'));
    const aspMvcPath = path.join(mercurialPath, 'DevExtreme.AspNet.Mvc');

    if(fs.existsSync(mvcDemosLibPath)) {
        fs.rmdirSync(mvcDemosLibPath, { recursive: true });
    }

    fs.mkdirSync(mvcDemosLibPath);

    fileSystemUtils.recreateLink(path.join(aspMvcPath, 'bin', aspMvcLib), path.join(mvcDemosLibPath, aspMvcLib));
    fileSystemUtils.recreateLink(path.join(aspMvcPath, 'bin', aspMvcXml), path.join(mvcDemosLibPath, aspMvcXml));
})();
