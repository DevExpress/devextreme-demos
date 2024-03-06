import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('ContextMenu.Share')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t.resizeWindow(900, 600);
  });

runManualTest('DropDownBox', 'Share', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('Share', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.switchToIframe('#frame');

    await t.debug();

    await t.rightClick($('.dx-menu-item-text').withText('Share'));

    await takeScreenshot('context_menu_templates_share_visible.png');

    await t.expect(compareResults.isValid()).ok(compareResults.errorMessages());
  });
});
