'use strict';

const childProcess = require('child_process');

const systemSync = (command) => {
    try {
        childProcess.execSync(command, { stdio: 'inherit' });
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports.systemSync = systemSync;
