import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

const CLASSES = {
  list: '.list',
  card: '.card',
};

fixture('Sortable.Kanban')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('Sortable', 'Kanban', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('Drag-n-drop kanban columns', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.drag(Selector(CLASSES.list).nth(0), 600, 50);
    await takeScreenshot('kanban_list_drag-n-drop.png');

    await t.expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });

  test('Drag-n-drop card inside the same column', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.drag(Selector(CLASSES.card).nth(3), 50, 400);
    await takeScreenshot('kanban_card_drag-n-drop_same-column.png');

    await t.expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });

  test('Drag-n-drop card to a different column', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.drag(Selector(CLASSES.card).nth(3), 300, 400);
    await takeScreenshot('kanban_card_drag-n-drop_different-column.png');

    await t.expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
