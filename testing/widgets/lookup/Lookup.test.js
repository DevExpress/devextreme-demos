import { Selector } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('Lookup.Basics')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t.resizeWindow(900, 800);
  });

runManualTest('Lookup', 'Basics', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('Custom Lookup Appearance', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    const customField = Selector('.dx-lookup-field').withAttribute('aria-label', 'Custom Field Template');
    await t.click(customField);

    const customItem = Selector('.dx-lookup-field').withAttribute('aria-label', 'Custom Item Template');
    await t.click(customItem);

    await takeScreenshot('lookup_templates_custom_appearance.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
