import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('Scheduler.Templates')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

['jQuery', 'React', 'Vue', 'Angular'].forEach((framework) => {
  runManualTest(test, 'Scheduler', 'Overview', framework, (test) => {
    test(`Overview cell selection (T1041269) in ${framework}`, async (t) => {
      const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

      await t.click('.dx-scheduler-date-table-cell');

      await takeScreenshot('scheduler_overview_selection.png');

      await t
        .expect(compareResults.isValid())
        .ok(compareResults.errorMessages());
    });
  });

  runManualTest(test, 'Scheduler', 'CellTemplates', framework, (test) => {
    test(`CellTemplates cell selection (T1041269) in ${framework}`, async (t) => {
      const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

      await t.click('.dx-scheduler-date-table-cell');

      await takeScreenshot('scheduler_CellTemplates_selection.png');

      await t
        .expect(compareResults.isValid())
        .ok(compareResults.errorMessages());
    });
  });
});
