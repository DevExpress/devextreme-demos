import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.Filtering')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest(test, 'DataGrid', 'Filtering', 'jQuery', (test) => {
  test.only('Filtering', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t
      .hover($('.dx-datagrid-filter-row .dx-menu-horizontal:eq(3) .dx-menu-item:eq(0)'))
      .expect($('.dx-overlay-wrapper .dx-menu-item').count).eql(8);

    await takeScreenshot('datagrid_filtering_by_range_1_desktop');

    await t
      .click($('.dx-overlay-wrapper .dx-menu-item:eq(6)'));

    await takeScreenshot('datagrid_filtering_by_range_2_desktop');

    await t
      .typeText($('.dx-overlay-wrapper .dx-texteditor-input:eq(0)'), '1000')
      .typeText($('.dx-overlay-wrapper .dx-texteditor-input:eq(1)'), '5000');

    await takeScreenshot('datagrid_filtering_by_range_3_desktop');

    await t
      .click($('body'), { offsetX: 0, offsetY: 0 });

    await takeScreenshot('datagrid_filtering_by_range_4_desktop');

    await t
      .hover($('.dx-datagrid-filter-row .dx-menu-horizontal:eq(3) .dx-menu-item:eq(0)'))
      .click($('.dx-overlay-wrapper .dx-menu-item:eq(7)'))
      .expect($('.dx-overlay-wrapper').exists).notOk();

    await t
      .typeText($('.dx-datagrid-filter-row td:eq(4) input:eq(0)'), 'Harv Mudd');

    await takeScreenshot('datagrid_filtering_2_desktop');

    await t
      .hover($('.dx-datagrid-filter-row .dx-menu-horizontal:eq(4) .dx-menu-item:eq(0)'))
      .expect($('.dx-overlay-wrapper .dx-menu-item').count).eql(7);

    await takeScreenshot('datagrid_filtering_3_desktop');

    await t
      .hover($('.dx-overlay-wrapper .dx-menu-item:eq(1)'))
      .click($('.dx-overlay-wrapper .dx-menu-item:eq(1)'))
      .expect($('.dx-overlay-wrapper .dx-menu-item').exists).notOk();

    await takeScreenshot('datagrid_filtering_4_desktop');

    // Selected operation does not contain twice(T195965)
    /* await t
        .hover($(".dx-datagrid-filter-row .dx-menu-horizontal:eq(4) .dx-menu-item:eq(0)"))
        .expect($(".dx-overlay-wrapper .dx-menu-item").count).eql(7);

    await t
        .hover($(".dx-overlay-wrapper .dx-menu-item:eq(1)"))
        .click($(".dx-overlay-wrapper .dx-menu-item:eq(1)"))
        .expect($(".dx-overlay-wrapper").exists).notOk(); */

    await t
      .hover($('.dx-datagrid-filter-row .dx-menu-horizontal:eq(4) .dx-menu-item:eq(0)'))
      .expect($('.dx-overlay-wrapper .dx-menu-item').count).eql(7);

    await takeScreenshot('datagrid_filtering_5_desktop');

    await t
      .click($('.dx-overlay-wrapper .dx-menu-item:eq(6)'));

    await takeScreenshot('datagrid_filtering_6_desktop');

    await t
      .typeText($('.dx-datagrid-search-panel:eq(0)'), 'Harv Mudd');

    await takeScreenshot('datagrid_filtering_7_desktop');

    await t
      .click($('.dx-datagrid-search-panel .dx-icon-clear'))
      .click($('.dx-selectbox-container'))
      .click($('.dx-list-item:eq(1)'))
      .typeText($('.dx-datagrid-filter-row td:eq(4) input:eq(0)'), 'Harv Mudd');

    await takeScreenshot('datagrid_filtering_7_1_desktop');

    await t
      .click($('.dx-apply-button'));

    await takeScreenshot('datagrid_filtering_8_desktop');

    // -------------Focus on filter row widgets-------------
    await t
      .click($('#gridContainer .dx-texteditor-input:eq(1)'))
      .pressKey('tab');

    await takeScreenshot('datagrid_focus_on_filter_1_desktop');

    await t
      .pressKey('tab');

    await takeScreenshot('datagrid_focus_on_filter_2_desktop');

    await t
      .hover($('.dx-datagrid-filter-row .dx-menu-horizontal:eq(4) .dx-menu-item:eq(0)'))
      .click($('.dx-overlay-wrapper .dx-menu-item:eq(3)'))
      .click($('#gridContainer .dx-texteditor-input:eq(1)'))
      .pressKey('tab');

    await takeScreenshot('datagrid_focus_on_filter_3_desktop');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
