const fs = require('fs');
const filePath = 'bundles/devextreme.angular.systemjs.js';

const values = [{
  old: 'commonUtils.equalByValue(oldValue, newValue)',
  new: 'commonUtils.default.equalByValue(oldValue, newValue)'
}, {
  old: 'dxEvents.one(element',
  new: 'dxEvents.default.one(element'
}, {
  old: 'dxEvents.triggerHandler(changeHandlers[i]',
  new: 'dxEvents.default.triggerHandler(changeHandlers[i]',
}, {
  old: 'dxEvents.triggerHandler(element',
  new: 'dxEvents.default.triggerHandler(element',
}];

function setDefaultExport() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    let updatedContent = data;
    if (err) {
      console.error(`Error reading the file: ${err}`);
      return;
    }
    for(let value of values) {
      updatedContent = updatedContent.replace(value.old, value.new);
    }
  
    fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to the file: ${err}`);
        return;
      }
    });
  });
}

exports.setDefaultExport = setDefaultExport;