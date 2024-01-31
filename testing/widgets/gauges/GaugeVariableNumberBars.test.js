import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $, ClientFunction } from 'testcafe';
import themes from 'devextreme/ui/themes';

const createTestCafe = require('testcafe');

// 1) this approach doent work
// 2) await t.navigateTo('http://localhost:3000/#JSDemos/Demos/Gauges/VariableNumberOfBars/jQuery/dx.material.blue.light.css'); - works

const changeTheme = async (themeName) => createTestCafe.ClientFunction((args) => new Promise((resolve) => {
  // eslint-disable-next-line no-undef
  const currentTheme = window.localStorage.getItem('dx-theme');

  debugger;
  // if (currentTheme !== themeName) {
  window.localStorage.setItem('dx-theme', themeName);

  // window.location.reload();
  // }

  // window.DevExpress.ui.themes.ready(resolve);
  // eslint-disable-next-line no-undef
}),
{ dependencies: { themeName } })();

fixture('Gauges.VariableNumberOfBars')
// .page('http://localhost:3000/#JSDemos/Demos/Gauges/VariableNumberOfBars/jQuery/dx.light.css');
  .page('http://localhost:3000/#JSDemos/Demos/Gauges/VariableNumberOfBars/jQuery/dx.light.css')
  .beforeEach(async (t) => {
    // await changeTheme('fluent.blue.light');

    // await t.navigateTo('http://localhost:3000/#JSDemos/Demos/Gauges/VariableNumberOfBars/jQuery/dx.material.blue.light.css');
  });
const getLocalStorageItem = ClientFunction((key) => localStorage.getItem(key));

test('qqqq', async (t) => {
  // await t.eval(() => {
  //   const linkRel = document.getElementsByTagName('link')[0];
  //   linkRel.href = 'http://localhost:3000/node_modules/devextreme-dist/css/dx.material.blue.dark.css';
  // });

  await t.wait(2000);

  await t.expect(t.ctx.someProp).eql('1234');

  // await t.eval(() => {
  //   const currentLocation = location.href;
  //   const newLocation =
  //   // location.replace('http://localhost:3000/#JSDemos/Demos/Gauges/VariableNumberOfBars/jQuery/dx.material.blue.dark.css');
  //   location.replace('http://localhost:3000/#JSDemos/Demos/Gauges/VariableNumberOfBars/jQuery/dx.greenmist.css');
  //   location.reload();
  // });

  // await t.eval(() => location.reload());

  // await t.debug();

  // await t.eval(() => window.localStorage.setItem('dx-theme', 'material.blue.dark'));
  // await t.wait(2000);
  // await t.eval(() => location.reload());
  // await t.eval(() => window.DevExpress.ui.themes.current('material.blue.dark'));

  // await t.expect(getLocalStorageItem('dx-theme')).eql('fluent.blue.light22');
  // await t.expect(getLocalStorageItem(themeKey)).eql('value');
}).before(async (t) => {
  t.ctx.someProp = 123;

  await t.eval(() => {
    console.log('start before test');
    const urlSegments = location.href.split('/');

    const newUrl = urlSegments.slice(0, -1).join('/');
    const newLocation = `${newUrl}/dx.greenmist.css`;

    console.log('newLocation', newLocation);

    location.replace(newLocation);
    // location.replace('http://localhost:3000/#JSDemos/Demos/Gauges/VariableNumberOfBars/jQuery/dx.greenmist.css');
    location.reload();
    console.log('end before test');
  });
});
