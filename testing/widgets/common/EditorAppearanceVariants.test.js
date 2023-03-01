import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import asyncForEach from '../../../utils/visual-tests/helpers/async-for-each-helper';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('Common.EditorAppearanceVariants')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t.resizeWindow(900, 600);
  });

runManualTest('Common', 'EditorAppearanceVariants', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('EditorAppearanceVariants', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    const stylingModes = ['outlined', 'filled', 'underlined'];
    const labelModes = ['static', 'floating', 'hidden'];

    const clickSaveButton = async () => {
      await t.click($('.validate.dx-button'));
    };

    const changeLabelMode = async (labelMode) => {
      await t.click($('.dx-selectbox').nth(3));
      await t.click($('.dx-item').withText(labelMode));
    };

    const changeStylingMode = async (stylingMode) => {
      await t.click($('.dx-selectbox').nth(2));
      await t.click($('.dx-item').withText(stylingMode)).wait(200);
    };

    await asyncForEach(stylingModes, async (stylingMode) => {
      await asyncForEach(labelModes, async (labelMode) => {
        await changeStylingMode(stylingMode);
        await changeLabelMode(labelMode);
        await clickSaveButton();
        await takeScreenshot(`common_editor_appearance_variants_${stylingMode}_${labelMode}_desktop.png`);
      });
    });

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
