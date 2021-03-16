'use strict';

const { join } = require('path');
const { writeFileSync, existsSync, readFileSync } = require('fs');

const configPath = join(__dirname, '..', '..', 'repository.config.json');

const config = {
    'devextreme': '',
    'devextreme-angular': '',
    'devextreme-react': '',
    'devextreme-vue': '',
    'devexpress-diagram': '',
    'devexpress-gantt': '',
    'hg': ''
};

const updateConfig = (configObject) => {
    const configString = JSON.stringify(configObject, null, 2);
    console.log(`Updating ${configPath}. Config:\n${configString}`);
    writeFileSync(configPath, configString, 'utf8');
    console.log('File updated.');
};

const init = () => {
    if(existsSync(configPath)) {
        return JSON.parse(readFileSync(configPath, 'utf8'));
    } else {
        updateConfig(config);
        return config;
    }
};

module.exports = {
    updateConfig,
    init
};
