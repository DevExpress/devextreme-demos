import React from 'react';
import DataGrid, {
  Button, Column, Editing, Lookup,
} from 'devextreme-react/data-grid';

import service from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: service.getEmployees() };
    this.states = service.getStates();
    this.allowDeleting = this.allowDeleting.bind(this);
    this.onRowValidating = this.onRowValidating.bind(this);
    this.onEditorPreparing = this.onEditorPreparing.bind(this);
    this.isCloneIconVisible = this.isCloneIconVisible.bind(this);
    this.isCloneIconDisabled = this.isCloneIconDisabled.bind(this);
    this.cloneIconClick = this.cloneIconClick.bind(this);
  }

  isChief(position: string) {
    return position && ['CEO', 'CMO'].indexOf(position.trim().toUpperCase()) >= 0;
  }

  allowDeleting(e: { row: { data: { Position: any; }; }; }) {
    return !this.isChief(e.row.data.Position);
  }

  onRowValidating(e: { newData: { Position: any; }; errorText: string; isValid: boolean; }) {
    const position = e.newData.Position;

    if (this.isChief(position)) {
      e.errorText = `The company can have only one ${position.toUpperCase()}. Please choose another position.`;
      e.isValid = false;
    }
  }

  onEditorPreparing(e: { parentType: string; dataField: string; editorOptions: { readOnly: boolean; }; value: any; }) {
    if (e.parentType === 'dataRow' && e.dataField === 'Position') {
      e.editorOptions.readOnly = this.isChief(e.value);
    }
  }

  isCloneIconVisible(e: { row: { isEditing: any; }; }) {
    return !e.row.isEditing;
  }

  isCloneIconDisabled(e: { row: { data: { Position: any; }; }; }) {
    return this.isChief(e.row.data.Position);
  }

  cloneIconClick(e: { row: { data: any; rowIndex: number; }; event: { preventDefault: () => void; }; }) {
    const employees = [...this.state.employees];
    const clonedItem = { ...e.row.data, ID: service.getMaxID() };

    employees.splice(e.row.rowIndex, 0, clonedItem);
    this.setState({ employees });
    e.event.preventDefault();
  }

  render() {
    return (
      <DataGrid
        id="gridContainer"
        dataSource={this.state.employees}
        keyExpr="ID"
        showBorders={true}
        onRowValidating={this.onRowValidating}
        onEditorPreparing={this.onEditorPreparing}>
        <Editing
          mode="row"
          useIcons={true}
          allowUpdating={true}
          allowDeleting={this.allowDeleting} />
        <Column type="buttons" width={110}>
          <Button name="edit" />
          <Button name="delete" />
          <Button hint="Clone" icon="copy" visible={this.isCloneIconVisible} disabled={this.isCloneIconDisabled} onClick={this.cloneIconClick} />
        </Column>
        <Column dataField="Prefix" caption="Title" />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="Position" width={130} />
        <Column dataField="StateID" caption="State" width={125}>
          <Lookup dataSource={this.states} displayExpr="Name" valueExpr="ID" />
        </Column>
        <Column dataField="BirthDate" dataType="date" width={125} />
      </DataGrid>
    );
  }
}

export default App;
