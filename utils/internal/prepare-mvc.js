'use strict';

const path = require('path');
const common = require('./prepare-common');
const fileSystemUtils = require('../shared/fs-utils');

const aspMvcLib = 'DevExtreme.AspNet.Mvc.dll';
const aspMvcXml = 'DevExtreme.AspNet.Mvc.Xml';

(async() => {
    const mercurialPath = await common.prepareWorkspace();

    const rootDir = process.cwd();
    const mvcDemosPath = path.join(rootDir, 'MVCDemos');
    const mvcDemosLibPath = path.join(mvcDemosPath, 'lib');
    const aspMvcPath = path.join(mercurialPath, 'DevExtreme.AspNet.Mvc');

    fileSystemUtils.recreateLink(path.normalize(mvcDemosLibPath));
    fileSystemUtils.recreateLink(path.join(aspMvcPath, 'bin', aspMvcLib), path.join(mvcDemosLibPath, aspMvcLib));
    fileSystemUtils.recreateLink(path.join(aspMvcPath, 'bin', aspMvcXml), path.join(mvcDemosLibPath, aspMvcXml));
})();
