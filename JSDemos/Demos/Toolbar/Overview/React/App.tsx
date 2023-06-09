import React from 'react';

import Toolbar, { Item } from 'devextreme-react/toolbar';
import List from 'devextreme-react/list';

import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import 'devextreme/ui/select_box';

import { productTypes, products } from './data.js';

function renderLabel() {
  return <div className="toolbar-label"><b>Tom&apos;s Club</b> Products</div>;
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Toolbar' cannot be used as a JSX component.
        <Toolbar>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item location="before"
            widget="dxButton"
            options={backButtonOptions} />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item location="before"
            widget="dxButton"
            options={refreshButtonOptions} />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item location="center"
            locateInMenu="never"
            render={renderLabel} />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item location="after"
            locateInMenu="auto"
            widget="dxSelectBox"
            options={selectBoxOptions} />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item location="after"
            locateInMenu="auto"
            widget="dxButton"
            options={addButtonOptions} />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item locateInMenu="always"
            widget="dxButton"
            options={saveButtonOptions} />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item locateInMenu="always"
            widget="dxButton"
            options={printButtonOptions} />
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item locateInMenu="always"
            widget="dxButton"
            options={settingsButtonOptions} />
        </Toolbar>
        // @ts-expect-error TS(2786): 'List' cannot be used as a JSX component.
        <List id="products" dataSource={productsStore} />
      </React.Fragment>
    );
  }
}

const productsStore = new DataSource(products);

const backButtonOptions = {
  icon: 'back',
  onClick: () => {
    notify('Back button has been clicked!');
  },
};

const refreshButtonOptions = {
  icon: 'refresh',
  onClick: () => {
    notify('Refresh button has been clicked!');
  },
};

const selectBoxOptions = {
  width: 140,
  items: productTypes,
  valueExpr: 'id',
  displayExpr: 'text',
  value: productTypes[0].id,
  inputAttr: { 'aria-label': 'Categories' },
  onValueChanged: (args) => {
    if (args.value > 1) {
      // @ts-expect-error TS(2554): Expected 0-1 arguments, but got 3.
      productsStore.filter('type', '=', args.value);
    } else {
      productsStore.filter(null);
    }
    productsStore.load();
  },
};

const addButtonOptions = {
  icon: 'plus',
  onClick: () => {
    notify('Add button has been clicked!');
  },
};

const saveButtonOptions = {
  text: 'Save',
  onClick: () => {
    notify('Save option has been clicked!');
  },
};

const printButtonOptions = {
  text: 'Print',
  onClick: () => {
    notify('Print option has been clicked!');
  },
};

const settingsButtonOptions = {
  text: 'Settings',
  onClick: () => {
    notify('Settings option has been clicked!');
  },
};

export default App;
