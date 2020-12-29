'use strict';

const fs = require('fs');
const path = require('path');
const fileSystemUtils = require('../../shared/fs-utils');

jest.mock('fs');

describe('common functions', () => {
    beforeEach(() => {
        fs.writeFileSync.mockClear();
        fs.existsSync.mockClear();
        fs.lstatSync.mockClear();
        fs.readdirSync.mockClear();
    });

    test('saveMetaDataFile', () => {
        const testJson = {
            test: 'test'
        };

        fileSystemUtils.saveMetaDataFile('./test.json', testJson);

        expect(fs.writeFileSync).toHaveBeenCalledWith(
            './test.json',
            JSON.stringify(testJson, null, 2)
        );
    });

    test('isValidDirectory', () => {
        const directoryName = 'directory';
        const fileName = 'file';
        const nonExistentFile = 'non-existent-file';
        fs.existsSync.mockImplementation((directory) => directory === directoryName || directory === fileName);
        fs.lstatSync.mockImplementation((directory) => ({
            isDirectory: () => directory === directoryName
        }));

        expect(fileSystemUtils.isValidDirectory(directoryName)).toBe(true);
        expect(fileSystemUtils.isValidDirectory(fileName)).toBe(false);
        expect(fileSystemUtils.isValidDirectory(nonExistentFile)).toBe(false);
    });

    test('getApproachesList', () => {
        const directoryName = 'directory';
        const nonExistentDirectory = 'non-existent-directory';
        const descriptionFileName = 'description.md';
        const fileSystemEntities = ['jQuery', 'Angular', descriptionFileName];

        fs.existsSync.mockImplementation((directory) => directory === directoryName);
        fs.readdirSync.mockImplementation((directory) => fileSystemEntities.map(entity => ({
            isDirectory: () => entity !== descriptionFileName,
            name: entity
        })));

        expect(() => fileSystemUtils.getApproachesList(nonExistentDirectory))
            .toThrow(`Directory does not exist: ${nonExistentDirectory}`);

        expect(fileSystemUtils.getApproachesList(directoryName))
            .toEqual(['jQuery', 'Angular']);
    });

    test('getMissingApproaches', () => {
        const directoryName = 'directory';
        const descriptionFileName = 'description.md';
        const fileSystemEntities = ['jQuery', 'Angular', descriptionFileName];

        fs.existsSync.mockImplementation((directory) => directory === directoryName);
        fs.readdirSync.mockImplementation((directory) => fileSystemEntities.map(entity => ({
            isDirectory: () => entity !== descriptionFileName,
            name: entity
        })));

        expect(fileSystemUtils.getMissingApproaches(directoryName, ['jQuery', 'Angular', 'Vue']))
            .toEqual(['Vue']);
    });

    test('getWidgets', () => {
        const garbageFileName = 'garbage.txt';
        const fileSystemEntities = ['Accordion', 'Button', garbageFileName];

        fs.readdirSync.mockImplementation((directory) => fileSystemEntities.map(entity => ({
            isDirectory: () => entity !== garbageFileName,
            name: entity
        })));

        expect(fileSystemUtils.getWidgets('someDir'))
            .toEqual([{ title: 'Accordion' }, { title: 'Button' }]);

        expect(fileSystemUtils.getWidgets('someDir', 'someNewWidget'))
            .toEqual([{ title: 'someNewWidget', value: 'new' }, { title: 'Accordion' }, { title: 'Button' }]);
    });

    test('getDemoPathByMeta', () => {
        const categoryName = 'Category1';
        const groupName = 'Group1';
        const demoName = 'Demo2';
        const baseDemosDir = 'dir';
        const menuMetaData = [{
            Name: 'Category1',
            Groups: [{
                Name: 'Group1',
                Demos: [{
                    Name: 'Demo1'
                }, {
                    Name: 'Demo2',
                    Widget: 'Widget2'
                }]
            }, {
                Name: 'Group2'
            }]
        }, {
            Name: 'Category2'
        }];

        const expectedPath = path.join(baseDemosDir, 'Widget2', demoName);

        expect(fileSystemUtils.getDemoPathByMeta(categoryName, groupName, demoName, baseDemosDir, menuMetaData))
            .toBe(expectedPath);
    });
});

describe('recreateLink', () => {
    beforeEach(() => {
        fs.existsSync.mockClear();
        fs.statSync.mockClear();
        fs.unlinkSync.mockClear();
        fs.symlinkSync.mockClear();
        fs.rmdirSync.mockClear();
    });

    test('file to file (destination exists)', () => {
        const src = 'file1';
        const dest = 'file2';

        fs.existsSync.mockImplementation((file) => file === src || file === dest);
        fs.statSync.mockImplementation(() => ({ isDirectory: () => false }));

        fileSystemUtils.recreateLink(src, dest);

        expect(fs.unlinkSync).toHaveBeenCalledTimes(1);
        expect(fs.unlinkSync).toHaveBeenCalledWith(dest);

        expect(fs.symlinkSync).toHaveBeenCalledTimes(1);
        expect(fs.symlinkSync).toHaveBeenCalledWith(src, dest);
    });

    test('file to file (destination does not exists)', () => {
        const src = 'file1';
        const dest = 'file2';

        fs.existsSync.mockImplementation((file) => file === src);
        fs.statSync.mockImplementation(() => ({ isDirectory: () => false }));

        fileSystemUtils.recreateLink(src, dest);

        expect(fs.unlinkSync).toHaveBeenCalledTimes(0);

        expect(fs.symlinkSync).toHaveBeenCalledTimes(1);
        expect(fs.symlinkSync).toHaveBeenCalledWith(src, dest);
    });

    test('dir to dir (destination exists)', () => {
        const src = 'dir1';
        const dest = 'dir2';

        fs.existsSync.mockImplementation((dir) => dir === src || dir === dest);
        fs.statSync.mockImplementation(() => ({ isDirectory: () => true }));

        const origCopyRecursiveSync = fileSystemUtils.copyRecursiveSync;
        fileSystemUtils.copyRecursiveSync = jest.fn().mockImplementation(() => {});

        fileSystemUtils.recreateLink(src, dest);

        expect(fs.rmdirSync).toHaveBeenCalledTimes(1);
        expect(fs.rmdirSync).toHaveBeenCalledWith(dest, { recursive: true });

        expect(fileSystemUtils.copyRecursiveSync).toHaveBeenCalledTimes(1);
        expect(fileSystemUtils.copyRecursiveSync).toHaveBeenCalledWith(src, dest);

        fileSystemUtils.copyRecursiveSync.mockClear();
        fileSystemUtils.copyRecursiveSync = origCopyRecursiveSync;
    });

    test('dir to dir (destination does not exists)', () => {
        const src = 'dir1';
        const dest = 'dir2';

        fs.existsSync.mockImplementation((dir) => dir === src);
        fs.statSync.mockImplementation(() => ({ isDirectory: () => true }));

        const origCopyRecursiveSync = fileSystemUtils.copyRecursiveSync;
        fileSystemUtils.copyRecursiveSync = jest.fn().mockImplementation(() => {});

        fileSystemUtils.recreateLink(src, dest);

        expect(fs.rmdirSync).toHaveBeenCalledTimes(0);

        expect(fileSystemUtils.copyRecursiveSync).toHaveBeenCalledTimes(1);
        expect(fileSystemUtils.copyRecursiveSync).toHaveBeenCalledWith(src, dest);

        fileSystemUtils.copyRecursiveSync.mockClear();
        fileSystemUtils.copyRecursiveSync = origCopyRecursiveSync;
    });
});

describe('copyRecursiveSync', () => {
    let fileSystemItems;
    const fileSystemItemsSrc = [
        { path: 'dir1', isDir: true },
        { path: path.join('dir1', 'file1'), isDir: false },
        { path: path.join('dir1', 'file2'), isDir: false },
        { path: path.join('dir1', 'dir2'), isDir: true },
        { path: path.join('dir1', 'dir2', 'file1'), isDir: false },
        { path: path.join('dir1', 'dir2', 'file2'), isDir: false },
        { path: path.join('dir1', 'dir2', 'dir3'), isDir: true },
        { path: path.join('dir1', 'dir2', 'dir3', 'file1'), isDir: false },
    ];

    const fileSystemItemsDest = [
        { path: 'dir2', isDir: true },
        { path: path.join('dir2', 'file1'), isDir: false },
        { path: path.join('dir2', 'file2'), isDir: false },
        { path: path.join('dir2', 'dir2'), isDir: true },
        { path: path.join('dir2', 'dir2', 'file1'), isDir: false },
        { path: path.join('dir2', 'dir2', 'file2'), isDir: false },
        { path: path.join('dir2', 'dir2', 'dir3'), isDir: true },
        { path: path.join('dir2', 'dir2', 'dir3', 'file1'), isDir: false },
    ];

    beforeEach(() => {
        fileSystemItems = [];
        fs.existsSync.mockClear();
        fs.readdirSync.mockClear();
        fs.statSync.mockClear();
        fs.copyFileSync.mockClear();
        fs.mkdirSync.mockClear();
        fs.unlinkSync.mockClear();

        fs.existsSync.mockImplementation((file) => fileSystemItems.some(item => item.path === file));
        fs.readdirSync.mockImplementation((dir) => {
            const dirIndex = fileSystemItems.findIndex(item => item.isDir && item.path === dir);
            const items = fileSystemItems
                .slice(dirIndex + 1)
                .filter(item => item.path.split(path.sep).length === dir.split(path.sep).length + 1);
            return items.map(item => path.basename(item.path));
        });
        fs.statSync.mockImplementation((dir) => ({
            isDirectory: () => fileSystemItems.find(item => item.path === dir).isDir
        }));
    });
    test('copy directories, destination does not exists', () => {
        fileSystemItems = fileSystemItemsSrc;
        const src = 'dir1';
        const dest = 'dir2';

        fileSystemUtils.copyRecursiveSync(src, dest);

        expect(fs.unlinkSync).toHaveBeenCalledTimes(0);

        expect(fs.mkdirSync).toHaveBeenCalledTimes(5);
        expect(fs.mkdirSync.mock.calls).toEqual([
            ['dir2'],
            [path.join('dir2', 'dir2')],
            [path.join('dir2', 'dir2')],
            [path.join('dir2', 'dir2', 'dir3')],
            [path.join('dir2', 'dir2', 'dir3')]
        ]);

        expect(fs.copyFileSync).toHaveBeenCalledTimes(5);
        expect(fs.copyFileSync.mock.calls).toEqual([
            [path.join('dir1', 'file1'), path.join('dir2', 'file1')],
            [path.join('dir1', 'file2'), path.join('dir2', 'file2')],
            [path.join('dir1', 'dir2', 'file1'), path.join('dir2', 'dir2', 'file1')],
            [path.join('dir1', 'dir2', 'file2'), path.join('dir2', 'dir2', 'file2')],
            [path.join('dir1', 'dir2', 'dir3', 'file1'), path.join('dir2', 'dir2', 'dir3', 'file1')]
        ]);
    });

    test('copy directories, destination exists', () => {
        fileSystemItems = fileSystemItemsSrc.concat(fileSystemItemsDest);
        const src = 'dir1';
        const dest = 'dir2';

        fileSystemUtils.copyRecursiveSync(src, dest);

        expect(fs.unlinkSync).toHaveBeenCalledTimes(20);
        expect(fs.unlinkSync.mock.calls).toEqual([
            [path.join('dir2', 'file1')],
            [path.join('dir2', 'file2')],
            [path.join('dir2', 'dir2', 'file1')],
            [path.join('dir2', 'dir2', 'file2')],
            [path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir2', 'dir2', 'file1')],
            [path.join('dir2', 'dir2', 'file2')],
            [path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir2', 'file1')],
            [path.join('dir2', 'file2')],
            [path.join('dir2', 'dir2', 'file1')],
            [path.join('dir2', 'dir2', 'file2')],
            [path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir2', 'dir2', 'file1')],
            [path.join('dir2', 'dir2', 'file2')],
            [path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir2', 'dir2', 'dir3', 'file1')]
        ]);

        expect(fs.mkdirSync).toHaveBeenCalledTimes(6);

        expect(fs.mkdirSync.mock.calls).toEqual([
            [path.join('dir2', 'dir2')],
            [path.join('dir2', 'dir2', 'dir3')],
            [path.join('dir2', 'dir2', 'dir3')],
            [path.join('dir2', 'dir2')],
            [path.join('dir2', 'dir2', 'dir3')],
            [path.join('dir2', 'dir2', 'dir3')]
        ]);

        expect(fs.copyFileSync).toHaveBeenCalledTimes(20);
        expect(fs.copyFileSync.mock.calls).toEqual([
            [path.join('dir1', 'file1'), path.join('dir2', 'file1')],
            [path.join('dir1', 'file2'), path.join('dir2', 'file2')],
            [path.join('dir1', 'dir2', 'file1'), path.join('dir2', 'dir2', 'file1')],
            [path.join('dir1', 'dir2', 'file2'), path.join('dir2', 'dir2', 'file2')],
            [path.join('dir1', 'dir2', 'dir3', 'file1'), path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir1', 'dir2', 'dir3', 'file1'), path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir1', 'dir2', 'file1'), path.join('dir2', 'dir2', 'file1')],
            [path.join('dir1', 'dir2', 'file2'), path.join('dir2', 'dir2', 'file2')],
            [path.join('dir1', 'dir2', 'dir3', 'file1'), path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir1', 'dir2', 'dir3', 'file1'), path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir1', 'file1'), path.join('dir2', 'file1')],
            [path.join('dir1', 'file2'), path.join('dir2', 'file2')],
            [path.join('dir1', 'dir2', 'file1'), path.join('dir2', 'dir2', 'file1')],
            [path.join('dir1', 'dir2', 'file2'), path.join('dir2', 'dir2', 'file2')],
            [path.join('dir1', 'dir2', 'dir3', 'file1'), path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir1', 'dir2', 'dir3', 'file1'), path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir1', 'dir2', 'file1'), path.join('dir2', 'dir2', 'file1')],
            [path.join('dir1', 'dir2', 'file2'), path.join('dir2', 'dir2', 'file2')],
            [path.join('dir1', 'dir2', 'dir3', 'file1'), path.join('dir2', 'dir2', 'dir3', 'file1')],
            [path.join('dir1', 'dir2', 'dir3', 'file1'), path.join('dir2', 'dir2', 'dir3', 'file1')]
        ]);
    });

    test('copy files, destination does not exits', () => {
        fileSystemItems = fileSystemItemsSrc;
        const src = path.join('dir1', 'file1');
        const dest = path.join('dir2', 'file1');

        fileSystemUtils.copyRecursiveSync(src, dest);

        expect(fs.unlinkSync).toHaveBeenCalledTimes(0);
        expect(fs.copyFileSync).toHaveBeenCalledTimes(1);
        expect(fs.copyFileSync.mock.calls).toEqual([
            [path.join('dir1', 'file1'), path.join('dir2', 'file1')],
        ]);
    });

    test('copy files, destination exits', () => {
        fileSystemItems = fileSystemItemsSrc.concat(fileSystemItemsDest);
        const src = path.join('dir1', 'file1');
        const dest = path.join('dir2', 'file1');

        fileSystemUtils.copyRecursiveSync(src, dest);

        expect(fs.unlinkSync).toHaveBeenCalledTimes(1);
        expect(fs.unlinkSync.mock.calls).toEqual([
            [path.join('dir2', 'file1')],
        ]);

        expect(fs.copyFileSync).toHaveBeenCalledTimes(1);
        expect(fs.copyFileSync.mock.calls).toEqual([
            [path.join('dir1', 'file1'), path.join('dir2', 'file1')],
        ]);
    });
});

describe('Hi-level copy functions', () => {
    const approaches = ['Angular', 'Vue'];
    const demoPath = 'demoPath';
    const existingDemoPath = 'existingDemoPath';
    const origCopyRecursiveSync = fileSystemUtils.copyRecursiveSync;
    const origGetDemoPathByMeta = fileSystemUtils.getDemoPathByMeta;


    beforeEach(() => {
        fileSystemUtils.copyRecursiveSync = jest.fn().mockImplementation(() => {});
        fileSystemUtils.getDemoPathByMeta = jest.fn().mockImplementation(() => existingDemoPath);
    });

    afterEach(() => {
        fileSystemUtils.copyRecursiveSync.mockClear();
        fileSystemUtils.copyRecursiveSync = origCopyRecursiveSync;

        fileSystemUtils.getDemoPathByMeta.mockClear();
        fileSystemUtils.getDemoPathByMeta = origGetDemoPathByMeta;

        fs.existsSync.mockClear();
        fs.mkdirSync.mockClear();
        fs.writeFileSync.mockClear();
    });

    test('copyFilesFromBlankDemos', () => {
        fs.writeFileSync.mockImplementation((f1, f2, callback) => callback());
        fileSystemUtils.copyFilesFromBlankDemos(approaches, demoPath);

        const demosPathPrefix = path.join('utils', 'templates');
        const expectedCopyRecursiveSyncCalls = approaches.map(approach => [
            path.join(demosPathPrefix, approach),
            path.join(demoPath, approach)
        ]);

        expect(fileSystemUtils.copyRecursiveSync.mock.calls).toEqual(expectedCopyRecursiveSyncCalls);
        expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
        expect(fs.writeFileSync.mock.calls[0][0]).toBe(path.join(demoPath, 'description.md'));
        expect(fs.writeFileSync.mock.calls[0][1]).toBe('');
    });

    test('copyFilesFromBlankDemos (unable to copy description)', () => {
        const errorMessage = 'unable to copy description';
        fs.writeFileSync.mockImplementation((f1, f2, callback) => callback(errorMessage));
        expect(() => fileSystemUtils.copyFilesFromBlankDemos(approaches, demoPath))
            .toThrow(errorMessage);
    });

    test('copyFilesFromExistingDemos (destination exists)', () => {
        fs.existsSync.mockImplementation(() => true);
        fileSystemUtils.copyFilesFromExistingDemos(approaches, demoPath, {}, {}, '');

        const expectedCopyRecursiveSyncCalls = approaches.map(approach => [
            path.join(existingDemoPath, approach),
            path.join(demoPath, approach)
        ]);

        expect(fileSystemUtils.copyRecursiveSync.mock.calls).toEqual(expectedCopyRecursiveSyncCalls);
        expect(fs.mkdirSync).toHaveBeenCalledTimes(0);
    });

    test('copyFilesFromExistingDemos (destination does not exists)', () => {
        fs.existsSync.mockImplementation(() => false);
        fileSystemUtils.copyFilesFromExistingDemos(approaches, demoPath, {}, {}, '');

        const expectedCopyRecursiveSyncCalls = approaches.map(approach => [
            path.join(existingDemoPath, approach),
            path.join(demoPath, approach)
        ]);

        expect(fileSystemUtils.copyRecursiveSync.mock.calls).toEqual(expectedCopyRecursiveSyncCalls);

        expect(fs.mkdirSync).toHaveBeenCalledTimes(approaches.length);
        approaches.forEach((approach, index) => {
            expect(fs.mkdirSync.mock.calls[index][0]).toBe(path.join(demoPath, approach));
        });
    });

    test('copyDemos (new demo)', () => {
        const origCopyFilesFromBlankDemos = fileSystemUtils.copyFilesFromBlankDemos;
        fileSystemUtils.copyFilesFromBlankDemos = jest.fn().mockImplementation(() => {});

        fileSystemUtils.copyDemos(demoPath, approaches, { choice: 'new' }, {}, '');

        expect(fileSystemUtils.copyFilesFromBlankDemos).toHaveBeenCalledTimes(1);
        expect(fileSystemUtils.copyFilesFromBlankDemos.mock.calls[0])
            .toEqual([approaches, demoPath]);

        fileSystemUtils.copyFilesFromBlankDemos = origCopyFilesFromBlankDemos;
    });

    test('copyDemos (existing demo)', () => {
        const origCopyFilesFromExistingDemos = fileSystemUtils.copyFilesFromExistingDemos;
        fileSystemUtils.copyFilesFromExistingDemos = jest.fn().mockImplementation(() => {});

        fileSystemUtils.copyDemos(demoPath, approaches, { choice: 'existing' }, {}, '');

        expect(fileSystemUtils.copyFilesFromExistingDemos).toHaveBeenCalledTimes(1);
        expect(fileSystemUtils.copyFilesFromExistingDemos.mock.calls[0])
            .toEqual([approaches, demoPath, { choice: 'existing' }, {}, '']);

        fileSystemUtils.copyFilesFromExistingDemos = origCopyFilesFromExistingDemos;
    });
});
