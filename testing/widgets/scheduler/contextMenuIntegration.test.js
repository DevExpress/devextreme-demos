import { Selector } from 'testcafe';
import { createScreenshotsComparer } from '../../../utils/visual-tests/screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('Scheduler.ContextMenuIntegration')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest(test, 'Scheduler', 'ContextMenuIntegration', 'jQuery', (test) => {
  test('ContextMenuIntegration', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await takeScreenshot('scheduler_contextMenu_init');

    await t
      .rightClick('.dx-scheduler-appointment');
    await takeScreenshot('scheduler_contextMenu_click');

    await t
      .rightClick(Selector('.dx-scheduler-date-table-cell').nth(6));
    await takeScreenshot('scheduler_contextMenu_cell_click');

    await t
      .rightClick(Selector('.dx-scheduler-header-panel-cell').nth(2));
    await takeScreenshot('scheduler_contextMenu_header_click');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
