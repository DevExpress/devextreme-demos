'use strict';

const child_process = require('child_process');

const systemSync = (command) => {
    try {
        child_process.execSync(command, { stdio: 'inherit' });
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports.systemSync = systemSync;
