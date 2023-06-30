const childProcess = require('child_process');

const systemSync = (command, cwd) => {
  try {
    childProcess.execSync(command, { stdio: 'inherit', cwd });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.systemSync = systemSync;
