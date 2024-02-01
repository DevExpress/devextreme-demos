import { Selector } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

const LIST_ITEM_CONTENT_CLASS = 'dx-list-item-content';
const CHECKBOX_CONTAINER_CLASS = 'dx-checkbox-container';
const SELECTBOX_CLASS = 'dx-selectbox';
const POPUP_WRAPPER_CLASS = 'dx-popup-wrapper';

fixture('List.ListSelection')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 800);
  });

runManualTest('List', 'ListSelection', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('List Selection', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    console.log('checking value drilling t.ctx.theme', t.ctx.theme);

    await t.click(Selector(`.${CHECKBOX_CONTAINER_CLASS}`).nth(-1));

    await t.click(Selector(`.${LIST_ITEM_CONTENT_CLASS}`).nth(3));

    await takeScreenshot(`List after click on item, selectionMode=all(${t.ctx.theme}).png`);

    await t.click(Selector(`.${SELECTBOX_CLASS}`).nth(0));
    await t.click(Selector(`.${POPUP_WRAPPER_CLASS} .${LIST_ITEM_CONTENT_CLASS}`).nth(2));

    await t.wait(2000);

    await takeScreenshot(`List after change selectionMode to multiple(${t.ctx.theme}).png`);

    await t.click(Selector(`.${SELECTBOX_CLASS}`).nth(0));
    await t.click(Selector(`.${POPUP_WRAPPER_CLASS} .${LIST_ITEM_CONTENT_CLASS}`).nth(1));

    await takeScreenshot(`List after change selectionMode to single(${t.ctx.theme}).png`);

    await t.click(Selector(`.${SELECTBOX_CLASS}`).nth(0));
    await t.click(Selector(`.${POPUP_WRAPPER_CLASS} .${LIST_ITEM_CONTENT_CLASS}`).nth(0));

    await takeScreenshot(`List after change selectionMode to none(${t.ctx.theme}).png`);

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
