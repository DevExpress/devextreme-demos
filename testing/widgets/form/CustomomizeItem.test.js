import { Selector as $ } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('Form.CustomizeItem')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('Form', 'CustomizeItem', ['jQuery', 'Vue', 'Angular'], (test) => {
  test('CustomizeItem', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.hover($('#helpedInfo'));
    await takeScreenshot('form_customize_item_label_tooltip.png', '.dx-form');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
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
