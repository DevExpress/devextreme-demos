import React from 'react';

import DataGrid, {
  Column,
  Editing,
  Paging,
  Selection,
  Lookup,
  Toolbar,
  Item,
} from 'devextreme-react/data-grid';

import { Button } from 'devextreme-react/button';

import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { employees, states } from './data.js';

const dataSource = new DataSource({
  store: new ArrayStore({
    data: employees,
    key: 'ID',
  }),
});

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      selectedItemKeys: [],
    };
    this.selectionChanged = this.selectionChanged.bind(this);
    this.deleteRecords = this.deleteRecords.bind(this);
  }

  render() {
    return (
      <div id="data-grid-demo">
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid id="gridContainer"
          dataSource={dataSource}
          showBorders={true}
          selectedRowKeys={this.state.selectedItemKeys}
          onSelectionChanged={this.selectionChanged}
        >
          // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
          <Selection mode="multiple" />
          // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
          <Paging enabled={false} />
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing
            // @ts-expect-error TS(2322): Type '{ mode: string; allowUpdating: boolean; allo... Remove this comment to see the full error message
            mode="cell"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true} />

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Prefix" caption="Title" width={55} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="FirstName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="LastName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Position" width={170} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="StateID" caption="State" width={125}>
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="BirthDate" dataType="date" />
          // @ts-expect-error TS(2786): 'Toolbar' cannot be used as a JSX component.
          <Toolbar>
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item name="addRowButton" showText="always" />
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item location="after">
              // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
              <Button
                onClick={this.deleteRecords}
                icon="trash"
                disabled={!this.state.selectedItemKeys.length}
                text="Delete Selected Records" />
            </Item>
          </Toolbar>
        </DataGrid>
      </div>
    );
  }

  deleteRecords() {
    this.state.selectedItemKeys.forEach((key) => {
      dataSource.store().remove(key);
    });
    this.setState({
      selectedItemKeys: [],
    });
    dataSource.reload();
  }

  selectionChanged(data) {
    this.setState({
      selectedItemKeys: data.selectedRowKeys,
    });
  }
}

export default App;
