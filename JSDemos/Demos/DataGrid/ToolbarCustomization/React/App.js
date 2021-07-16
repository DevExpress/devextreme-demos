import React from 'react';
import DataGrid, { Grouping, Column, ColumnChooser, LoadPanel, Toolbar, Item } from 'devextreme-react/data-grid';
import { Template } from 'devextreme-react/core/template';

import query from 'devextreme/data/query';
import service from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.orders = service.getOrders();
    this.state = {
      expanded: true,
      totalCount: this.getGroupCount('CustomerStoreState')
    };
    this.toolbarItemRender = this.toolbarItemRender.bind(this);
    this.dataGrid = null;
  }
  getGroupCount(groupField) {
    return query(this.orders)
      .groupBy(groupField)
      .toArray().length;
  }
  toolbarItemRender() {
    return (
      <div className="informer">
        <h2 className="count">{this.state.totalCount}</h2>
        <span className="name">Total Count</span>
      </div>
    );
  }
  groupChanged(e) {
    this.dataGrid.instance.clearGrouping();
    this.dataGrid.instance.columnOption(e.value, 'groupIndex', 0);
    this.setState({
      totalCount: this.getGroupCount(e.value)
    });
  }
  collapseAllClick(e) {
    let newValue = !this.state.expanded;
    e.component.option('text', newValue ? 'Collapse All' : 'Expand All');
    this.setState({
      expanded: newValue
    });
  }
  refreshDataGrid() {
    this.dataGrid.instance.refresh();
  }
  getSelectBoxOptions() {
    return {
      width: 200,
      items: [{
        value: 'CustomerStoreState',
        text: 'Grouping by State'
      }, {
        value: 'Employee',
        text: 'Grouping by Employee'
      }],
      displayExpr: 'text',
      valueExpr: 'value',
      value: 'CustomerStoreState',
      onValueChanged: this.groupChanged.bind(this)
    };
  }
  getCollapseButtonOptions() {
    return {
      width: 136,
      text: 'Collapse All',
      onClick: this.collapseAllClick.bind(this)
    };
  }
  getRefreshButtonOptions() {
    return {
      icon: 'refresh',
      onClick: this.refreshDataGrid.bind(this)
    };
  }
  render() {
    return (
      <DataGrid id="gridContainer"
        ref={(ref) => window.dataGrid = this.dataGrid = ref}
        dataSource={this.orders}
        keyExpr="ID"
        showBorders={true}
        onToolbarPreparing={this.onToolbarPreparing}>
        <Grouping autoExpandAll={this.state.expanded} />
        <ColumnChooser enabled={true} />
        <LoadPanel enabled={true} />
        <Column dataField="OrderNumber" caption="Invoice Number" />
        <Column dataField="OrderDate" />
        <Column dataField="Employee" />
        <Column dataField="CustomerStoreCity" caption="City" />
        <Column dataField="CustomerStoreState" caption="State" groupIndex={0} />
        <Column dataField="SaleAmount" alignment="right" format="currency" />
        <Toolbar>
          <Item template="totalGroupCount" location="before" />
          <Item
            location="before"
            widget="dxSelectBox"
            options={this.getSelectBoxOptions()}
          />
          <Item
            location="before"
            widget="dxButton"
            options={this.getCollapseButtonOptions()}
          />
          <Item
            location="after"
            widget="dxButton"
            options={this.getRefreshButtonOptions()}
          />
          <Item
            name="columnChooserButton"
          />
        </Toolbar>
        <Template name="totalGroupCount" render={this.toolbarItemRender} />
      </DataGrid>
    );
  }
}

export default App;
