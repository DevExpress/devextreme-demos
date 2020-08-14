
const reposPaths = {
    'devextreme': "F:\\repositories\\DevExtreme",
    'devextreme-angular': "",
    'devextreme-react': "",
    'devextreme-vue': "",
    'hg': "F:\\repositories\\dxHG"
}

const getRepositoryPath = (repositoryName) => {
    return reposPaths[repositoryName];
}

module.exports = {
    getRepositoryPath
}
