import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { ClientFunction } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

const resetScroll = ClientFunction(() => window.scrollTo(0, 0));

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
    await resetScroll();

    await takeScreenshot('scheduler_overview_selection.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});

runManualTest('Scheduler', 'CellTemplates', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('CellTemplates', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await takeScreenshot('scheduler_cell_templates_work_week.png');

    await t.click('[aria-label="Month"]');
    await takeScreenshot('scheduler_cell_templates_month.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
