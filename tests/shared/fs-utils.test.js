const fs = require('fs');
const fileSystemUtils = require('../../utils/shared/fs-utils');

jest.mock('fs');

describe('check fs utils', () => {
    beforeAll(() => {
        // clear any previous calls
        fs.writeFileSync.mockClear();
    });

    test('saveMetaDataFile ', () => {
        const testJson = {
            test: 'test'
        };
        
        fileSystemUtils.saveMetaDataFile('./test.json', testJson);

        expect(fs.writeFileSync).toHaveBeenCalledWith(
            './test.json',
            JSON.stringify(testJson, null, 2) 
        );
    });
});