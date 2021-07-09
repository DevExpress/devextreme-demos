import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { shouldRunTest } from '../../helpers/matrix-test-helper';

fixture('DataGrid.Columns')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

if (shouldRunTest('jquery', 0)) {
  test('ColumnCustomization', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t
      .navigateTo('/JSDemos/Demos/DataGrid/ColumnCustomization/jQuery/');

    await takeScreenshot('datagrid_column_customization_1.png');

    await t
      .click('.dx-icon-column-chooser');

    await takeScreenshot('datagrid_column_customization_2.png');

    await t
      .drag("td[aria-label='Column Birth Date']",
        500, 200,
        { offsetX: 5, offsetY: 5 });

    await takeScreenshot('datagrid_column_customization_3.png');

    await t
      .click('.dx-closebutton');

    await takeScreenshot('datagrid_column_customization_4.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
}
