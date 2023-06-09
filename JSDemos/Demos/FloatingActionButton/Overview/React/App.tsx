import React from 'react';
import config from 'devextreme/core/config';
import repaintFloatingActionButton from 'devextreme/ui/speed_dial_action/repaint_floating_action_button';
import DataGrid, {
  Column, Editing, Lookup, Texts, Selection,
} from 'devextreme-react/data-grid';
import { SpeedDialAction } from 'devextreme-react/speed-dial-action';
import { SelectBox } from 'devextreme-react/select-box';
import {
  employees, states, directions, directionLabel,
} from './data.js';

const optionDirections = ['auto', 'up', 'down'];

class App extends React.Component {
  grid: any;

  selectionChanged: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      selectedRowIndex: -1,
    };
    this.grid = null;
    this.selectionChanged = this.selectedChanged.bind(this);
    this.directionChanged = this.directionChanged.bind(this);
    this.addRow = this.addRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.editRow = this.editRow.bind(this);
  }

  selectedChanged(e) {
    this.setState({
      selectedRowIndex: e.component.getRowIndexByKey(e.selectedRowKeys[0]),
    });
  }

  directionChanged(e) {
    config({
      floatingActionButtonConfig: directions[e.selectedItem],
    });

    repaintFloatingActionButton();
  }

  editRow() {
    this.grid.instance.editRow(this.state.selectedRowIndex);
    this.grid.instance.deselectAll();
  }

  deleteRow() {
    this.grid.instance.deleteRow(this.state.selectedRowIndex);
    this.grid.instance.deselectAll();
  }

  addRow() {
    this.grid.instance.addRow();
    this.grid.instance.deselectAll();
  }

  render() {
    const { selectedRowIndex } = this.state;

    return (
      <div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          id="grid"
          dataSource={employees}
          keyExpr="ID"
          ref={(ref) => { this.grid = ref; }}
          showBorders={true}
          onSelectionChanged={this.selectionChanged}>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Prefix" caption="Title" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="FirstName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="LastName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Position" width={130} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="StateID" caption="State" width={125}>
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="BirthDate" dataType="date" width={125} />
          // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
          <Selection mode="single" />
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing mode="popup">
            // @ts-expect-error TS(2786): 'Texts' cannot be used as a JSX component.
            <Texts confirmDeleteMessage="" />
          </Editing>
        </DataGrid>
        // @ts-expect-error TS(2786): 'SpeedDialAction' cannot be used as a JSX componen... Remove this comment to see the full error message
        <SpeedDialAction
          icon="add"
          label="Add row"
          index={1}
          onClick={this.addRow} />
        // @ts-expect-error TS(2786): 'SpeedDialAction' cannot be used as a JSX componen... Remove this comment to see the full error message
        <SpeedDialAction
          icon="trash"
          label="Delete row"
          index={2}
          visible={selectedRowIndex !== undefined && selectedRowIndex !== -1}
          onClick={this.deleteRow} />
        // @ts-expect-error TS(2786): 'SpeedDialAction' cannot be used as a JSX componen... Remove this comment to see the full error message
        <SpeedDialAction
          icon="edit"
          label="Edit row"
          index={3}
          visible={selectedRowIndex !== undefined && selectedRowIndex !== -1}
          onClick={this.editRow} />
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Direction: </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              dataSource={optionDirections}
              defaultValue="auto"
              inputAttr={directionLabel}
              onSelectionChanged={this.directionChanged}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
