'use strict';

/* eslint node/no-unsupported-features/es-syntax: [ warn, { version: ">=10" } ] */

const path = require('path');
const fs = require('fs');
const argv = process.argv.slice(2);

if(argv.length !== 1) {
    panic(`Usage: ${path.basename(__filename)} new-version`);
}

const newVersion = argv[0];
const newVersionNumeric = newVersion.match(/^[\d.]+/)[0];

function replace(filePath, templates) {
    console.log(filePath);
    filePath = path.join(__dirname, '../..', filePath);

    let content = fs.readFileSync(filePath, 'utf-8');

    templates.forEach(t => {
        let replacementCount = 0;

        const segments = t.split(/(__VER(?:_NUMERIC)?__)/);
        if(segments.length !== 3) {
            panic('Invalid template: ' + t);
        }

        const numeric = segments[1] === '__VER_NUMERIC__';
        const re = '(' + unwrapSkip(escapeRegex(segments[0])) + ')'
            + '\\d+\\.\\d+\\.\\d+(?:-\\w+)?'
            + '(' + unwrapSkip(escapeRegex(segments[2])) + ')';

        content = content.replace(new RegExp(re, 'sg'), (m, head, tail) => {
            replacementCount++;
            const result = head + (numeric ? newVersionNumeric : newVersion) + tail;
            console.log(`  '${m}' -> '${result}'`);
            return result;
        });

        if(!replacementCount) {
            panic('Not found: ' + t);
        }
    });

    fs.writeFileSync(filePath, content);
}

// https://stackoverflow.com/a/3561711
function escapeRegex(text) {
    return text.replace(/[-/\\^$*+?.()|[\]{}]/sg, '\\$&');
}

function unwrapSkip(text) {
    return text.replace(/__SKIP__/sg, '[\\s\\S]+?');
}

function panic(message) {
    console.error(message);
    process.exit(1); // eslint-disable-line no-process-exit
}

replace('package.json', [
    '"devextreme-aspnet-data": "__VER__"',
    '"devextreme-aspnet-data-nojquery": "__VER__"',
]);

replace('MVCDemos/DevExtreme.MVC.Demos.csproj', [
    'Reference Include="DevExtreme.AspNet.Data, Version=__VER_NUMERIC__',
    'packages\\DevExtreme.AspNet.Data.__VER__\\lib'
]);

replace('MVCDemos/packages.config', [
    'package id="DevExtreme.AspNet.Data" version="__VER__"'
]);

replace('MVCDemos/Web.config', [
    'assemblyIdentity name="DevExtreme.AspNet.Data" __SKIP__ oldVersion="0.0.0.0-__VER_NUMERIC__.0"',
    'assemblyIdentity name="DevExtreme.AspNet.Data" __SKIP__ newVersion="__VER_NUMERIC__.0"',
]);

replace('NetCoreDemos/DevExtreme.NETCore.Demos.csproj', [
    'PackageReference Include="DevExtreme.AspNet.Data" Version="__VER__"'
]);
