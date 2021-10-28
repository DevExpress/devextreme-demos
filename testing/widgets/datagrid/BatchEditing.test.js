import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.BatchEditing')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest(test, 'DataGrid', 'BatchEditing', 'jQuery', (test) => {
  test('ColumnCustomization', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t
      .click('.dx-datagrid-rowsview td:eq(1)');

    await takeScreenshot('datagrid_batch_editing_2_desktop');

    await t
      .typeText('.dx-datagrid-rowsview input:eq(0)', 'Bob', {
        replace: true,
      })
      .pressKey('enter');

    await takeScreenshot('datagrid_batch_editing_3_desktop');

    await t
      .click('.dx-icon-edit-button-save');

    await takeScreenshot('datagrid_batch_editing_4_desktop');

    await t
      .click('.dx-datagrid-rowsview td:eq(4)')
      .click('.dx-dropdowneditor-icon:eq(0)')
      .click('.dx-list-item:eq(0)')
      .click('body', {
        offsetX: 0,
        offsetY: 0,
      });

    await takeScreenshot('datagrid_batch_editing_5_desktop');

    await t
      .click('.dx-icon-edit-button-cancel');

    await takeScreenshot('datagrid_batch_editing_6_desktop');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
