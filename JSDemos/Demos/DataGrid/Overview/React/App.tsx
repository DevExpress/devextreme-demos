import React from 'react';

import ODataStore from 'devextreme/data/odata/store';

import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
} from 'devextreme-react/data-grid';

import DiscountCell from './DiscountCell.js';

const pageSizes = [10, 25, 50, 100];

const dataSourceOptions = {
  store: new ODataStore({
    url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
    key: 'Id',
    beforeSend(request) {
      const year = new Date().getFullYear() - 1;
      request.params.startDate = `${year}-05-10`;
      request.params.endDate = `${year}-5-15`;
    },
  }),
};

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.onContentReady = this.onContentReady.bind(this);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        dataSource={dataSourceOptions}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        showBorders={true}
        onContentReady={this.onContentReady}
      >
        // @ts-expect-error TS(2786): 'GroupPanel' cannot be used as a JSX component.
        <GroupPanel visible={true} />
        // @ts-expect-error TS(2786): 'SearchPanel' cannot be used as a JSX component.
        <SearchPanel visible={true} highlightCaseSensitive={true} />
        // @ts-expect-error TS(2786): 'Grouping' cannot be used as a JSX component.
        <Grouping autoExpandAll={false} />

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Product" groupIndex={0} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; dataTy... Remove this comment to see the full error message
          dataField="Amount"
          caption="Sale Amount"
          dataType="number"
          format="currency"
          alignment="right"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; dataTy... Remove this comment to see the full error message
          dataField="Discount"
          caption="Discount %"
          dataType="number"
          format="percent"
          alignment="right"
          allowGrouping={false}
          cellRender={DiscountCell}
          cssClass="bullet"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="SaleDate" dataType="date" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Region" dataType="string" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Sector" dataType="string" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Channel" dataType="string" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Customer" dataType="string" width={150} />

        // @ts-expect-error TS(2786): 'Pager' cannot be used as a JSX component.
        <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
        // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
        <Paging defaultPageSize={10} />
      </DataGrid>
    );
  }

  onContentReady(e) {
    if (!this.state.collapsed) {
      e.component.expandRow(['EnviroCare']);
      this.setState({
        collapsed: true,
      });
    }
  }
}

export default App;
