'use strict';

const fs = require('fs');
const path = require('path');
const demosPathPrefix = path.join('utils', 'templates');
const descriptionFileName = 'description.md';

class FileSystemUtils {
    copyDemos(demoPath, approaches, newOrExisting, menuMetaData, baseDemosDir) {
        if(newOrExisting.choice === 'new') {
            this.copyFilesFromBlankDemos(approaches, demoPath);
        } else {
            this.copyFilesFromExistingDemos(approaches, demoPath, newOrExisting, menuMetaData, baseDemosDir);
        }
        console.log('files for selected approaches were copied');
    }

    copyFilesFromExistingDemos(approaches, demoPath, newOrExisting, menuMetaData, baseDemosDir) {
        approaches.forEach((approach) => {
            const demoPathByMeta = this.getDemoPathByMeta(
                newOrExisting.category,
                newOrExisting.group,
                newOrExisting.demo,
                baseDemosDir,
                menuMetaData);
            const fromPath = path.join(demoPathByMeta, approach);
            const toPath = path.join(demoPath, approach);

            if(!fs.existsSync(toPath)) {
                fs.mkdirSync(toPath, { recursive: true });
            }
            this.copyRecursiveSync(fromPath, toPath);
        });
    }

    copyFilesFromBlankDemos(approaches, demoPath) {
        approaches.forEach((approach) => {
            const fromPath = path.join(demosPathPrefix, approach);
            const toPath = path.join(demoPath, approach);
            this.copyRecursiveSync(fromPath, toPath);
        });

        fs.writeFileSync(path.join(demoPath, descriptionFileName), '', (err) => {
            if(err) throw err;
            console.log('description.md copied');
        });
    }

    copyRecursiveSync(src, dest) {
        const exists = fs.existsSync(src);
        const stats = exists && fs.statSync(src);
        const isDirectory = exists && stats.isDirectory();

        if(isDirectory) {
            if(!fs.existsSync(dest)) {
                fs.mkdirSync(dest);
            }
            fs.readdirSync(src).forEach((childItemName) => {
                const subSrc = path.join(src, childItemName);
                const subDest = path.join(dest, childItemName);

                // Remove only subdirectories if main directory includes commited files (MVCDemos/Scripts, NetCoreDemos/wwwroot/css)
                if(fs.statSync(subSrc).isDirectory()) {
                    if(fs.existsSync(subDest)) {
                        fs.rmdirSync(subDest, { recursive: true });
                    }

                    fs.mkdirSync(subDest);
                }

                this.copyRecursiveSync(subSrc, subDest);
            });
        } else {
            if(fs.existsSync(dest)) {
                fs.unlinkSync(dest);
            }

            fs.copyFileSync(src, dest);
        }
    }

    getDemoPathByMeta(categoryName, groupName, demoName, baseDemosDir, menuMetaData) {
        const categoryIndex = menuMetaData.findIndex(x => x.Name === categoryName);
        const groupIndex = menuMetaData[categoryIndex].Groups.findIndex(x => x.Name === groupName);
        const demo = menuMetaData[categoryIndex].Groups[groupIndex].Demos.find(x => x.Name === demoName);
        const result = path.join(baseDemosDir, demo.Widget, demo.Name);
        return result;
    }

    getMissingApproaches(demoPath, approachesList) {
        const currentDemos = this.getApproachesList(demoPath);
        const missingApproaches = approachesList.filter(approach => !currentDemos.includes(approach));
        return missingApproaches;
    }

    saveMetaDataFile(menuMetaDataFilePath, metaData) {
        console.log('Saving: menuMeta.json');
        fs.writeFileSync(menuMetaDataFilePath, JSON.stringify(metaData, null, 2));
        console.log('Saved: menuMeta.json');
    }

    getApproachesList(demoPath) {
        if(!fs.existsSync(demoPath)) {
            throw new Error(`Directory does not exist: ${demoPath}`);
        }

        const demosList = fs.readdirSync(demoPath, { withFileTypes: true })
            .filter(dirEntity => dirEntity.isDirectory())
            .map(dirEntity => dirEntity.name);
        return demosList;
    }

    isValidDirectory(directoryPath) {
        return fs.existsSync(directoryPath) && fs.lstatSync(directoryPath).isDirectory();
    }

    getWidgets(widgetsPath, newWidget) {
        const result = fs.readdirSync(widgetsPath, { withFileTypes: true })
            .filter(dirEntity => dirEntity.isDirectory())
            .map((dirEntity) => ({ title: dirEntity.name }));

        if(newWidget) {
            result.unshift({ title: newWidget, value: 'new' });
        }
        return result;
    }

    recreateLink(src, dest) {
        const exists = fs.existsSync(src);
        const stats = exists && fs.statSync(src);
        const isDirectory = exists && stats.isDirectory();

        if(isDirectory) {
            if(fs.existsSync(dest)) {
                fs.rmdirSync(dest, { recursive: true });
            }

            this.copyRecursiveSync(src, dest);

            console.log(`${dest} is copied`);
        } else {
            if(fs.existsSync(dest)) {
                fs.unlinkSync(dest);
            }

            fs.symlinkSync(src, dest);
            console.log(`${dest} link is created`);
        }
    }
}

module.exports = new FileSystemUtils();
