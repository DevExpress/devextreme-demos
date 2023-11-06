const fs = require('fs');
const filePath = 'bundles/devextreme.angular.systemjs.js';

const values = [{
  old: 'commonUtils.equalByValue(oldValue, newValue)',
  new: 'commonUtils.default.equalByValue(oldValue, newValue)'
}, {
  old: 'events.one(element',
  new: 'events.default.one(element'
}, {
  old: 'events.triggerHandler(changeHandlers[i]',
  new: 'events.default.triggerHandler(changeHandlers[i]',
}, {
  old: 'events.triggerHandler(element',
  new: 'events.default.triggerHandler(element',
}]
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