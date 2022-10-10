import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('Scheduler.Templates')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('Scheduler', 'Overview', 'React', (test) => {
  test('Overview cell selection (T1041269)', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.click('.dx-scheduler-date-table-cell');
    await t.scroll(0, 0);

    await takeScreenshot('scheduler_overview_selection.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
