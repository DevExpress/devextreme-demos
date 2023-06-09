import React from 'react';
import DataGrid, {
  Column, FilterRow, HeaderFilter, Search, SearchPanel,
} from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';

import service from './data.js';

const saleAmountEditorOptions = { format: 'currency', showClearButton: true };
const filterLabel = { 'aria-label': 'Filter' };

class App extends React.Component {
  applyFilterTypes: any;

  dataGrid: any;

  orders: any;

  saleAmountHeaderFilter: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.orders = service.getOrders();
    this.applyFilterTypes = [{
      key: 'auto',
      name: 'Immediately',
    }, {
      key: 'onClick',
      name: 'On Button Click',
    }];
    this.saleAmountHeaderFilter = [{
      text: 'Less than $3000',
      value: ['SaleAmount', '<', 3000],
    }, {
      text: '$3000 - $5000',
      value: [
        ['SaleAmount', '>=', 3000],
        ['SaleAmount', '<', 5000],
      ],
    }, {
      text: '$5000 - $10000',
      value: [
        ['SaleAmount', '>=', 5000],
        ['SaleAmount', '<', 10000],
      ],
    }, {
      text: '$10000 - $20000',
      value: [
        ['SaleAmount', '>=', 10000],
        ['SaleAmount', '<', 20000],
      ],
    }, {
      text: 'Greater than $20000',
      value: ['SaleAmount', '>=', 20000],
    }];
    this.state = {
      showFilterRow: true,
      showHeaderFilter: true,
      currentFilter: this.applyFilterTypes[0].key,
    };
    this.dataGrid = null;
    this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
    this.onShowFilterRowChanged = this.onShowFilterRowChanged.bind(this);
    this.onShowHeaderFilterChanged = this.onShowHeaderFilterChanged.bind(this);
    this.onCurrentFilterChanged = this.onCurrentFilterChanged.bind(this);
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid id="gridContainer"
          ref={(ref) => { this.dataGrid = ref; }}
          dataSource={this.orders}
          keyExpr="ID"
          showBorders={true}>
          // @ts-expect-error TS(2786): 'FilterRow' cannot be used as a JSX component.
          <FilterRow visible={this.state.showFilterRow}
            applyFilter={this.state.currentFilter} />
          // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
          <HeaderFilter visible={this.state.showHeaderFilter} />
          // @ts-expect-error TS(2786): 'SearchPanel' cannot be used as a JSX component.
          <SearchPanel visible={true}
            width={240}
            placeholder="Search..." />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="OrderNumber"
            width={140}
            caption="Invoice Number">
            // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
            <HeaderFilter groupInterval={10000} />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="OrderDate"
            alignment="right"
            dataType="date"
            width={120}
            calculateFilterExpression={this.calculateFilterExpression}>
            // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
            <HeaderFilter dataSource={this.orderHeaderFilter} />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="DeliveryDate"
            alignment="right"
            dataType="datetime"
            format="M/d/yyyy, HH:mm"
            width={180} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="SaleAmount"
            alignment="right"
            dataType="number"
            format="currency"
            editorOptions={saleAmountEditorOptions}>
            // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
            <HeaderFilter dataSource={this.saleAmountHeaderFilter} />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Employee" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerStoreCity"
            caption="City">
            // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
            <HeaderFilter>
              // @ts-expect-error TS(2786): 'Search' cannot be used as a JSX component.
              <Search enabled={true} />
            </HeaderFilter>
          </Column>
        </DataGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Apply Filter </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox items={this.applyFilterTypes}
              value={this.state.currentFilter}
              onValueChanged={this.onCurrentFilterChanged}
              valueExpr="key"
              inputAttr={filterLabel}
              displayExpr="name"
              disabled={!this.state.showFilterRow} />
          </div>
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox text="Filter Row"
              value={this.state.showFilterRow}
              onValueChanged={this.onShowFilterRowChanged} />
          </div>
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox text="Header Filter"
              value={this.state.showHeaderFilter}
              onValueChanged={this.onShowHeaderFilterChanged} />
          </div>
        </div>
      </div>
    );
  }

  calculateFilterExpression(value, selectedFilterOperations, target) {
    const column = this;
    if (target === 'headerFilter' && value === 'weekends') {
      return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
    }
    // @ts-expect-error TS(2339): Property 'defaultCalculateFilterExpression' does n... Remove this comment to see the full error message
    return column.defaultCalculateFilterExpression(value, selectedFilterOperations, target);
  }

  orderHeaderFilter(data) {
    data.dataSource.postProcess = (results) => {
      results.push({
        text: 'Weekends',
        value: 'weekends',
      });
      return results;
    };
  }

  onShowFilterRowChanged(e) {
    this.setState({
      showFilterRow: e.value,
    });
    this.clearFilter();
  }

  onShowHeaderFilterChanged(e) {
    this.setState({
      showHeaderFilter: e.value,
    });
    this.clearFilter();
  }

  onCurrentFilterChanged(e) {
    this.setState({
      currentFilter: e.value,
    });
  }

  clearFilter() {
    this.dataGrid.instance.clearFilter();
  }
}

function getOrderDay(rowData) {
  return (new Date(rowData.OrderDate)).getDay();
}

export default App;
