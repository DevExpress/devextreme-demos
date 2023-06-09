import React from 'react';
import DataGrid, {
  Button, Column, Editing, Lookup,
} from 'devextreme-react/data-grid';

import service from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  states: any;

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

  isChief(position) {
    return position && ['CEO', 'CMO'].indexOf(position.trim().toUpperCase()) >= 0;
  }

  allowDeleting(e) {
    return !this.isChief(e.row.data.Position);
  }

  onRowValidating(e) {
    const position = e.newData.Position;

    if (this.isChief(position)) {
      e.errorText = `The company can have only one ${position.toUpperCase()}. Please choose another position.`;
      e.isValid = false;
    }
  }

  onEditorPreparing(e) {
    if (e.parentType === 'dataRow' && e.dataField === 'Position') {
      e.editorOptions.readOnly = this.isChief(e.value);
    }
  }

  isCloneIconVisible(e) {
    return !e.row.isEditing;
  }

  isCloneIconDisabled(e) {
    return this.isChief(e.row.data.Position);
  }

  cloneIconClick(e) {
    const employees = [...this.state.employees];
    const clonedItem = { ...e.row.data, ID: service.getMaxID() };

    employees.splice(e.row.rowIndex, 0, clonedItem);
    this.setState({ employees });
    e.event.preventDefault();
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        id="gridContainer"
        dataSource={this.state.employees}
        keyExpr="ID"
        showBorders={true}
        onRowValidating={this.onRowValidating}
        onEditorPreparing={this.onEditorPreparing}>
        // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
        <Editing
          // @ts-expect-error TS(2322): Type '{ mode: string; useIcons: boolean; allowUpda... Remove this comment to see the full error message
          mode="row"
          useIcons={true}
          allowUpdating={true}
          allowDeleting={this.allowDeleting} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column type="buttons" width={110}>
          // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
          <Button name="edit" />
          // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
          <Button name="delete" />
          // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
          <Button hint="Clone" icon="copy" visible={this.isCloneIconVisible} disabled={this.isCloneIconDisabled} onClick={this.cloneIconClick} />
        </Column>
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
          <Lookup dataSource={this.states} displayExpr="Name" valueExpr="ID" />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="BirthDate" dataType="date" width={125} />
      </DataGrid>
    );
  }
}

export default App;
