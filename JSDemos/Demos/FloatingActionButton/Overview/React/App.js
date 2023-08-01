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

const App = () => {
  const [selectedRowIndex, setSelectedRowIndex] = React.useState(-1);
  const gridRef = React.useRef(null);

  const selectedChanged = React.useCallback((e) => {
    setSelectedRowIndex(e.component.getRowIndexByKey(e.selectedRowKeys[0]));
  }, []);

  const directionChanged = React.useCallback((e) => {
    config({
      floatingActionButtonConfig: directions[e.selectedItem],
    });

    repaintFloatingActionButton();
  }, []);

  const editRow = React.useCallback(() => {
    gridRef.current.instance.editRow(selectedRowIndex);
    gridRef.current.instance.deselectAll();
  }, [gridRef, selectedRowIndex]);

  const deleteRow = React.useCallback(() => {
    gridRef.current.instance.deleteRow(selectedRowIndex);
    gridRef.current.instance.deselectAll();
  }, [gridRef, selectedRowIndex]);

  const addRow = React.useCallback(() => {
    gridRef.current.instance.addRow();
    gridRef.current.instance.deselectAll();
  }, [gridRef]);

  return (
    <div>
      <DataGrid
        id="grid"
        dataSource={employees}
        keyExpr="ID"
        ref={gridRef}
        showBorders={true}
        onSelectionChanged={selectedChanged}>
        <Column dataField="Prefix" caption="Title" />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="Position" width={130} />
        <Column dataField="StateID" caption="State" width={125}>
          <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
        </Column>
        <Column dataField="BirthDate" dataType="date" width={125} />
        <Selection mode="single" />
        <Editing mode="popup">
          <Texts confirmDeleteMessage="" />
        </Editing>
      </DataGrid>
      <SpeedDialAction
        icon="add"
        label="Add row"
        index={1}
        onClick={addRow} />
      <SpeedDialAction
        icon="trash"
        label="Delete row"
        index={2}
        visible={selectedRowIndex !== undefined && selectedRowIndex !== -1}
        onClick={deleteRow} />
      <SpeedDialAction
        icon="edit"
        label="Edit row"
        index={3}
        visible={selectedRowIndex !== undefined && selectedRowIndex !== -1}
        onClick={editRow} />
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Direction: </span>
          <SelectBox
            dataSource={optionDirections}
            defaultValue="auto"
            inputAttr={directionLabel}
            onSelectionChanged={directionChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
