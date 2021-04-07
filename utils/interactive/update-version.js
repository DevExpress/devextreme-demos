'use strict';

const fs = require('fs');
const path = require('path');
const semver = require('semver');
const prompts = require('./prompts-questions');

const currentVersion = require('../../package.json').version;

const getUpdateMinor = () => {
    const versionInfo = semver.parse(currentVersion);
    versionInfo.patch += 1;
    return versionInfo.format();
};

const getUpdateMajor = () => {
    const versionInfo = semver.parse(currentVersion);

    if(versionInfo.minor === 1) {
        versionInfo.minor += 1;
    } else {
        versionInfo.major += 1;
        versionInfo.minor = 1;
    }
    versionInfo.patch = 0;

    return versionInfo.format();
};

const replace = (filePath, find, newVersion) => {
    const fullPath = path.join(__dirname, filePath);
    if(!fs.existsSync(fullPath)) {
        throw new Error(`File not exist: ${fullPath}`);
    }

    const versionReg = '(?<version>\\d{2}\\.(1|2)(?<patch>\\.\\d+)?(?<next>-next)?)';
    const oldVersionReg = `${find}${versionReg}`;
    let content = fs.readFileSync(fullPath, 'utf8');

    const matchContent = content.match(oldVersionReg);
    if(matchContent === null) {
        throw new Error(`Not found: ${find}`);
    }
    console.log(newVersion);

    if(matchContent.groups.patch === undefined) {
        const newVersionInfo = semver.parse(newVersion);
        newVersion = matchContent.groups.next === undefined
            ? `${newVersionInfo.major}.${newVersionInfo.minor}`
            : `${newVersionInfo.major}.${newVersionInfo.minor}-next`;
    }

    content = content.replace(`${find}${matchContent.groups.version}`, `${find}${newVersion}`);

    fs.writeFileSync(fullPath, content);
};

const mainRoutine = async() => {
    const updateMinor = getUpdateMinor();
    const updateMajor = getUpdateMajor();

    const versionChoice = await prompts.askVersionUpdate(updateMinor, updateMajor);
    const newVersion = versionChoice.command === 'minor'
        ? updateMinor
        : updateMajor;

    replace(
        '../../NetCoreDemos/DevExtreme.NETCore.Demos.csproj',
        'Include="DevExtreme.AspNet.Core" Version="',
        newVersion
    );

    replace(
        '../../package.json',
        '"version": "',
        newVersion
    );

    if(versionChoice.command === 'major') {
        replace(
            '../../package.json',
            '"devextreme": "',
            newVersion
        );

        ['angular', 'react', 'vue'].forEach(framework => {
            const dxFramework = `devextreme-${framework}`;

            replace(
                '../../package.json',
                `"${dxFramework}": "`,
                newVersion
            );
        });
    }
};

(async() => await mainRoutine())();
