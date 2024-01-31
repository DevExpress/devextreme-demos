import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.RecordPaging')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('DataGrid', 'RecordPaging', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('RecordPaging', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.click($('.dx-page-size').withText('5'));
    await takeScreenshot(`datagrid_record_paging_2_desktop(${t.ctx.theme}).png`);

    await t.click($('.dx-page').nth(-1));
    await takeScreenshot(`datagrid_record_paging_3_desktop(${t.ctx.theme}).png`);

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
