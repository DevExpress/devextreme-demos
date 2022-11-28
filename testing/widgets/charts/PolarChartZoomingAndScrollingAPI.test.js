import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('Charts.PolarChartZoomingAndScrollingAPI')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('Charts', 'PolarChartZoomingAndScrollingAPI', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('PolarChartZoomingAndScrollingAPI. RangeSelector drag', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.drag($('.slider').nth(0), 500, 0, { offsetX: 10, offsetY: 10 });
    await t.wait(1000);
    await takeScreenshot('zoom_polar_chart.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
