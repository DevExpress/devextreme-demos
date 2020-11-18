'use strict';

const path = require('path');
const fs = require('fs');

const configDir = path.join(__dirname, '..', '..', 'JSDemos/configs');
const demosDir = path.join(__dirname, '..', '..', 'JSDemos/Demos');
const approaches = ['Angular', 'React', 'Vue'];
const meta = require('../../JSDemos/menuMeta.json');

const getKey = (widget, name) => `${widget}--${name}`.toLowerCase();

const unique = (array) => array.filter((value, index, that) => that.indexOf(value) === index);

const getDemoKey = (approach, modulesList) => approach + modulesList.replace(/[\W]/g, '');

const removeEmptyLines = (content) => content.replace(/(^\s*[\r\n])/gm, '');

const removeModules = (content, exceptions) => {
    const moduleRegex = /\/\*\*\s*(.*?)\s*\*\/([\w\W]*?)\/\*\*\//g;
    const handler = (_, moduleName, moduleContent) => exceptions.indexOf(moduleName) >= 0 ? moduleContent : '';
    return content.replace(moduleRegex, handler);
};

const getConfigContent = (approach, modulesString) => {
    const modules = modulesString.replace(/\s/g, '').split(',');
    const baseContent = fs.readFileSync(path.join(configDir, approach, 'config.js'), 'utf8');
    return removeEmptyLines(removeModules(baseContent, modules));
};

const getDemosWithExtraModules = () => {
    const result = {};

    const handleGroup = (group) => group.Demos && group.Demos.forEach((demo) => {
        if(demo.Modules) result[getKey(demo.Widget, demo.Name)] = demo.Modules;
    });

    meta.forEach(section => {
        section.Groups && section.Groups.forEach(group => {
            if(group.Groups) {
                group.Groups.forEach(group => handleGroup(group));
            }
            handleGroup(group);
        });
    });
    return result;
};

const createConfigFilesContent = (demos) => {
    const result = {};
    const uniqueConfigurations = unique(Object.values(demos));
    uniqueConfigurations.push(''); // default config has no modules

    uniqueConfigurations.forEach(modulesList => {
        approaches.forEach(approach => {
            result[getDemoKey(approach, modulesList)] = getConfigContent(approach, modulesList);
        });
    });

    return result;
};

const createConfigForApproaches = (fullDemoName, widgetName, demoName, extraModulesDemos, approachesConfigContent) => {
    approaches.forEach((approach) => {
        const demoApproachName = path.join(fullDemoName, approach);
        if(!fs.existsSync(demoApproachName)) return;

        const demoConfigName = path.join(demoApproachName, 'config.js');
        if(fs.existsSync(demoConfigName)) {
            fs.unlinkSync(demoConfigName);
        }

        const demoModulesList = extraModulesDemos[getKey(widgetName, demoName)] || '';
        fs.writeFileSync(demoConfigName, approachesConfigContent[getDemoKey(approach, demoModulesList)], 'utf8');
    });
};

const createConfigs = (demosDir) => {
    const demosWithExtraModules = getDemosWithExtraModules();
    const configContent = createConfigFilesContent(demosWithExtraModules);
    const widgetNames = fs.readdirSync(demosDir);

    widgetNames.forEach(widgetName => {
        const fullWidgetName = path.join(demosDir, widgetName);
        if(!fs.statSync(fullWidgetName).isDirectory()) return;

        const demoNames = fs.readdirSync(fullWidgetName);

        demoNames.forEach((demoName) => {
            const fullDemoName = path.join(fullWidgetName, demoName);
            if(!fs.statSync(fullDemoName).isDirectory()) return;

            createConfigForApproaches(fullDemoName, widgetName, demoName, demosWithExtraModules, configContent);
        });
    });
};

createConfigs(demosDir);

