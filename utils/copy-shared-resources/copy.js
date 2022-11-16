var json = require('./files.json');
const fs = require('fs');
const path = require('node:path');

function copySharedResources() {
	console.log(json);
	
	for(let i = 0; i < json.files.length; i++) {
		const fileInfo = json.files[i];
		const fileName = path.basename(fileInfo.filePath);
		console.log('- filePath: ' + fileInfo.filePath);
		console.log('- fileName: ' + fileName);
		
		for(let j = 0; j < fileInfo.paths.length; j++) {
			const copyPath = fileInfo.paths[j];
			const filePathTo = copyPath + '/' + fileName;
			console.log('+ copyPath: ' + copyPath);
			console.log('+ filePathTo: ' + filePathTo);
			
			if (!fs.existsSync(copyPath)){
				fs.mkdirSync(copyPath);
			}
			
			fs.copyFile(fileInfo.filePath, filePathTo, (err) => {
			  if (err) throw err;
			  console.log(fileInfo.filePath + ' was copied to ' + filePathTo);
			});
		}
	}
}

//copySharedResources();

module.exports = {
  copySharedResources,
};
