'use strict';

const path = require('path');
const prompts = require('prompts');

const menuMetaUtils = require('./menu_meta_utils');
const fileSystemUtils = require('./fs_utils');

const setTextIfPrevIsNull = prev => prev === 'new' ? 'text' : null;

const getPromptForCategories = (menuMetaData, message, newCategoryText) => ({
    type: 'autocomplete',
    name: 'name',
    message: message,
    choices: menuMetaUtils.getCategories(menuMetaData, newCategoryText)
});

const getCategoryQuestions = (menuMetaData) => {
    return [
        getPromptForCategories(
            menuMetaData,
            'Select a category for the new demo or `New category` to create a new category.',
            '[New category]'
        ),
        {
            type: setTextIfPrevIsNull,
            name: 'newName',
            message: 'Enter the name of a new category:'
        }];
};

const getGroupQuestions = (menuMetaData, category) => {
    return [{
        type: 'autocomplete',
        name: 'name',
        message: 'Select a group for the new demo or `New group` to create a new group.',
        choices: menuMetaUtils.getGroups(menuMetaData, category.name, '[New group]')
    }, {
        type: setTextIfPrevIsNull,
        name: 'newName',
        message: 'Enter the name of a new group:'
    }];
};

const getDemoQuestions = (menuMetaData, category, group) => {
    return [{
        type: 'autocomplete',
        name: 'name',
        message: 'Select a demo to which you want to add missing approaches or `[New demo]` to create a new demo in this group.',
        choices: menuMetaUtils.getDemos(menuMetaData, category.name, group.name, '[New demo]')
    }, {
        type: setTextIfPrevIsNull,
        name: 'newName',
        message: 'Enter the name of a new demo:',
    }];
};

const onCancel = () => {
    console.log('Operation is canceled.');
    // eslint-disable-next-line no-process-exit
    process.exit(0);
};

const getWidgetQuestions = (baseDemosDir) => {
    return [{
        type: 'autocomplete',
        name: 'name',
        message: 'Select a directory for the demo or `[New directory]` to create a new directory',
        choices: fileSystemUtils.getWidgets(path.join(baseDemosDir), '[New directory]')
    }, {
        type: (prev, answers) => answers.name === 'new' ? 'text' : null,
        name: 'newName',
        format: val => val.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase()).replace(/ /g, ''),
        message: 'Enter the name of a new directory:',
    }];
};

const getApproachesQuestions = (approaches) => {
    return {
        type: 'multiselect',
        name: 'selectedApproaches',
        message: 'Select approaches:',
        min: 1,
        choices: () => approaches.map((item) => { return { title: item, value: item }; })
    };
};

const getNewOrExistingQuestions = (menuMetaData) => {
    return [{
        type: 'autocomplete',
        name: 'choice',
        message: 'Would you like to create a blank demo or copy files from existing demo?',
        choices: [{ title: 'Create a new demo', value: 'new' }, { title: 'Copy files from existing demo', value: 'existing' }]
    }, {
        type: (prev, answers) => answers.choice === 'existing' ? 'autocomplete' : null,
        name: 'category',
        message: '[Copy from existing demo]: Select a category:',
        choices: menuMetaUtils.getCategories(menuMetaData)
    }, {
        type: (prev, answers) => answers.choice === 'existing' ? 'autocomplete' : null,
        name: 'group',
        message: '[Copy from existing demo]: Select a group',
        choices: (prev, answers) => menuMetaUtils.getGroups(menuMetaData, answers.category)
    }, {
        type: (prev, answers) => answers.choice === 'existing' ? 'autocomplete' : null,
        name: 'demo',
        message: '[Copy from existing demo]: Select a demo',
        choices: (prev, answers) => menuMetaUtils.getDemos(menuMetaData, answers.category, answers.group)
    }];
};

const getApproachesFoldersQuestions = (approaches) => {
    const result = approaches.map(function(approach) {
        return { title: approach };
    });
    return {
        type: 'autocomplete',
        name: 'approach',
        message: 'Select an approach:',
        choices: result
    };
};

const getDemoToUpdateQuestions = (menuMetaData) => {
    return [{
        type: 'autocomplete',
        name: 'category',
        message: 'Select a category:',
        choices: menuMetaUtils.getCategories(menuMetaData)
    }, {
        type: 'autocomplete',
        name: 'group',
        message: 'Select a group:',
        choices: (prev, answers) => menuMetaUtils.getGroups(menuMetaData, answers.category)
    }, {
        type: 'autocomplete',
        name: 'demo',
        message: 'Select a demo:',
        choices: (prev, answers) => menuMetaUtils.getDemos(menuMetaData, answers.category, answers.group)
    }];
};

const getLinkRepositoriesQuestions = () => {
    return [
        {
            type: 'select',
            name: 'command',
            message: 'Do you want to link or unlink repositories?',
            choices: [
                { title: 'Link repositories', value: 'link' },
                { title: 'Unlink repositories', value: 'unlink' }
            ]
        },
        {
            type: 'multiselect',
            name: 'repositories',
            min: 1,
            instructions: '\nSpace - select a repository\nUp/Down - Highlight next/previous repository\nEnter - finish selection\n',
            message: (prev, answers) => 'Select repositories that you want to ' + answers.command + ' and press Enter...',
            choices: [
                { title: 'DevExtreme', value: 'devextreme' },
                { title: 'DevExtreme Angular', value: 'devextreme-angular' },
                { title: 'DevExtreme React', value: 'devextreme-react' },
                { title: 'DevExtreme Vue', value: 'devextreme-vue' },
                { title: 'DevExpress Gantt', value: 'devexpress-gantt' },
                { title: 'DevExpress Diagram', value: 'devexpress-diagram' },
            ]
        },
        {
            type: (prev, answers) => answers.repositories.includes('devextreme') ? 'select' : null,
            name: 'build',
            initial: 0,
            message: 'Select DevExtreme build you want to process.',
            choices: [
                { title: 'Current `devextreme/artifacts/npm/devextreme`', value: 'devextreme' },
                { title: 'Renovation `devextreme/artifacts/npm/devextreme-renovation`', value: 'devextreme-renovation' },
            ]
        }
    ];
};

const askCategory = async(menuMetaData) => {
    return prompts(getCategoryQuestions(menuMetaData), { onCancel });
};
const askGroup = async(menuMetaData, category) => {
    return prompts(getGroupQuestions(menuMetaData, category), { onCancel });
};

const askDemo = async(menuMetaData, category, group) => {
    return prompts(getDemoQuestions(menuMetaData, category, group), { onCancel });
};

const askWidget = async(baseDemosDir) => {
    return prompts(getWidgetQuestions(baseDemosDir), { onCancel });
};

const askApproaches = async(missingApproaches) => {
    return prompts(getApproachesQuestions(missingApproaches), { onCancel });
};

const askNewOrExisting = async(menuMetaData) => {
    return prompts(getNewOrExistingQuestions(menuMetaData), { onCancel });
};

const askDemoToUpdate = async(menuMetaData) => {
    return prompts(getDemoToUpdateQuestions(menuMetaData), { onCancel });
};

const askApproachesFolder = async(approaches) => {
    return prompts(getApproachesFoldersQuestions(approaches), { onCancel });
};

const askLinkRepositories = async() => {
    return prompts(getLinkRepositoriesQuestions(), { onCancel });
};

const askHGPath = async() => {
    return prompts({
        type: 'text',
        name: 'hgPath',
        message: 'Please specify the location of the Tortoise HG repository:'
    }, { onCancel });
};


const askRepositoryPath = async(repositoryName) => {
    return prompts({
        type: 'text',
        name: 'path',
        validate: value => fileSystemUtils.isValidDirectory(value) ? true : 'Invalid path.',
        message: 'Specify the location of the `' + repositoryName + '` repository:'
    }, { onCancel });
};


module.exports = {
    getCategoryQuestions,
    getGroupQuestions,
    askGroup,
    askNewOrExisting,
    askApproachesFolder,
    askCategory,
    askDemo,
    askDemoToUpdate,
    askApproaches,
    askWidget,
    askHGPath,
    askRepositoryPath,
    getDemoQuestions,
    getApproachesQuestions,
    getWidgetQuestions,
    getApproachesFoldersQuestions,
    getDemoToUpdateQuestions,
    getNewOrExistingQuestions,
    askLinkRepositories
};
