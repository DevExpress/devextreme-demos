import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.AddNewRowPosition')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest(test, 'DataGrid', 'AddNewRowPosition', 'jQuery', (test) => {
  test('addNewRowPosition', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
    const newRowPositionOptions = ['first', 'last', 'pageBottom', 'pageTop', 'viewportBottom', 'viewportTop'];

    const setNewRowPosition = async (newRowPosition) => {
      const index = newRowPositionOptions.indexOf(newRowPosition);
      await t.click('#newRowPositionSelectBox');
      await t.click(Selector('.dx-dropdownlist-popup-wrapper .dx-list-item').nth(index));
    };

    for (let i = newRowPositionOptions.length - 1; i >= 0; i -= 1) {
      const newRowPosition = newRowPositionOptions[i];

      await setNewRowPosition(newRowPosition);
      await t.click('.dx-datagrid-addrow-button');

      await takeScreenshot(`datagrid_addNewRowPosition_${newRowPosition}_added.png`);
    }

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});

runManualTest(test, 'DataGrid', 'AddNewRowPosition', 'jQuery', (test) => {
  test('insertAfterKey', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t
      .click('.dx-command-edit .dx-link.dx-icon-add');

    await takeScreenshot('datagrid_addNewRowPosition_insertAfterKey_clicked.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
