const fs = require('fs');
const helper = require('../matrix-test-helper');

const productDemoFramework = [{ filename: 'JSDemos/Demos/Accordion/Overview/Angular/index.json' }];
const productDemo = [{ filename: 'JSDemos/Demos/Accordion/Overview/visualtestrc.json' }];
const productDemoDescription = [{ filename: 'JSDemos/Demos/Accordion/Overview/description.md' }];
const stubPath = [{ filename: 'stub' }];
const customScreenPath = [{ filename: 'testing/helpers/tests/magic/image.png' }];
const testStub = {
    name: 'test',
    only: {
        name: 'only',
        page() { return this; },
    },
    skip: {
        name: 'skip',
        page() { return this; },
    },
    page() { return this; },
};

function updateChanges(value, options) {
    fs.writeFileSync('changed-files.json', JSON.stringify(value));
    helper.updateConfig({
        ...options,
        verbose: false,
    });
}

describe('Matrix test helper tests', () => {
    beforeAll(() => {
        process.env.GITHUB_CI = true;
        process.env.CHANGEDFILEINFOSPATH = 'changed-files.json';
    });

    test('Product-Demo-Framework change test', () => {
        updateChanges(productDemoFramework);
        expect(helper.runTestAt(testStub, 'http://127.0.0.1:8080/JSDemos/Demos/Accordion/Overview/Angular/').name).toBe('only');
        expect(helper.runTestAt(testStub, 'http://127.0.0.1:8080/JSDemos/Demos/Accordion/Overview/Jquery/').name).toBe('skip');
    });
    test('Product-Demo change test', () => {
        updateChanges(productDemo);
        expect(helper.runTestAt(testStub, 'http://127.0.0.1:8080/JSDemos/Demos/Accordion/Overview/Angular/').name).toBe('only');
        expect(helper.runTestAt(testStub, 'http://127.0.0.1:8080/JSDemos/Demos/Accordion/Overview/Jquery/').name).toBe('only');
        expect(helper.runTestAt(testStub, 'http://127.0.0.1:8080/JSDemos/Demos/Accordion/Another/Jquery/').name).toBe('skip');
    });
    test('Do nothing on description.md change test', () => {
        updateChanges(productDemoDescription);
        expect(helper.runTestAt(testStub, 'http://127.0.0.1:8080/JSDemos/Demos/Accordion/Overview/Angular/').name).toBe('skip');
        expect(helper.runTestAt(testStub, 'http://127.0.0.1:8080/JSDemos/Demos/Accordion/Overview/Jquery/').name).toBe('skip');
    });
    test('Run all on unknown change test', () => {
        updateChanges(stubPath);
        expect(helper.runTestAt(testStub, 'http://127.0.0.1:8080/JSDemos/Demos/Accordion/Overview/Angular/').name).toBe('test');
        expect(helper.runTestAt(testStub, 'http://127.0.0.1:8080/JSDemos/Demos/Accordion/Overview/Jquery/').name).toBe('test');
    });
    test('Callstack identification test', () => {
        try {
            updateChanges(customScreenPath, {
                manualEtalonsExpr: /.*/,
            });
            let value;
            helper.runTest(testStub, '', '', '', (x) => { value = x.name; });
            expect(value).toBe('only');
        } finally {
            helper.updateConfig();
        }
    });
});
