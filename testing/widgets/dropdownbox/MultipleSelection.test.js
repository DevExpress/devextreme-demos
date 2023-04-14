import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DropDownBox.MultipleSelection')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t.resizeWindow(900, 600);
  });

runManualTest('DropDownBox', 'MultipleSelection', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('MultipleSelection', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.click($('.dx-dropdownbox').nth(0))
      .wait(200);

    await takeScreenshot('dropdownbox_multiple_selection_treebox');

    await t.click($('.dx-dropdownbox').nth(0))
      .wait(200);

    await t.click($('.dx-dropdownbox').nth(1))
      .wait(200);

    await takeScreenshot('dropdownbox_multiple_selection_gridbox');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
