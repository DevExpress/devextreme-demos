import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $, ClientFunction } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.VirtualScrolling')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

const roundScrollPosition = ClientFunction((divider) => {
  const currentScrollPosition = document.querySelector('.dx-scrollable-container').scrollTop;
  const newScrollPosition = Math.round(currentScrollPosition / divider) * divider;
  document.querySelector('.dx-scrollable-container').scrollTop = newScrollPosition;
});

runManualTest(test, 'DataGrid', 'VirtualScrolling', 'jQuery', (test) => {
  test.only('VirtualScrolling', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.hover($('.dx-scrollbar-vertical .dx-scrollable-scroll'));
    await takeScreenshot('datagrid_virtual_scrolling_2_desktop');

    await t
      .drag($('.dx-scrollbar-vertical .dx-scrollable-scroll'), 0, 250)
      .wait(1000);

    await roundScrollPosition(50);
    await takeScreenshot('datagrid_virtual_scrolling_3_desktop');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
