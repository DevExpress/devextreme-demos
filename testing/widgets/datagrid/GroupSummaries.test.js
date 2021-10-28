import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.GroupSummaries')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest(test, 'DataGrid', 'GroupSummaries', 'jQuery', (test) => {
  test('ColumnCustomization', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t
      .click('.dx-page:last()')
      .click('body', {
        offsetX: 0,
        offsetY: 0,
      });

    await takeScreenshot('datagrid_group_summaries_2_desktop', 3000);

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
