
const reposPaths = {
    'devextreme': "",
    'devextreme-angular': "",
    'devextreme-react': "",
    'devextreme-vue': "",
    'hg': ""
}

const getRepositoryPath = (repositoryName) => {
    return reposPaths[repositoryName];
}

module.exports = {
    getRepositoryPath
}