const fs = require('fs');
const path = require('path');
const reposPaths = require('./_reposPaths');
const systemSync = require('./cp_utils').systemSync;
const reposPathsFilePath = path.join(__dirname, '_reposPaths.js');
const pq = require('./prompts_questions');

const processRepositoriesAsync = async (repositories, callback) => {
    for (let index = 0; index < repositories.length; index++) {
        await callback(repositories[index], index, repositories);
    }
};

const processRepository = (command, repositoryName, repositoryPath, node_modulesDir) => {
    if(!fs.existsSync(repositoryPath)) {
        console.error("Directory `" + repositoryPath + "` does not exist. Please make sure you built the `" + repositoryName + "` repository.");
        return;
    }
    if(command == "unlink") {
        systemSync('cd ' + node_modulesDir + ' && npm unlink --no-save ' + repositoryName);
        systemSync('cd ' + repositoryPath + ' && npm unlink ');
    } else {
        systemSync('cd ' + node_modulesDir + ' && npm link ' + repositoryPath);
    }
}

const getUpdatedData = (data, repository, path) => {
    let pattern = "[\'\"]{0,1}DEVEXTREME[\'\"]{0,1}:\\s*[\'\"]{2}";
    pattern = pattern.replace('DEVEXTREME', repository); 
    const replacement = "'" + repository + "'" + ': "' + path.replace(/\\/g, '\\\\') + "\"";
    const result = data.replace(new RegExp(pattern), replacement);
    return result;
}

const savePathToFile = (repository, path) => {
    console.log('Updating `' + reposPathsFilePath + '` Repository: `' + repository + '` Path : `' + path + '`');
    let data = fs.readFileSync(reposPathsFilePath, {encoding: 'utf8', flag: 'r+' });
    const updatedData = getUpdatedData(data, repository, path); 
    fs.writeFileSync(reposPathsFilePath, updatedData, 'utf8');
    console.log('File updated.');
}

const getRepositoryPathByName = async (repositoryName) => {
    let repositoryNameNormalized = repositoryName.replace(' ', '-').toLowerCase();
    let repositoryPath = reposPaths.getRepositoryPath(repositoryNameNormalized).trim();
    if(!repositoryPath) {
        const response = await pq.askRepositoryPath(repositoryName);
        repositoryPath = response.path;
        savePathToFile(repositoryNameNormalized, repositoryPath);
    }
    return repositoryPath;
}

const getDevExtremeRepositoryPath = async () => {
    return getRepositoryPathByName('DevExtreme');
} 

const getDevExtremeAngularRepositoryPath = async () => {
    return getRepositoryPathByName('DevExtreme Angular');
}

const getDevExtremeReactRepositoryPath = async () => {
    return getRepositoryPathByName('DevExtreme React');
}

const getDevExtremeVueRepositoryPath = async () => {
    return getRepositoryPathByName('DevExtreme Vue');
}

const getHGRepositoryPath = async () => {
    return getRepositoryPathByName('HG');
}

const getRepositoryPath = async (repositoryName) => {
    if(repositoryName === 'devextreme') {
        return getDevExtremeRepositoryPath();
    }
    if(repositoryName === 'devextreme-angular') {
        return getDevExtremeAngularRepositoryPath();
    }
    if(repositoryName === 'devextreme-react') {
        return getDevExtremeReactRepositoryPath();
    }
    if(repositoryName === 'devextreme-vue') {
        return getDevExtremeVueRepositoryPath();
    }
    if(repositoryName.toLowerCase() == 'hg') {
        return getHGRepositoryPath();
    }
}

module.exports = {
    getRepositoryPath,
    getDevExtremeRepositoryPath,
    getDevExtremeAngularRepositoryPath,
    getDevExtremeReactRepositoryPath,
    getDevExtremeVueRepositoryPath,
    getHGRepositoryPath,
    processRepositoriesAsync,
    processRepository
}
