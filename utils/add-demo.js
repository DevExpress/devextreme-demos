'use strict';

const fs = require('fs');
const path = require('path');
const promptsQuestions = require('./prompts_questions');
const fileSystemUtils = require('./fs_utils');
const menuMetaUtils = require('./menu_meta_utils');
const menuMetaData = require('../JSDemos/menuMeta.json');

const existingApproaches = ['jQuery', 'Knockout', 'AngularJS', 'Angular', 'React', 'Vue'];

// const descriptionFileName = 'description.md'; // TODO remove this line

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

const runDemo = (demoPath) => {
    const command = /^win/.test(process.platform) ? 'code.cmd' : 'code';
    require('child_process').spawn(command, [demoPath]);
};

const addDemo = async(category, group, menuMetaData) => {
    const demo = await promptsQuestions.askDemo(menuMetaData, category, group);
    let demoPath; let missingApproaches = []; let widget;
    if(demo.name === 'new') {
        widget = await promptsQuestions.askWidget(baseDemosDir);
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
        process.exit(0);
    }
    const approaches = await promptsQuestions.askApproaches(missingApproaches);
    const newOrExisting = await promptsQuestions.askNewOrExisting(menuMetaData);
    fileSystemUtils.copyDemos(demoPath, approaches.selectedApproaches, newOrExisting, menuMetaData, baseDemosDir);
    fileSystemUtils.saveMetaDataFile(menuMetaFilePath, menuMetaData);
    console.log(demoPath);
    runDemo(demoPath);
};

(async() => await mainRoutine(menuMetaData))();
