import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('Charts.ZoomingAndScrollingAPI')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('Charts', 'ZoomingAndScrollingAPI', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('ZoomingAndScrollingAPI. RangeSelector drag', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.drag($('.slider-marker').nth(1), 500, 0);
    await t.wait(1000);
    await takeScreenshot('range_selector_skider_drag.png');

    await t.click($('.area-tracker'), { offsetX: 400 });
    await t.wait(1000);
    await takeScreenshot('range_selector_click_to_empty_place.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
