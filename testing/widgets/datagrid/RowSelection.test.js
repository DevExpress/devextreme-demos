import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.RowSelection')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest(test, 'DataGrid', 'RowSelection', 'jQuery', (test) => {
  test.only('RowSelection', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.click($('.dx-datagrid-rowsview tr:eq(0)'));
    await takeScreenshot('datagrid_row_selection_2_desktop');

    await t.click($('.dx-datagrid-rowsview tr:eq(2)'));
    await takeScreenshot('datagrid_row_selection_3_desktop');

    await t
      .click($('.dx-datagrid-rowsview tr:eq(0)'), {
        modifiers: {
          ctrl: true,
        },
      });
    await takeScreenshot('datagrid_row_selection_4_desktop');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
