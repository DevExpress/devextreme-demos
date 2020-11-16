'use strict';

const { spawn } = require('child_process');
const path = require('path');
const fileSystemUtils = require('../shared/fs-utils');
const promptsQuestions = require('./prompts-questions');
const menuMetaData = require('../../JSDemos/menuMeta.json');

const baseDemosDir = 'JSDemos/Demos';

const mainRoutine = async(menuMetaData) => {
    const demo = await promptsQuestions.askDemoToUpdate(menuMetaData);
    const demoPath = fileSystemUtils.getDemoPathByMeta(demo.category, demo.group, demo.demo, baseDemosDir, menuMetaData);
    const approaches = fileSystemUtils.getApproachesList(demoPath);
    const demoApproach = await promptsQuestions.askApproachesFolder(approaches);
    const openUrl = path.join(demoPath, demoApproach.approach).replace(/\\/g, '/');
    const args = ['-a', 'localhost', '-p', '3000', '-c-1', '-d', '--cors', '--o', openUrl];
    const server = spawn('http-server', args, { shell: true });

    server.stdout.on('data', (data) => console.log(data.toString()));
    server.stderr.on('data', (data) => console.log(data.toString()));
};

(async() => await mainRoutine(menuMetaData))();