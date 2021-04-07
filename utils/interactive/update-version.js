'use strict';

const fs = require('fs');
const path = require('path');
const semver = require('semver');
const prompts = require('./prompts-questions');

const currentVersion = require('../../package.json').version;

const getUpdateMinor = () => {
    const versionInfo = semver.parse(currentVersion);
    versionInfo.patch += 1;
    
    return versionInfo.version;
}

const getUpdateMajor = () => {
    const versionInfo = semver.parse(currentVersion);

    if(versionInfo.minor === 1) {
        versionInfo.minor += 1;
    } else {
        versionInfo.major += 1;
        versionInfo.minor = 1;
    }
    versionInfo.patch = 0;

    return versionInfo.version;
}

const replace = (filePath, find, oldVersion, newVersion) => {
    const fullPath = path.join(__dirname, filePath);
    if(!fs.existsSync(fullPath)) {
        throw new Error(`File not exist: ${fullPath}`);
    }

    const oldVersionReg = `${find}${oldVersion}`;
    const content = fs.readFileSync(fullPath);

    const foundContent = content.match(oldVersionReg);
    if(foundContent === null) {
        throw new Error(`Not found: ${oldVersionReg}`);
    }

    const versionReg = /d{2}\.(1|2)(\.\d+)?(?<next>-next)?/;
    const groups = foundContent.match(versionReg).groups;

    if(groups.next !== undefined) {
        const newVersionInfo = semver.parse(newVersion);
        newVersion = `${newVersionInfo.major}.${newVersionInfo.minor}-next`;
    }

    const newVersionReg = `${find}${newVersion}`;
    content = content.replace(oldVersionReg, newVersionReg);

    fs.writeFileSync(fullPath, content);
}

const mainRoutine = () => {
    const versionChoise = prompts.askVersionUpdate();
    const newVersion = versionChoise.command === 'minor'
        ? getUpdateMinor()
        : getUpdateMajor();

    replace(
        '../../NetCoreDemos/DevExtreme.NETCore.Demos.csproj',
        'Include="DevExtreme.AspNet.Core" Version="',
        currentVersion, newVersion
    );

    replace(
        '../../package.json',
        '"version": "',
        currentVersion, newVersion
    );

    if(versionChoise.command === 'major') {
        replace(
            '../../package.json',
            '"devextreme": "',
            currentVersion, newVersion
        );

        ['angular', 'react', 'vue'].forEach(framework => {
            const dxFramework = `devextreme-${framework}`;

            replace(
                '../../package.json',
                `"${dxFramework}": "`,
                currentVersion, newVersion
            );
        });
    }
}

(async() => await mainRoutine())();
