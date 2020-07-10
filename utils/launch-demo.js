const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const fs_utils = require('./fs_utils');
const pq = require('./prompts_questions');
const menuMetaData = require('../JSDemos/menuMeta.json');

const baseDemosDir = 'JSDemos/Demos';
    
const mainRoutine = async (menuMetaData) => {
    const demo = await pq.askDemoToUpdate(menuMetaData);
    const demoPath = fs_utils.getDemoPathByMeta(demo.category, demo.group, demo.demo, baseDemosDir, menuMetaData);
    const approaches = fs_utils.getApproachesList(demoPath);
    const demoApproach = await pq.askApproachesFolder(approaches);
    //let pathToDemo = path.join(process.cwd(), demoPath, demoApproach.approach);
    const command = /^win/.test(process.platform) ? 'http-server.cmd' : 'http-server';
    const openUrl = path.join(demoPath, demoApproach.approach).replace(/\\/g, '/');
    const arguments = ['-a', 'localhost', '-p', '3000', '-c-1', '-d', '--cors', '--o', openUrl];
    const server = spawn(command, arguments);

    server.stdout.on('data', function(data) {
        console.log(data.toString());
    });
    server.stderr.on('data', function(data) {
        console.log(data.toString());
    });
}

(async () => await mainRoutine(menuMetaData))();