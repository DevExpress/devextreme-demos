'use strict';

const fs = require('fs');
const path = require('path');
const systemSync = require('../shared/child-process-utils').systemSync;
const repositoriesPathsFilePath = path.join(__dirname, '..', 'reposPaths.js');
const promptsQuestions = require('./prompts-questions');
const content = `const reposPaths = {
    'devextreme': '',
    'devextreme-angular': '',
    'devextreme-react': '',
    'devextreme-vue': '',
    'devexpress-diagram': '',
    'devexpress-gantt': '',
    'hg': ''
};

module.exports = {
    reposPaths
};`;

const processRepositoriesAsync = async(repositories, callback) => {
    repositories.forEach(async(repository) => await callback(repository));
};

const processRepository = (command, repositoryName, repositoryPath, nodeModulesDir) => {
    if(!fs.existsSync(repositoryPath)) {
        console.error('Directory `' + repositoryPath + '` does not exist. Please make sure you built the `' + repositoryName + '` repository.');
        return;
    }
    if(command === 'unlink') {
        systemSync('cd ' + nodeModulesDir + ' && npm unlink --no-save ' + repositoryName);
        systemSync('cd ' + repositoryPath + ' && npm unlink ');
    } else {
        systemSync('cd ' + nodeModulesDir + ' && npm link ' + repositoryPath);
    }
};

const getUpdatedData = (data, repository, path) => {
    let pattern = '[\'"]{0,1}DEVEXTREME[\'"]{0,1}:\\s*[\'"]{2}';
    pattern = pattern.replace('DEVEXTREME', repository);
    const replacement = '\'' + repository + '\'' + ': \'' + path.replace(/\\/g, '\\\\') + '\'';
    const result = data.replace(new RegExp(pattern), replacement);
    return result;
};

const savePathToFile = (repository, path) => {
    console.log('Updating `' + repositoriesPathsFilePath + '` Repository: `' + repository + '` Path : `' + path + '`');
    const data = fs.readFileSync(repositoriesPathsFilePath, { encoding: 'utf8', flag: 'r+' });
    const updatedData = getUpdatedData(data, repository, path);
    fs.writeFileSync(repositoriesPathsFilePath, updatedData, 'utf8');
    console.log('File updated.');
};

const createFileIfNecessary = () => {
    if(!fs.existsSync(repositoriesPathsFilePath)) {
        fs.appendFileSync(repositoriesPathsFilePath, content);
    }
};

const getRepositoryPathByName = async(repositoryName) => {
    createFileIfNecessary();
    // eslint-disable-next-line node/no-missing-require, spellcheck/spell-checker, node/no-unpublished-require
    let repositoryPath = require('../reposPaths').reposPaths[repositoryName].trim();
    if(!repositoryPath) {
        const response = await promptsQuestions.askRepositoryPath(repositoryName);
        repositoryPath = response.path;
        savePathToFile(repositoryName, repositoryPath);
    }
    return repositoryPath;
};

const getRepositoryPath = async(repositoryName) => {
    return getRepositoryPathByName(repositoryName);
};

module.exports = {
    getRepositoryPath,
    processRepositoriesAsync,
    processRepository
};
