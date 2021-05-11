'use strict';

const path = require('path');
const fs = require('fs-extra');

const Builder = require('systemjs-builder');

const framework = process.argv[2];

if(!['angular', 'react', 'vue'].includes(framework)) {
    throw new Error('Usage: npm run build -- <angular|vue|react>');
}

console.log(`Start build ${framework} bundle`);
console.time('build');

const currentPackage = require(`devextreme-${framework}/package.json`);

let additionPackage = [];
let packages = [];
let additionPaths = {};

let main = `devextreme-${framework}/index.js`;
let minify = true;

if(framework === 'angular') {
    copyBundlesFolder();
    additionPackage = [{
        name: 'rxjs/*',
        metaValue: {
            build: true
        },
        pathValue: 'node_modules/rxjs/*'
    }];

    packages = [
        'rxjs/Rx.js',
        'rxjs/index.js',
        'rxjs/operators/index.js'
    ];

    // eslint-disable-next-line spellcheck/spell-checker
    if(currentPackage.fesm5) {
        main = `devextreme-${framework}`;
        minify = false;
        const bundlesRoot = 'node_modules/devextreme-angular/bundles';
        const componentNames = fs.readdirSync(bundlesRoot)
            .filter((fileName) => fileName.indexOf('umd.min.js.map') !== -1)
            .filter((fileName) => fileName.indexOf('devextreme-angular-ui') === 0)
            .map((fileName) => fileName.replace('devextreme-angular-ui-', '').replace('.umd.min.js.map', ''));

        additionPaths = {
            'devextreme-angular': `${bundlesRoot}/devextreme-angular.umd.js`,
            'devextreme-angular/core': `${bundlesRoot}/devextreme-angular-core.umd.js`,
            ...componentNames.reduce((items, item) => {
                items[`devextreme-angular/ui/${item}`] = `${bundlesRoot}/devextreme-angular-ui-${item}.umd.js`;
                return items;
            }, {}),
        };
    }
}

if(framework === 'react') {
    additionPackage = [{
        name: 'react/*',
        metaValue: {
            build: true
        },
        pathValue: 'node_modules/react/*'
    }, {
        name: 'react-dom/*',
        metaValue: {
            build: true
        },
        pathValue: 'node_modules/react-dom/*'
    }];

    packages = [
        'react/umd/react.development.js',
        'react-dom/umd/react-dom.development.js'
    ];
}

if(framework === 'vue') {
    additionPackage = [
        {
            name: 'dx-systemjs-vue-browser/*',
            metaValue: {
                build: true
            },
            pathValue: 'node_modules/dx-systemjs-vue-browser/*'
        },
        {
            name: 'systemjs-plugin-babel/*',
            metaValue: {
                build: true
            },
            pathValue: 'node_modules/systemjs-plugin-babel/*'
        }];

    packages = [
        'dx-systemjs-vue-browser/index.js',
        'systemjs-plugin-babel/plugin-babel.js',
        'systemjs-plugin-babel/systemjs-babel-browser.js',
        'systemjs-plugin-babel/babel-helpers/classCallCheck.js',
        'systemjs-plugin-babel/babel-helpers/createClass.js',
        'systemjs-plugin-babel/babel-helpers/slicedToArray.js',
        'systemjs-plugin-babel/babel-helpers/extends.js',
        'systemjs-plugin-babel/babel-helpers/toConsumableArray.js',
        'systemjs-plugin-babel/babel-helpers/defineProperty.js',
        'systemjs-plugin-babel/babel-helpers/asyncToGenerator.js',
        'systemjs-plugin-babel/regenerator-runtime.js'
    ];
}

const defaultBuilderConfig = {
    defaultExtension: false,
    defaultJSExtensions: 'js',
    packages: {
        'devextreme/events/utils': {
            main: 'index'
        },
        'devextreme/events': {
            main: 'index'
        },
    },
    meta: {
        '*': {
            build: false
        },
        'devextreme/*': {
            build: true
        },
        [`devextreme-${framework}/*`]: {
            build: true,
            main: 'index.js'
        }
    },
    paths: {
        'devextreme/*': 'node_modules/devextreme/cjs/*',
        [`devextreme-${framework}/*`]: `node_modules/devextreme-${framework}/*`,
        ...additionPaths
    }
};

const BUNDLE_PATH = `bundles/devextreme.${framework}.systemjs.js`;

// https://stackoverflow.com/questions/42412965/how-to-load-named-exports-with-systemjs/47108328
function prepareModulesToNamedImport() {
    const modules = [
        'localization.js',
        'viz/export.js',
        'viz/core/export.js',
        'viz/vector_map/projection.js',
        'viz/palette.js',
        'excel_exporter.js',
        'pdf_exporter.js'
    ];

    const paths = [
        '../npm-scripts/npm-devextreme/cjs',
        'node_modules/devextreme/cjs'
    ];

    const esModuleExport = 'exports.__esModule = true;';

    paths.forEach(path => {
        modules.forEach(name => {
            const filePath = `${path}/${name}`;

            if(fs.existsSync(filePath)) {
                const fileText = fs.readFileSync(filePath, 'utf8');
                if(fileText.search(esModuleExport) === -1) {
                    fs.appendFileSync(filePath, `\n ${esModuleExport}`);
                }
            }
        });
    });
}

function copyBundlesFolder() {
    const dxPath = path.join(process.cwd(), 'node_modules', 'devextreme');
    const dxBundlesPath = path.join(dxPath, 'bundles');
    const dxCjsBundlesPath = path.join(dxPath, 'cjs', 'bundles');

    fs.copySync(dxBundlesPath, dxCjsBundlesPath, { overwrite: true });
}

function build() {
    const builder = new Builder();
    prepareModulesToNamedImport();
    const builderConfig = defaultBuilderConfig;

    additionPackage.forEach((p) => {
        builderConfig['meta'][p.name] = p.metaValue;
        builderConfig['paths'][p.name] = p.pathValue;
    });

    builder.config(builderConfig);

    packages.push(
        'devextreme/bundles/dx.custom.config.js',
        main
    );

    builder.bundle(
        packages.join(' + '),
        BUNDLE_PATH,
        {
            'minify': minify,
            'uglify': { 'mangle': true }
        }
    ).then(() => {
        console.timeEnd('build');
        console.log(`Build complete (${framework})`);
    }).catch((err) => {
        console.log('Build error ', err);
    });
}

build();
