import { Selector } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

const PIVOTGRID_FIELD_CHOOSER_BUTTON = 'dx-pivotgrid-field-chooser-button';
const TREEVIEW_SEARCH_FIELD = 'dx-treeview-search';
const TEXTEDITOR_INPUT = 'dx-texteditor-input';
const FIELD_CHOOSER_CONTENT = 'dx-overlay-content';

fixture('PivotGrid.IntegratedFieldChooser')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('PivotGrid', 'IntegratedFieldChooser', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('IntegratedFieldChooser', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.click(Selector(`.${PIVOTGRID_FIELD_CHOOSER_BUTTON}`));

    await takeScreenshot('Integrated field chooser.png');

    const textEditorInput = Selector(`.${TREEVIEW_SEARCH_FIELD} .${TEXTEDITOR_INPUT}`);
    await t
      .typeText(textEditorInput, 'Product M');

    await takeScreenshot('Integrated field chooser after search of hierarchy field.png', `.${FIELD_CHOOSER_CONTENT}`);

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
