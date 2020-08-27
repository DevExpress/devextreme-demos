const path = require('path');
const pq = require('./prompts_questions');
const reposHelper = require('./repos_helper');
const fs_utils = require('./fs_utils');
const node_modulesDir = path.join(__dirname, '..', 'JSDemos', 'node_modules');

const mainRoutine = async () => {
    response = await pq.askLinkRepositories();
    let repositories = [];
    await reposHelper.processRepositoriesAsync(response.repositories, async (repositoryName) => {
        const repositoryPath = await reposHelper.getRepositoryPath(repositoryName);
        repositories.push({ name: repositoryName, path: repositoryPath });
    });
    repositories.forEach(repository => {
        console.log('Processing the `' + repository.name + '` repository...');
        if(repository.name === 'devextreme' && response.build) {
            repository.path = path.join(repository.path, 'artifacts', 'npm', response.build); 
        }
        reposHelper.processRepository(response.command, repository.name, repository.path, node_modulesDir);
        console.log('Processed: ' + repository.path);
    });
    console.log('Finished ' + response.command + 'ing repositories...');
}

(async () => await mainRoutine())();
