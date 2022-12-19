import { Selector as $ } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

const IMAGE_ID = 'house-image1';

fixture('Common.DialogsAndNotificationsOverview')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('Common', 'DialogsAndNotificationsOverview', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('DialogsAndNotificationsOverview', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.click($(`#${IMAGE_ID}`));
    await takeScreenshot('common_dialogs_and_notifications_overview_popup.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
