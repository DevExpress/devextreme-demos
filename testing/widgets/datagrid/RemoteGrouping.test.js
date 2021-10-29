import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.RemoteGrouping')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest(test, 'DataGrid', 'RemoteGrouping', 'jQuery', (test) => {
  test.only('RemoteGrouping', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await scroll(5000);

    await takeScreenshot('datagrid_remote_grouping_2_desktop');

    await t
      .click($(".dx-group-row td:contains('Madrid Store')").prevSibling());

    await takeScreenshot('datagrid_remote_grouping_3_desktop');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
