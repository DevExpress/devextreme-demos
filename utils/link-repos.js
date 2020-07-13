const path = require('path');
const pq = require('./prompts_questions');
const reposHelper = require('./repos_helper');
const node_modulesDir = path.join(process.cwd(), 'node_modules');

const mainRoutine = async () => {
    response = await pq.askLinkRepositories();    
    await reposHelper.processRepositoriesAsync(response.repositories, async (repositoryName) => {
        console.log('Processing `' + repositoryName + '` repository...');
        let repositoryPath = await reposHelper.getRepositoryPath(repositoryName);
        if(repositoryName === 'devextreme') {
            repositoryPath = path.join(repositoryPath, 'artifacts', 'npm', 'devextreme');
            console.log(repositoryPath);
        }
        reposHelper.processRepository(response.command, repositoryName, repositoryPath, node_modulesDir);
        console.log("Processed: " + repositoryPath);
    });
    console.log('Finished ' + response.command + 'ing repositories...');
}

(async () => await mainRoutine())();
