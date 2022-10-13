import { Selector as $ } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

const RESIZABLE_HANDLE_RIGHT_CLASS = 'dx-resizable-handle-right';
const RADIO_BUTTON_CLASS = 'dx-radiobutton';
const OPTIONS_CONTAINER_CLASS = 'options-container';
const TOOLBAR_CLASS = 'dx-toolbar';
const DROP_DOWN_MENU_BUTTON_CLASS = 'dx-dropdownmenu-button';

fixture('Toolbar.Adaptability')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('Toolbar', 'Adaptability', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('Adaptability', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.drag($(`.${RESIZABLE_HANDLE_RIGHT_CLASS}`), -400, 0);
    await takeScreenshot('toolbar_multiline_mode_minimize.png');

    await t.click($(`.${OPTIONS_CONTAINER_CLASS} .${RADIO_BUTTON_CLASS}`).nth(1));
    await takeScreenshot('toolbar_singleline_mode_init.png');

    await t.click($(`.${TOOLBAR_CLASS} .${DROP_DOWN_MENU_BUTTON_CLASS}`));
    await takeScreenshot('toolbar_singleline_mode_menu_open.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
