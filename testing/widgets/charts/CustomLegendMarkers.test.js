import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
// import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('Charts.CustomLegendMarkers')
  .page('http://127.0.0.1:5500/packages/devextreme/playground/jquery.html')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

test('CustomLegendMarkers', async (t) => {
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  await t.debug();
  await t.debug();
  // await t.eval(() => window.localStorage.setItem('dx-theme', 'material.blue.dark'));
  // await t.eval(() => window.DevExpress.ui.themes.current('material.blue.dark'));

  await t.wait(2000);

  // await t.eval(() => location.reload());
  // await t.wait(1000);
  // // await t.hover($('.dxl-marker').nth(1));
  // await takeScreenshot('charts_custom_legend_marker.png', '.dxc-legend');

  // await t
  //   .expect(compareResults.isValid())
  //   .ok(compareResults.errorMessages());
}).before(async (t) => {
  await t.eval(() => {
    const linkRel = document.getElementsByTagName('link')[0];
    const currentUrl = linkRel.href;
    console.log('current theme url', currentUrl);

    const urlSegments = linkRel.href.split('/');
    const newUrl = urlSegments.slice(0, -1).join('/');
    const newLocation = `${newUrl}/dx.material.blue.dark.css`;
    linkRel.href = newLocation;

    // const linkRel = document.getElementsByTagName('link')[0];

    // const newLocation = 'http://localhost:3000/node_modules/devextreme-dist/css/dx.material.blue.dark.css';

    // linkRel.href = newLocation;
    // debugger;
    // location.reload();
    // debugger;
    // window.localStorage.setItem('dx-theme', 'material.blue.dark');
    // window.DevExpress.ui.themes.current('material.blue.dark');

    // console.log('start before test');
    // const urlSegments = location.href.split('/');

    // const newUrl = urlSegments.slice(0, -1).join('/');
    // const newLocation = `${newUrl}/dx.greenmist.css`;

    // console.log('newLocation', newLocation);

    // location.replace(newLocation);
    // // location.replace('http://localhost:3000/#JSDemos/Demos/Gauges/VariableNumberOfBars/jQuery/dx.greenmist.css');
    // location.reload();
    // debugger;
    // console.log('end before test');
  });
});
