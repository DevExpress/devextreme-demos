'use strict';

const path = require('path');
const promptsQuestions = require('./prompts-questions');
const repositoriesHelper = require('./repos-helper');
const nodeModulesDir = path.join(__dirname, '..', '..', 'JSDemos', 'node_modules');

const mainRoutine = async() => {
    const response = await promptsQuestions.askLinkRepositories();
    const repositories = [];
    await repositoriesHelper.processRepositoriesAsync(response.repositories, async(repositoryName) => {
        const repositoryPath = await repositoriesHelper.getRepositoryPath(repositoryName);
        repositories.push({ name: repositoryName, path: repositoryPath });
    });
    repositories.forEach(repository => {
        console.log('Processing the `' + repository.name + '` repository...');

        if(repository.name === 'devextreme' && response.build) {
            repository.path = path.join(repository.path, 'artifacts', 'npm', response.build);
        }

        repositoriesHelper.processRepository(response.command, repository.name, repository.path, nodeModulesDir);
        console.log('Processed: ' + repository.path);
    });
    console.log('Finished ' + response.command + 'ing repositories...');
};

(async() => await mainRoutine())();
