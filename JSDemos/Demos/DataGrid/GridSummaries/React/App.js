import React from 'react';
import DataGrid, {
  Column, Selection, Summary, TotalItem,
} from 'devextreme-react/data-grid';
import { formatDate } from 'devextreme/localization';
import service from './data.js';

const orders = service.getOrders();

const customizeDate = (data) => `First: ${formatDate(data.value, 'MMM dd, yyyy')}`;

const App = () => (
  <React.Fragment>
    <DataGrid
      id="gridContainer"
      dataSource={orders}
      keyExpr="ID"
      showBorders={true}>
      <Selection mode="single" />
      <Column dataField="OrderNumber" width={130} caption="Invoice Number" />
      <Column dataField="OrderDate" width={160} dataType="date" />
      <Column dataField="Employee" />
      <Column dataField="CustomerStoreCity" caption="City" />
      <Column dataField="CustomerStoreState" caption="State" />
      <Column dataField="SaleAmount" alignment="right" format="currency" />
      <Summary>
        <TotalItem
          column="OrderNumber"
          summaryType="count" />
        <TotalItem
          column="OrderDate"
          summaryType="min"
          customizeText={customizeDate} />
        <TotalItem
          column="SaleAmount"
          summaryType="sum"
          valueFormat="currency" />
      </Summary>
    </DataGrid>
  </React.Fragment>
);

export default App;
