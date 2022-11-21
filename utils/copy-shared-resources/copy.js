const fs = require('fs');
const path = require('path');
const jsonJs = require('./files-js.json');
const jsonMvc = require('./files-mvc.json');

function copyJsSharedResources(callback) {
  copySharedResources(callback, jsonJs);
}

function copyMvcSharedResources(callback) {
  copySharedResources(callback, jsonMvc);
}

function copySharedResources(callback, json) {
  for (let i = 0; i < json.files.length; i += 1) {
    const fileInfo = json.files[i];
    const fileName = path.basename(fileInfo.filePath);

    for (let j = 0; j < fileInfo.paths.length; j += 1) {
      const copyPath = fileInfo.paths[j];
      const filePathTo = path.join(copyPath, fileName);

      if (!fs.existsSync(copyPath)) {
        fs.mkdirSync(copyPath);
      }

      fs.copyFile(fileInfo.filePath, filePathTo, (err) => {
        if (err) throw err;
      });
    }
  }

  callback();
}

module.exports = {
  copyJsSharedResources,
  copyMvcSharedResources,
};
