import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { ClientFunction } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

// eslint-disable-next-line no-undef
const disableAnimation = ClientFunction(() => { DevExpress.fx.off = true; });

fixture('Scheduler.Templates')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('Scheduler', 'Resources', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await disableAnimation();
    await t.doubleClick('.dx-scheduler-appointment');

    await takeScreenshot('scheduler_resources_appointment_popup.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
