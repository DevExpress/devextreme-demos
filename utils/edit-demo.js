'use strict';

const fs = require('fs');
const path = require('path');
const promptsQuestions = require('./prompts_questions');

// const existingApproaches = ['jQuery', 'Knockout', 'AngularJS', 'Angular', 'React', 'Vue']; // TODO remove this line

const menuMetaFileName = 'menuMeta.json';
const menuMetaFilePath = path.join('.', menuMetaFileName);
// const baseDemosDir = 'Demos'; // TODO remove this line

fs.readFile(menuMetaFilePath, (err, data) => {
    if(err) {
        console.error('Error reading menuMeta.json file.');
        throw err;
    }

    const menuMetaData = JSON.parse(data);
    (async() => await mainRoutine(menuMetaData))();
});

const mainRoutine = async(menuMetaData) => {
    const demo = await promptsQuestions.askDemoToUpdate(menuMetaData);
    console.log('Not implemented', demo);
};
