const fs = require('fs');
const path = require('path');
const demosPathPrefix = 'utils';
const descriptionFileName = 'description.md';

const copyDemos = (demoPath, approaches, newOrExisting, menuMetaData, baseDemosDir) => {
    if(newOrExisting.choice == 'new') {
        copyFilesFromBlankDemos(approaches, demoPath);
    } else {
        copyFilesFromExistingDemos(approaches, demoPath, newOrExisting, menuMetaData, baseDemosDir);
    }
    console.log('files for selected approaches were copied');
}

const copyFilesFromExistingDemos = (approaches, demoPath, newOrExisting, menuMetaData, baseDemosDir) => {
    approaches.forEach(function(approach){
        const demoPathByMeta = getDemoPathByMeta(newOrExisting.category, newOrExisting.group, newOrExisting.demo, baseDemosDir, menuMetaData);
        const fromPath = path.join(demoPathByMeta, approach);
        const toPath = path.join(demoPath, approach);
        if(!fs.existsSync(toPath)){
            fs.mkdirSync(toPath, { recursive: true });
        }
        copyRecursiveSync(fromPath, toPath);
    });
}

const copyFilesFromBlankDemos = (approaches, demoPath) => {
    approaches.forEach((approach) => {
        const fromPath = path.join(demosPathPrefix, approach);
        const toPath = path.join(demoPath, approach);
        copyRecursiveSync(fromPath, toPath);
    });
    fs.writeFileSync(path.join(demoPath, descriptionFileName), '', function(err) {
        if(err) throw err;
        console.log('description.md copied');
    });
}

const copyRecursiveSync = (src, dest) => {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if(isDirectory) {
        if(!fs.existsSync(dest)){
            fs.mkdirSync(dest, { recursive: true });
        }
      fs.readdirSync(src).forEach(function(childItemName) {
        copyRecursiveSync(path.join(src, childItemName),
                          path.join(dest, childItemName));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
}

const getDemoPathByMeta = (categoryName, groupName, demoName, baseDemosDir, menuMetaData) => {
    const _categoryIndex = menuMetaData.findIndex(x => x.Name == categoryName);
    const _groupIndex = menuMetaData[_categoryIndex].Groups.findIndex(x => x.Name == groupName);
    const demo = menuMetaData[_categoryIndex].Groups[_groupIndex].Demos.find(x => x.Name == demoName);
    const result = path.join(baseDemosDir, demo.Widget, demo.Name);
    return result;
}

const getMissingApproaches = (demoPath, approachesList) => {
    const currentDemos = getApproachesList(demoPath);
    const missingApproaches = approachesList.filter(x => !currentDemos.includes(x));
    return missingApproaches;
}

const saveMetaDataFile = (menuMetaDataFilePath, metaData) => {
    console.log('Saving: menuMeta.json');
    fs.writeFileSync(menuMetaDataFilePath, JSON.stringify(metaData, null, 2));
    console.log('Saved: menuMeta.json');
}

const getApproachesList = (demoPath) => {
    if(!fs.existsSync(demoPath)){
        console.error('Directory does not exist:', demoPath);
        process.exit(0);
    }
    const demosList = fs.readdirSync(demoPath, { withFileTypes: true })
                        .filter(dirent => dirent.isDirectory())
                        .map(dirent => dirent.name);
    return demosList;
}

const getWidgets = (widgetsPath, newWidget) => {
    let result = fs.readdirSync(widgetsPath, {withFileTypes: true})
                    .filter(dirent => dirent.isDirectory())
                    .map((dirent) => {
                        return { title: dirent.name };
                    });
    if(newWidget) {
        result.unshift({ title: newWidget, value: 'new' })
    }
    return result;
}

const recreateLink = (src, dest, callback) => {
    if(!dest) {
        if(fs.existsSync(src)) {
            fs.rmdirSync(src, { recursive: true });
        }

        fs.mkdir(src, (error) => {
            if(error) {
                console.log(error);
                return;
            }

            console.log(src + ' is created');
        });
    } else {
        if(fs.existsSync(dest)) {
            fs.unlinkSync(dest);
        }

        fs.symlink(src, dest, (error) => {
            if(error) {
                console.log(error);
                return;
            }

            if(callback) callback();

            console.log(dest + ' link is created');
        });
    }
}

module.exports = {
    copyDemos,
    copyRecursiveSync,
    getDemoPathByMeta,
    getMissingApproaches,
    getApproachesList,
    saveMetaDataFile,
    getWidgets,
    recreateLink
}