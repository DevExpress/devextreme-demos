/* eslint-disable indent */
/* eslint-disable no-undef */
import fs from 'fs';
import * as helper from '../matrix-test-helper';

const productDemoFramework = [{ filename: 'JSDemos/Demos/Accordion/Overview/Angular/index.json' }];
const productDemo = [{ filename: 'JSDemos/Demos/Accordion/Overview/visualtestrc.json' }];
const productDemoReadme = [{ filename: 'JSDemos/Demos/Accordion/Overview/description.md' }];
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

function updateChanges(value) {
    fs.writeFileSync('changedfiles.json', JSON.stringify(value));
    helper.updateExplicitTests();
}

describe('Matrix test helper tests', () => {
    beforeAll(() => {
        process.env.GITHUB_CI = true;
        process.env.CHANGEDFILEINFOSPATH = 'changedfiles.json';
    });

    test('Files changed in demo should cause tests', () => {
        updateChanges(productDemoFramework);
        expect(helper.runTestAt(testStub, 'http://127.0.0.1:8080/JSDemos/Demos/Accordion/Overview/Angular/').name).toBe('only');
        expect(helper.runTestAt(testStub, 'http://127.0.0.1:8080/JSDemos/Demos/Accordion/Overview/Jquery/').name).toBe('skip');
    });
});
