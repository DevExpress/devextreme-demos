'use strict';

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const promptsQuestions = require('./prompts-questions');
const fileSystemUtils = require('../shared/fs-utils');
const menuMetaUtils = require('./menu-meta-utils');
const menuMetaData = require('../../JSDemos/menuMeta.json');

const existingApproaches = ['jQuery', 'Knockout', 'AngularJS', 'Angular', 'React', 'Vue'];

// const descriptionFileName = 'description.md';

const menuMetaFilePath = './JSDemos/menuMeta.json';

const baseDemosDir = 'JSDemos/Demos';

const mainRoutine = async(menuMetaData) => {
    const category = await promptsQuestions.askCategory(menuMetaData);
    if(category.name === 'new') {
        menuMetaUtils.addCategory(menuMetaData, category.newName);
        fileSystemUtils.saveMetaDataFile(menuMetaFilePath, menuMetaData);
        console.log('-> New category has been added.');
    } else {
        const group = await promptsQuestions.askGroup(menuMetaData, category);
        if(group.name === 'new') {
            menuMetaUtils.addGroup(menuMetaData, category.name, group.newName);
            fileSystemUtils.saveMetaDataFile(menuMetaFilePath, menuMetaData);
            console.log('-> New group has been added.');
        } else {
            await addDemo(category, group, menuMetaData);
        }
    }
};

const openDemoInEditor = (demoPath) => spawn('code', [demoPath], { shell: true });

const addDemo = async(category, group, menuMetaData) => {
    const demo = await promptsQuestions.askDemo(menuMetaData, category, group);
    let demoPath;
    let missingApproaches = [];

    if(demo.name === 'new') {
        const widget = await promptsQuestions.askWidget(baseDemosDir);
        if(widget.name === 'new') {
            const pathToNewWidget = path.join(baseDemosDir, widget.newName);
            if(!fs.existsSync(pathToNewWidget)) {
                fs.mkdirSync(pathToNewWidget, { recursive: true });
            }
            demoPath = path.join(pathToNewWidget, demo.newName.replace(/ /g, ''));
        } else {
            demoPath = path.join(baseDemosDir, widget.name, demo.newName.replace(/ /g, ''));
        }
        menuMetaUtils.addDemo(menuMetaData, category.name, group.name, demo.newName, widget.newName ? widget.newName : widget.name);
        missingApproaches = existingApproaches;
    } else {
        demoPath = fileSystemUtils.getDemoPathByMeta(category.name, group.name, demo.name, baseDemosDir, menuMetaData);
        missingApproaches = fileSystemUtils.getMissingApproaches(demoPath, existingApproaches);
    }
    if(missingApproaches.length === 0) {
        console.log('This demo has all approaches.');
        return;
    }
    const approaches = await promptsQuestions.askApproaches(missingApproaches);
    const newOrExisting = await promptsQuestions.askNewOrExisting(menuMetaData);
    if(newOrExisting.choice === 'existing') {
        menuMetaUtils.updateDemoProperties(menuMetaData, category.name, group.name, demo.newName, newOrExisting);
    }
    fileSystemUtils.copyDemos(demoPath, approaches.selectedApproaches, newOrExisting, menuMetaData, baseDemosDir);
    fileSystemUtils.saveMetaDataFile(menuMetaFilePath, menuMetaData);
    console.log(demoPath);
    openDemoInEditor(demoPath);
};

(async() => await mainRoutine(menuMetaData))();
