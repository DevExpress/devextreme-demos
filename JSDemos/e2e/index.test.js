const { toMatchImageSnapshot } = require('jest-image-snapshot');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

expect.extend({ toMatchImageSnapshot });

const e2ePath = path.join('./', 'e2e');
const diffPath =  path.join(e2ePath, '__diff_snapshots__');
const screenshotsPath = path.join(e2ePath, '__current_snapshots__');

const images = glob.sync(`${screenshotsPath}/*.png`);
images.forEach((img) => {
    const name = path.basename(img, '.png');

    test(`Test file: ${name}`, () => {
        const image = fs.readFileSync(img);
        expect(image).toMatchImageSnapshot({
            customSnapshotIdentifier: name,
            customDiffDir: diffPath,
        });
    });
})
