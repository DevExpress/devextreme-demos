const fs = require('fs');
const path = require('path');

function changeFileExtensions() {
  const directory = 'node_modules/devextreme-angular/fesm2015';
  const currentExt = '.mjs';
  const newExt = '.js';
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error reading file stats:', err);
          return;
        }

        if (stats.isDirectory()) {
          changeFileExtensions(filePath, currentExt, newExt);
        } else if (path.extname(file) === currentExt) {
          const newFilePath = path.join(directory, path.basename(file, currentExt) + newExt);

          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              console.error('Error renaming file:', err);
            }
          });
        }
      });
    });
  });
}

exports.changeFileExtensions = changeFileExtensions;