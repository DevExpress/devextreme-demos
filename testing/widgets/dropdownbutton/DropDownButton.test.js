import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DropDownButton.Overview')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t.resizeWindow(900, 800);
  });

runManualTest('DropDownButton', 'Overview', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('Custom Overview Appearance', async (t) => {
    const DROP_DOWN_BUTTON = 'dx-dropdownbutton';
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await takeScreenshot('dropdown_button_overview_custom_appearance.png');

    await t
      .click($(`.${DROP_DOWN_BUTTON}`).nth(0))
      .wait(200);

    await takeScreenshot('dropdown_button_overview_button_action_appearance.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
