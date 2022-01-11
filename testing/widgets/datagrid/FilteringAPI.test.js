import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.FilteringAPI')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

<<<<<<< HEAD
runManualTest('DataGrid', 'FilteringAPI', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
=======
runManualTest('DataGrid', 'FilteringAPI', 'jQuery', (test) => {
>>>>>>> 22_1
  test('FilteringAPI', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t
      .click($('.dx-selectbox-container'))
      .click($('.dx-list-item').nth(1));

    await takeScreenshot('datagrid_filtering_API_2_desktop.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
