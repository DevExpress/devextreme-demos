import React from 'react';

import 'devextreme/data/odata/store';
import {
  Column,
  DataGrid,
  FilterRow,
  HeaderFilter,
  GroupPanel,
  Scrolling,
  Editing,
  Grouping,
  Lookup,
  MasterDetail,
  Summary,
  RangeRule,
  RequiredRule,
  StringLengthRule,
  GroupItem,
  TotalItem,
  ValueFormat,
} from 'devextreme-react/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import MasterDetailGrid from './MasterDetailGrid.js';

const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';

const dataSource = createStore({
  key: 'OrderID',
  loadUrl: `${url}/Orders`,
  insertUrl: `${url}/InsertOrder`,
  updateUrl: `${url}/UpdateOrder`,
  deleteUrl: `${url}/DeleteOrder`,
  onBeforeSend: (method, ajaxOptions) => {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
});

const customersData = createStore({
  key: 'Value',
  loadUrl: `${url}/CustomersLookup`,
  onBeforeSend: (method, ajaxOptions) => {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
});

const shippersData = createStore({
  key: 'Value',
  loadUrl: `${url}/ShippersLookup`,
  onBeforeSend: (method, ajaxOptions) => {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
});

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        dataSource={dataSource}
        showBorders={true}
        height={600}
        remoteOperations={true}
      >
        // @ts-expect-error TS(2786): 'MasterDetail' cannot be used as a JSX component.
        <MasterDetail
          // @ts-expect-error TS(2322): Type '{ enabled: boolean; component: typeof Master... Remove this comment to see the full error message
          enabled={true}
          component={MasterDetailGrid}
        />
        // @ts-expect-error TS(2786): 'FilterRow' cannot be used as a JSX component.
        <FilterRow visible={true} />
        // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
        <HeaderFilter visible={true} />
        // @ts-expect-error TS(2786): 'GroupPanel' cannot be used as a JSX component.
        <GroupPanel visible={true} />
        // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
        <Scrolling mode="virtual" />
        // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
        <Editing
          // @ts-expect-error TS(2322): Type '{ mode: string; allowAdding: boolean; allowD... Remove this comment to see the full error message
          mode="row"
          allowAdding={true}
          allowDeleting={true}
          allowUpdating={true}
        />
        // @ts-expect-error TS(2786): 'Grouping' cannot be used as a JSX component.
        <Grouping autoExpandAll={false} />

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="CustomerID" caption="Customer">
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup dataSource={customersData} valueExpr="Value" displayExpr="Text" />
          // @ts-expect-error TS(2786): 'StringLengthRule' cannot be used as a JSX compone... Remove this comment to see the full error message
          <StringLengthRule max={5} message="The field Customer must be a string with a maximum length of 5." />
        </Column>

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="OrderDate" dataType="date">
          // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
          <RequiredRule message="The OrderDate field is required." />
        </Column>

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Freight">
          // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
          <HeaderFilter groupInterval={100} />
          // @ts-expect-error TS(2786): 'RangeRule' cannot be used as a JSX component.
          <RangeRule min={0} max={2000} message="The field Freight must be between 0 and 2000." />
        </Column>

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="ShipCountry">
          // @ts-expect-error TS(2786): 'StringLengthRule' cannot be used as a JSX compone... Remove this comment to see the full error message
          <StringLengthRule max={15} message="The field ShipCountry must be a string with a maximum length of 15." />
        </Column>

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; capt... Remove this comment to see the full error message
          dataField="ShipVia"
          caption="Shipping Company"
          dataType="number"
        >
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup dataSource={shippersData} valueExpr="Value" displayExpr="Text" />
        </Column>
        // @ts-expect-error TS(2786): 'Summary' cannot be used as a JSX component.
        <Summary>
          // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
          <TotalItem column="Freight" summaryType="sum">
            // @ts-expect-error TS(2786): 'ValueFormat' cannot be used as a JSX component.
            <ValueFormat type="decimal" precision={2} />
          </TotalItem>

          // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
          <GroupItem column="Freight" summaryType="sum">
            // @ts-expect-error TS(2786): 'ValueFormat' cannot be used as a JSX component.
            <ValueFormat type="decimal" precision={2} />
          </GroupItem>

          // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
          <GroupItem summaryType="count" />

        </Summary>
      </DataGrid>
    );
  }
}

export default App;
