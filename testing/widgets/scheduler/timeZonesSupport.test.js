import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { ClientFunction } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('Scheduler.TimeZonesSupport')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('Scheduler', 'TimeZonesSupport', 'jQuery', (test) => {
  test('Temp', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.doubleClick('.dx-scheduler-appointment', { speed: 0.1 });

    await takeScreenshot('scheduler_temp.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  }).before(async () => {
    await ClientFunction(() => {
      window.DevExpress.fx.off = true;
    })();
  }).after(async () => {
    await ClientFunction(() => {
      window.DevExpress.fx.off = false;
    })();
  });
});
