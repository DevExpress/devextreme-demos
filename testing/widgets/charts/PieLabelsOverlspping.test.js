import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('PieWithResolvedLabelOverlapping')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('Charts', 'PieWithResolvedLabelOverlapping', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('PieWithResolvedLabelOverlapping', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
    const selectBoxItems = $('.dx-dropdowneditor-overlay .dx-list-item-content');


    await t.click(selectBoxItems.nth(1));
    await takeScreenshot('pie_resolve_labels_overlapping_hide.png');

    await t.click(selectBoxItems.nth(2));
    await takeScreenshot('pie_resolve_labels_overlapping_none.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
