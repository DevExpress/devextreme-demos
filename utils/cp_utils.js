const child_process = require('child_process');

const systemSync = (cmd) => {
    try {
        child_process.execSync(cmd, { stdio: 'inherit' });
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports.systemSync = systemSync;