import { Selector as $ } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('Toolbar.Multiline')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('Toolbar', 'Multiline', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('Multiline', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.drag($('.dx-resizable-handle-right'), 0, -400);
    await takeScreenshot('toolbar_multiline_mode_minimize.png');

    await t.click($('.options-container .dx-radiobutton').nth(1));
    await takeScreenshot('toolbar_singleline_mode_init.png');

    await t.click($('.dx-toolbar .dx-dropdownmenu-button'));
    await takeScreenshot('toolbar_singleline_mode_menu_open.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
