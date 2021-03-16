'use strict';

const fs = require('fs');
const { systemSync } = require('../shared/child-process-utils');
const promptsQuestions = require('./prompts-questions');
const { updateConfig, init } = require('../shared/config-helper');

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

const getRepositoryPathByName = async(repositoryName) => {
    const config = init();
    let repositoryPath = config[repositoryName].trim();
    if(!repositoryPath) {
        const response = await promptsQuestions.askRepositoryPath(repositoryName);
        repositoryPath = config[repositoryName] = response.path;
        updateConfig(config);
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
