import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.MultipleRecordSelectionAPI')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest(test, 'DataGrid', 'MultipleRecordSelectionAPI', 'jQuery', (test) => {
  test.only('MultipleRecordSelectionAPI', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t
      .click($('.dx-selectbox-container:eq(0)'))
      .click($('.dx-list-item:eq(2)'))
      .click($('body'), {
        offsetX: 0,
        offsetY: 0,
      });

    await takeScreenshot('datagrid_multiple_record_selection_and_API_2_desktop');

    await t
      .click($('.dx-button-text:contains(Clear Selection)'));

    await takeScreenshot('datagrid_multiple_record_selection_and_API_3_desktop');

    await t
      .click($('.dx-checkbox-icon:eq(0)'));

    await takeScreenshot('datagrid_multiple_record_selection_and_API_4_desktop');

    await t
      .click($('.dx-checkbox-icon:eq(0)'));

    await takeScreenshot('datagrid_multiple_record_selection_and_API_5_desktop');

    await t
      .click($('.dx-datagrid-rowsview tr:eq(1)'));

    await takeScreenshot('datagrid_multiple_record_selection_and_API_6_desktop');

    await t
      .click($('.dx-datagrid-rowsview tr:eq(6)'), {
        modifiers: {
          shift: true,
        },
      });

    await takeScreenshot('datagrid_multiple_record_selection_and_API_7_desktop');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
