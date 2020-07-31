const path = require('path');
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

    fs_utils.recreateLink(path.normalize(mvcDemosLibPath));
    fs_utils.recreateLink(path.join(aspMvcPath, 'bin', aspMvcDll), path.join(mvcDemosLibPath, aspMvcDll));
    fs_utils.recreateLink(path.join(aspMvcPath, 'bin', aspMvcXml), path.join(mvcDemosLibPath, aspMvcXml));
})();