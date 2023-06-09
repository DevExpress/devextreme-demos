import React from 'react';
import Button from 'devextreme-react/button';
import SelectBox from 'devextreme-react/select-box';
import DataGrid, {
  Grouping, Column, ColumnChooser, LoadPanel, Toolbar, Item,
} from 'devextreme-react/data-grid';

import query from 'devextreme/data/query';
import service from './data.js';

const countLabel = { 'aria-label': 'Count' };

class App extends React.Component {
  dataGrid: any;

  groupingValues: any;

  orders: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.orders = service.getOrders();
    this.state = {
      expanded: true,
      totalCount: this.getGroupCount('CustomerStoreState'),
      grouping: 'CustomerStoreState',
    };
    this.groupingValues = [{
      value: 'CustomerStoreState',
      text: 'Grouping by State',
    }, {
      value: 'Employee',
      text: 'Grouping by Employee',
    }];
    this.dataGrid = null;

    this.groupChanged = this.groupChanged.bind(this);
    this.collapseAllClick = this.collapseAllClick.bind(this);
    this.refreshDataGrid = this.refreshDataGrid.bind(this);
    this.getRef = this.getRef.bind(this);
  }

  getGroupCount(groupField) {
    return query(this.orders)
      .groupBy(groupField)
      .toArray().length;
  }

  groupChanged(e) {
    const grouping = e.value;
    this.dataGrid.instance.clearGrouping();
    this.dataGrid.instance.columnOption(grouping, 'groupIndex', 0);
    this.setState({
      totalCount: this.getGroupCount(grouping),
      grouping,
    });
  }

  collapseAllClick() {
    const newValue = !this.state.expanded;
    this.setState({
      expanded: newValue,
    });
  }

  refreshDataGrid() {
    this.dataGrid.instance.refresh();
  }

  getRef(ref) {
    this.dataGrid = ref;
    // @ts-expect-error TS(2339): Property 'dataGrid' does not exist on type 'Window... Remove this comment to see the full error message
    window.dataGrid = this.dataGrid;
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid id="gridContainer"
        ref={this.getRef}
        dataSource={this.orders}
        keyExpr="ID"
        showBorders={true}>
        // @ts-expect-error TS(2786): 'Grouping' cannot be used as a JSX component.
        <Grouping autoExpandAll={this.state.expanded} />
        // @ts-expect-error TS(2786): 'ColumnChooser' cannot be used as a JSX component.
        <ColumnChooser enabled={true} />
        // @ts-expect-error TS(2786): 'LoadPanel' cannot be used as a JSX component.
        <LoadPanel enabled={true} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="OrderNumber" caption="Invoice Number" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="OrderDate" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Employee" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="CustomerStoreCity" caption="City" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="CustomerStoreState" caption="State" groupIndex={0} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="SaleAmount" alignment="right" format="currency" />
        // @ts-expect-error TS(2786): 'Toolbar' cannot be used as a JSX component.
        <Toolbar>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item location="before">
            <div className="informer">
              <h2 className="count">{this.state.totalCount}</h2>
              <span className="name">Total Count</span>
            </div>
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item location="before">
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              width="225"
              items={this.groupingValues}
              displayExpr="text"
              inputAttr={countLabel}
              valueExpr="value"
              value={this.state.grouping}
              onValueChanged={this.groupChanged} />
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item location="before">
            // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
            <Button
              text={this.state.expanded ? 'Collapse All' : 'Expand All'}
              width='136'
              onClick={this.collapseAllClick} />
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item location="after">
            // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
            <Button
              icon='refresh'
              onClick={this.refreshDataGrid} />
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item
            // @ts-expect-error TS(2322): Type '{ name: string; }' is not assignable to type... Remove this comment to see the full error message
            name="columnChooserButton"
          />
        </Toolbar>
      </DataGrid>
    );
  }
}

export default App;
