import { Selector } from 'testcafe';
import glob from 'glob';
import path from 'path';

fixture`Getting Started`
    .beforeEach((t) => t.resizeWindow(800, 600));

const getDemoPaths = (platform) => {
    return glob.sync(`Demos/**/${platform}`);
};

const demos = getDemoPaths('jQuery'); // TODO: 1 folder is JQuery
console.log(demos);
demos.length = 10;
demos.forEach((demo) => {
    test
        .page`file://${path.resolve(demo)}/index.html`
        (demo.replace(/\//g, '-'), async t => {
            await t.takeScreenshot();
        });
});
