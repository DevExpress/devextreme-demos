import { Selector } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DropDownButton.Overview')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t.resizeWindow(900, 800);
  });

runManualTest('DropDownButton', 'Overview', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('Custom Overview Appearance', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await takeScreenshot('dropdown_button_overview_custom_appearance.png');

    const oneSectionButton = Selector('#one-section');
    await t.click(oneSectionButton);

    await takeScreenshot('dropdown_button_overview_button_action_appearance.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
