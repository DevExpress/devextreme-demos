import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('Form.Validation')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('Form', 'Validation', ['jQuery', 'Vue', 'Angular'], (test) => {
  test('Validation', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.click('.dx-button-submit-input');
    await takeScreenshot('form_validation_summary.png', '.dx-form');

    await t.click('.dx-checkbox');
    await takeScreenshot('form_validation_before_reset.png', '.dx-form');

    await t.click('.dx-checkbox');
    await takeScreenshot('form_validation_after_reset.png', '.dx-form');

    await t.click('.dx-icon-refresh');
    await takeScreenshot('form_validation_after_reset.png', '.dx-form');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
