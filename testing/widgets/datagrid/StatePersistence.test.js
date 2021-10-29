import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.StatePersistence')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest(test, 'DataGrid', 'StatePersistence', 'jQuery', (test) => {
  test.only('StatePersistence', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t
      .drag($('.dx-header-row .dx-datagrid-action:eq(0)'), 100, -50, {
        offsetX: 5,
        offsetY: 5,
      })
      .drag($('.dx-scrollbar-vertical .dx-scrollable-scroll'), 0, 250);

    await takeScreenshot('datagrid_state_persistence_2_desktop', 3000);

    await t
      .navigateTo('/')
      .navigateTo('/JSDemos/Demos/DataGrid/StatePersistence/jQuery/');

    await takeScreenshot('datagrid_state_persistence_3_desktop', 3000);

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
