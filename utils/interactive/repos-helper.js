'use strict';

const fs = require('fs');
const path = require('path');
const { systemSync } = require('../shared/child-process-utils');
const promptsQuestions = require('./prompts-questions');
const repositoriesPathsFilePath = path.join(__dirname, '..', '..', 'repository.config.json');
const repositoryPaths = require(repositoriesPathsFilePath);

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

const updateConfig = () => {
    const configString = JSON.stringify(repositoryPaths, null, 2);
    console.log(`Updating ${repositoriesPathsFilePath}. Config:\n${configString}`);
    fs.writeFileSync(repositoriesPathsFilePath, configString, 'utf8');
    console.log('File updated.');
};

const getRepositoryPathByName = async(repositoryName) => {
    let repositoryPath = repositoryPaths[repositoryName].trim();
    if(!repositoryPath) {
        const response = await promptsQuestions.askRepositoryPath(repositoryName);
        repositoryPath = repositoryPaths[repositoryName] = response.path;
        updateConfig();
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
