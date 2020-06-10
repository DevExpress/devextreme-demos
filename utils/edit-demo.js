const fs = require('fs');
const path = require('path');
const pq = require('./prompts_questions');

const existingApproaches = ['jQuery', 'Knockout', 'AngularJS', 'Angular', 'React', 'Vue'],
    menuMetaFileName = 'menuMeta.json',
    menuMetaFilePath = path.join('.', menuMetaFileName),
    baseDemosDir = 'Demos';

fs.readFile(menuMetaFilePath, (err, data) => {
    if(err) {
        console.error('Error reading menuMeta.json file.');
        throw err;
    }

    let menuMetaData = JSON.parse(data);
    (async () => await mainRoutine(menuMetaData))();
});

const mainRoutine = async (menuMetaData) => {
    const demo = await pq.askDemoToUpdate(menuMetaData);
    console.log("Not implemented");
};