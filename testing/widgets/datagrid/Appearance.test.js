import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.Appearance')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest(test, 'DataGrid', 'Appearance', 'jQuery', (test) => {
  test('ColumnCustomization', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t
      .click('.dx-checkbox-icon:eq(0)');

    await takeScreenshot('datagrid_appearance_2_desktop', 3000);

    await t
      .click('.dx-checkbox-icon:eq(1)');

    await takeScreenshot('datagrid_appearance_3_desktop', 3000);

    await t
      .click('.dx-checkbox-icon:eq(3)');

    await takeScreenshot('datagrid_appearance_4_desktop', 3000);

    await t
      .click('.dx-checkbox-icon:eq(0)');

    await takeScreenshot('datagrid_appearance_5_desktop', 3000);

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
