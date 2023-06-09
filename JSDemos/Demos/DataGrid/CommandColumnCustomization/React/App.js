import React, { useState } from 'react';
import DataGrid, {
  Button, Column, Editing, Lookup,
} from 'devextreme-react/data-grid';

import service from './data.js';

const App = () => {
  const [employees, setEmployees] = useState(service.getEmployees());
  const states = service.getStates();

  const isChief = (position) => {
    return position && ['CEO', 'CMO'].indexOf(position.trim().toUpperCase()) >= 0;
  }

  const allowDeleting = (e) => {
    return !isChief(e.row.data.Position);
  }

  const onRowValidating = (e) => {
    const position = e.newData.Position;

    if (isChief(position)) {
      e.errorText = `The company can have only one ${position.toUpperCase()}. Please choose another position.`;
      e.isValid = false;
    }
  }

  const onEditorPreparing = (e) => {
    if (e.parentType === 'dataRow' && e.dataField === 'Position') {
      e.editorOptions.readOnly = isChief(e.value);
    }
  }

  const isCloneIconVisible = (e) => {
    return !e.row.isEditing;
  }

  const isCloneIconDisabled = (e) => {
    return isChief(e.row.data.Position);
  }

  const cloneIconClick = (e) => {
    const clonedItem = { ...e.row.data, ID: service.getMaxID() };
    setEmployees([...employees.slice(0, e.row.rowIndex + 1), clonedItem, ...employees.slice(e.row.rowIndex + 1)]);
    e.event.preventDefault();
  }

  return (
    <DataGrid
      id="gridContainer"
      dataSource={employees}
      keyExpr="ID"
      showBorders={true}
      onRowValidating={onRowValidating}
      onEditorPreparing={onEditorPreparing}>
      <Editing
        mode="row"
        useIcons={true}
        allowUpdating={true}
        allowDeleting={allowDeleting} />
      <Column type="buttons" width={110}>
        <Button name="edit" />
        <Button name="delete" />
        <Button hint="Clone" icon="copy" visible={isCloneIconVisible} disabled={isCloneIconDisabled} onClick={cloneIconClick} />
      </Column>
      <Column dataField="Prefix" caption="Title" />
      <Column dataField="FirstName" />
      <Column dataField="LastName" />
      <Column dataField="Position" width={130} />
      <Column dataField="StateID" caption="State" width={125}>
        <Lookup dataSource={states} displayExpr="Name" valueExpr="ID" />
      </Column>
      <Column dataField="BirthDate" dataType="date" width={125} />
    </DataGrid>
  );
}

export default App;