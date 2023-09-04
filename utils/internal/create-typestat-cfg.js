// npm run create-typestat-cfg Navigation
const fs = require('fs');
const path = require('path');

const demosMetaPath = '../../JSDemos/menuMeta.json';
const demosMeta = JSON.parse(fs.readFileSync(demosMetaPath));
const relativeRootDemosPath = 'JSDemos/Demos';
const pathToOutput = '../../';

function findFolderPaths(meta, folderName) {
  const folderMeta = meta.find((metaElement) => metaElement.Name === folderName);
  const reactFoldersByFolderName = [];
  findAllPathForGroup(folderMeta, reactFoldersByFolderName);
  return reactFoldersByFolderName;
}

function findAllPathForGroup(group, reactFoldersByFolderName) {
  if (group.Groups) {
    group.Groups.forEach((subGroup) => {
      if (subGroup.Groups) {
        subGroup.Groups.forEach((subSubGroup) => {
          findAllPathForGroup(subSubGroup, reactFoldersByFolderName);
        });
      } else {
        findAllDemosByGroup(subGroup, reactFoldersByFolderName);
      }
    });
  } else {
    findAllDemosByGroup(group, reactFoldersByFolderName);
  }
}

function findAllDemosByGroup(group, reactFoldersByFolderName) {
  group.Demos.forEach((demo) => {
    const { Widget, Name } = demo;
    reactFoldersByFolderName.push(`"${relativeRootDemosPath}/${Widget}/${Name}/React`);
  });
}

const metaFolder = process.argv[2];
const reactFilePaths = findFolderPaths(demosMeta, metaFolder);
const result = `[
    {
        "files": {
            "renameExtensions": true
        },
        "fixes": {
            "importExtensions": true
        },
        "include": [
            ${reactFilePaths.map((filePath) => `${filePath}/!(*config).{js,jsx}"`).join(',\n')}
        ],
        "project": "JSDemos\\\\tsconfig.json"
    },
    {
        "fixes": {
            "incompleteTypes": true,
            "missingProperties": true,
            "noImplicitAny": true
        },
        "include": [
            ${reactFilePaths.map((filePath) => `${filePath}/*.{ts,tsx}"`).join(',\n')}
        ],
        "project": "JSDemos\\\\tsconfig.json"
    }
]`;
fs.writeFileSync(path.join(pathToOutput, 'typestat.json'), result);
