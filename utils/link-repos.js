const path = require('path');
const prompts = require('prompts');
const systemSync = require('./cp_utils').systemSync;
const fs = require('fs');

const baseDemosDir = 'Demos';
const reposFilePath = './_reposPaths'; 
const node_modulesDir = path.join(process.cwd(), 'node_modules');

let reposPaths = {
    devextreme: "",
    devextreme_angular: "",
    devextreme_react: "",
    devextreme_vue: ""
}

const mainRoutine = async () => {
    if(!fs.existsSync(reposFilePath)){
        fs.writeFile(reposFilePath, JSON.stringify(reposPaths, null, 2), (err) => {
            if(err) throw err;
            console.log('File `' + reposFilePath + '` successfully created. Please fill it with paths to repos and run this script again');
        });
    } else {
        reposPaths = JSON.parse(fs.readFileSync(reposFilePath));

        console.log("Linking devextreme");
        systemSync('cd ' + node_modulesDir + ' && npm link ' + path.join(reposPaths['devextreme'], 'artifacts', 'npm', 'devextreme'));

        console.log('Linking devextreme-angular');
        systemSync('cd ' + node_modulesDir + ' && npm link ' + reposPaths['devextreme-angular']);

        console.log('Linking devextreme-react');
        systemSync('cd ' + node_modulesDir + ' && npm link ' + reposPaths['devextreme-react']);

        console.log('Linking devextreme-vue');
        systemSync('cd ' + node_modulesDir + ' && npm link ' + reposPaths['devextreme-vue']);

        console.log('Finished...');
    }
}

(async () => await mainRoutine())();