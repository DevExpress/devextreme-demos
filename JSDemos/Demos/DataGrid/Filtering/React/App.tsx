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
        <DataGrid id="gridContainer"
          ref={(ref) => { this.dataGrid = ref; }}
          dataSource={this.orders}
          keyExpr="ID"
          showBorders={true}>
          <FilterRow visible={this.state.showFilterRow}
            applyFilter={this.state.currentFilter} />
          <HeaderFilter visible={this.state.showHeaderFilter} />
          <SearchPanel visible={true}
            width={240}
            placeholder="Search..." />
          <Column dataField="OrderNumber"
            width={140}
            caption="Invoice Number">
            <HeaderFilter groupInterval={10000} />
          </Column>
          <Column dataField="OrderDate"
            alignment="right"
            dataType="date"
            width={120}
            calculateFilterExpression={this.calculateFilterExpression}>
            <HeaderFilter dataSource={this.orderHeaderFilter} />
          </Column>
          <Column dataField="DeliveryDate"
            alignment="right"
            dataType="datetime"
            format="M/d/yyyy, HH:mm"
            width={180} />
          <Column dataField="SaleAmount"
            alignment="right"
            dataType="number"
            format="currency"
            editorOptions={saleAmountEditorOptions}>
            <HeaderFilter dataSource={this.saleAmountHeaderFilter} />
          </Column>
          <Column dataField="Employee" />
          <Column dataField="CustomerStoreCity"
            caption="City">
            <HeaderFilter>
              <Search enabled={true} />
            </HeaderFilter>
          </Column>
        </DataGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Apply Filter </span>
            <SelectBox items={this.applyFilterTypes}
              value={this.state.currentFilter}
              onValueChanged={this.onCurrentFilterChanged}
              valueExpr="key"
              inputAttr={filterLabel}
              displayExpr="name"
              disabled={!this.state.showFilterRow} />
          </div>
          <div className="option">
            <CheckBox text="Filter Row"
              value={this.state.showFilterRow}
              onValueChanged={this.onShowFilterRowChanged} />
          </div>
          <div className="option">
            <CheckBox text="Header Filter"
              value={this.state.showHeaderFilter}
              onValueChanged={this.onShowHeaderFilterChanged} />
          </div>
        </div>
      </div>
    );
  }

  calculateFilterExpression(value: string, selectedFilterOperations, target: string) {
    const column = this;
    if (target === 'headerFilter' && value === 'weekends') {
      return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
    }
    return column.defaultCalculateFilterExpression(value, selectedFilterOperations, target);
  }

  orderHeaderFilter(data: { dataSource: { postProcess: (results: any) => any; }; }) {
    data.dataSource.postProcess = (results: { text: string; value: string; }[]) => {
      results.push({
        text: 'Weekends',
        value: 'weekends',
      });
      return results;
    };
  }

  onShowFilterRowChanged(e: { value: any; }) {
    this.setState({
      showFilterRow: e.value,
    });
    this.clearFilter();
  }

  onShowHeaderFilterChanged(e: { value: any; }) {
    this.setState({
      showHeaderFilter: e.value,
    });
    this.clearFilter();
  }

  onCurrentFilterChanged(e: { value: any; }) {
    this.setState({
      currentFilter: e.value,
    });
  }

  clearFilter() {
    this.dataGrid.instance.clearFilter();
  }
}

function getOrderDay(rowData: { OrderDate: VarDate | string | number | Date | VarDate; }) {
  return (new Date(rowData.OrderDate)).getDay();
}

export default App;
