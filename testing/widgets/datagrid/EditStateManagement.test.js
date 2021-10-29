import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.EditStateManagement')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest(test, 'DataGrid', 'EditStateManagement', 'jQuery', (test) => {
  test.only('EditStateManagement - update row', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    // edit row
    await t.click($('a').withText('Edit').nth(0));
    await takeScreenshot('datagrid_edit_state_management_update_row_1_desktop');

    await t
      .typeText($('.dx-datagrid-rowsview').find('.dx-texteditor-input').nth(1), 'Russia', {
        replace: true,
      })
      .pressKey('tab');
    await takeScreenshot('datagrid_edit_state_management_update_row_2_desktop');

    // cancel change
    await t
      .click($('a').withText('Cancel').nth(0));
    await takeScreenshot('datagrid_edit_state_management_update_row_3_desktop');

    // edit row
    await t
      .click($('a').withText('Edit').nth(0))
      .typeText($('.dx-datagrid-rowsview').find('.dx-texteditor-input').nth(1), 'Russia', {
        replace: true,
      })
      .pressKey('tab');
    await takeScreenshot('datagrid_edit_state_management_update_row_4_desktop');

    await t.click($('a').withText('Save').nth(0));
    await takeScreenshot('datagrid_edit_state_management_update_row_5_desktop');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});

runManualTest(test, 'DataGrid', 'EditStateManagement', 'jQuery', (test) => {
  test.only('EditStateManagement - insert row', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t
      .click($('.dx-icon-edit-button-addrow'));

    await takeScreenshot('datagrid_edit_state_management_insert_row_1_desktop');

    await t
      .typeText($('.dx-datagrid-rowsview').find('.dx-texteditor-input').nth(4), '11/2/2020', {
        replace: true,
      })
      .pressKey('tab');

    await takeScreenshot('datagrid_edit_state_management_insert_row_2_desktop');

    // cancel change
    await t
      .click($('a').withText('Cancel').nth(0));

    await takeScreenshot('datagrid_edit_state_management_insert_row_3_desktop');

    // add and edit row
    await t
      .click($('.dx-icon-edit-button-addrow'))
      .typeText($('.dx-datagrid-rowsview').find('.dx-texteditor-input').nth(4), '11/2/2020', {
        replace: true,
      })
      .pressKey('tab');

    await takeScreenshot('datagrid_edit_state_management_insert_row_4_desktop');

    await t
      .click($('a').withText('Save').nth(0));

    await takeScreenshot('datagrid_edit_state_management_insert_row_5_desktop');

    // go to the last page to check the inserted row
    await t
      .click($('.dx-datagrid-pager').find('.dx-page:last'))
      .drag($('.dx-scrollbar-vertical').find('.dx-scrollable-scroll'), 0, 100);

    await takeScreenshot('datagrid_edit_state_management_insert_row_6_desktop');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});

runManualTest(test, 'DataGrid', 'EditStateManagement', 'jQuery', (test) => {
  test.only('EditStateManagement - remove row', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    // remove row
    const editLink = $('a', { timeout: 60000 }).withText('Delete').nth(0);
    await t.click(editLink);
    await takeScreenshot('datagrid_edit_state_management_remove_row_1_desktop');

    await t.click($('.dx-dialog-button').withText('Yes').nth(0));
    await takeScreenshot('datagrid_edit_state_management_remove_row_2_desktop');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
