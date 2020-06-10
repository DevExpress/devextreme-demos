const fs = require('fs');
const path = require('path');
const pq = require('./prompts_questions');
const fs_utils = require('./fs_utils');
const mm_utils = require('./menu_meta_utils');
const menuMetaData = require('../JSDemos/menuMeta.json');

const existingApproaches = ['jQuery', 'Knockout', 'AngularJS', 'Angular', 'React', 'Vue'],
    descriptionFileName = 'description.md',
    baseDemosDir = 'JSDemos/Demos';

const mainRoutine = async (menuMetaData) => {
    const category = await pq.askCategory(menuMetaData);
    if(category.name == 'new') {
        mm_utils.addCategory(menuMetaData, category.newName);
        fs_utils.saveMetaDataFile(menuMetaFilePath, menuMetaData);
        console.log('-> New category has been added.');
    } else {
        const group = await pq.askGroup(menuMetaData, category);
        if(group.name == 'new') {
            mm_utils.addGroup(menuMetaData, category.name, group.newName);
            fs_utils.saveMetaDataFile(menuMetaFilePath, menuMetaData);
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

const addDemo = async (category, group, menuMetaData) => {
    const demo = await pq.askDemo(menuMetaData, category, group);
    let demoPath, missingApproaches = [], widget;
    if(demo.name == 'new'){
        widget = await pq.askWidget(baseDemosDir);
        if(widget.name == 'new') {
            let pathToNewWidget = path.join(baseDemosDir, widget.newName);
            if(!fs.existsSync(pathToNewWidget)){
                fs.mkdirSync(pathToNewWidget, { recursive: true });
            }
            demoPath = path.join(pathToNewWidget, demo.newName.replace(/ /g, ''));
        } else {
            demoPath = path.join(baseDemosDir, widget.name, demo.newName.replace(/ /g, ''));
        }
        mm_utils.addDemo(menuMetaData, category.name, group.name, demo.newName, widget.newName ? widget.newName : widget.name);
        missingApproaches = existingApproaches;
    } else {
        demoPath = fs_utils.getDemoPathByMeta(category.name, group.name, demo.name, baseDemosDir, menuMetaData);
        missingApproaches = fs_utils.getMissingApproaches(demoPath, existingApproaches);
    }
    if(missingApproaches.length == 0) {
        console.log('This demo has all approaches.');
        process.exit(0);
    }
    const approaches = await pq.askApproaches(missingApproaches);
    const newOrExisting = await pq.askNewOrExisting(menuMetaData);
    fs_utils.copyDemos(demoPath, approaches.selectedApproaches, newOrExisting, menuMetaData, baseDemosDir);
    fs_utils.saveMetaDataFile(menuMetaFilePath, menuMetaData);
    console.log(demoPath);
    runDemo(demoPath);
};

(async () => await mainRoutine(menuMetaData))();
