import { Selector as $ } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('Form.Validation')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 1200);
  });

runManualTest('Form', 'Validation', ['jQuery', 'Vue', 'Angular'], (test) => {
  test('Validation', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await takeScreenshot('form_validation_summary.png');

    await t.click('.dx-button-default');
    await takeScreenshot('form_validation_before_reset.png');

    await t.click('.dx-checkbox');
    await t.click($('.dx-field-button-item').nth(0));
    await takeScreenshot('form_validation_after_reset.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
