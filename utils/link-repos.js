const path = require('path');
const pq = require('./prompts_questions');
const reposHelper = require('./repos_helper');
const { askRepositoryPath } = require('./prompts_questions');
const node_modulesDir = path.join(process.cwd(), 'node_modules');

const mainRoutine = async () => {
    response = await pq.askLinkRepositories();    
    await reposHelper.processRepositoriesAsync(response.repositories, async (item) => {
        console.log('Processing `' + item + '` repository...');
        let repositoryPath = await reposHelper.getRepositoryPath(item);
        if(item === 'devextreme') {
            repositoryPath = path.join(repositoryPath, 'artifacts', 'npm', 'devextreme');
            console.log(repositoryPath);
        }
        reposHelper.processRepository(response.command, item, repositoryPath, node_modulesDir);
        console.log("Processed: " + repositoryPath);
    });
    console.log('Finished...');
}

(async () => await mainRoutine())();