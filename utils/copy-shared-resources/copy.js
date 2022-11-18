var jsonJs = require('./files-js.json');
var jsonMvc = require('./files-mvc.json');
const fs = require('fs');
const path = require('path');

function copyJsSharedResources(callback) {
	copySharedResources(callback, jsonJs);
}

function copyMvcSharedResources(callback) {
	copySharedResources(callback, jsonMvc);
}

function copySharedResources(callback, json) {
	//console.log(json);
	
	for(let i = 0; i < json.files.length; i++) {
		const fileInfo = json.files[i];
		const fileName = path.basename(fileInfo.filePath);
		//console.log('- filePath: ' + fileInfo.filePath);
		//console.log('- fileName: ' + fileName);
		
		for(let j = 0; j < fileInfo.paths.length; j++) {
			const copyPath = fileInfo.paths[j];
			const filePathTo = path.join(copyPath, fileName);
			//console.log('+ copyPath: ' + copyPath);
			//console.log('+ filePathTo: ' + filePathTo);
			
			if (!fs.existsSync(copyPath)){
				fs.mkdirSync(copyPath);
			}
			
			fs.copyFile(fileInfo.filePath, filePathTo, (err) => {
			  if (err) throw err;
			  console.log(fileInfo.filePath + ' was copied to ' + filePathTo);
			});
		}
	}
	
	callback();
}

module.exports = {
  copyJsSharedResources,
  copyMvcSharedResources,
};
