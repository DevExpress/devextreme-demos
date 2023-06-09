import React from 'react';
import DataGrid, {
  Column, Editing, ValidationRule, Button, Toolbar, Item, Scrolling,
} from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
import Guid from 'devextreme/core/guid';
import { dataSource, positionLabel, scrollingModeLabel } from './data.js';

const newRowPositionOptions = ['first', 'last', 'pageTop', 'pageBottom', 'viewportTop', 'viewportBottom'];
const scrollingModeOptions = ['standard', 'virtual'];

function App() {
  const [newRowPosition, setNewRowPosition] = React.useState('viewportTop');
  const [scrollingMode, setScrollingMode] = React.useState('standard');
  const [changes, setChanges] = React.useState([]);
  const [editRowKey, setEditRowKey] = React.useState(null);

  const onAddButtonClick = React.useCallback((e) => {
    const key = new Guid().toString();
    setChanges([{
      key,
      type: 'insert',
      insertAfterKey: e.row.key,
    }]);
    setEditRowKey(key);
  }, []);

  const isAddButtonVisible = React.useCallback(({ row }) => !row.isEditing, []);

  const onRowInserted = React.useCallback((e) => {
    e.component.navigateToRow(e.key);
  }, []);

  return <React.Fragment>
    // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
    <DataGrid
      id='gridContainer'
      dataSource={dataSource}
      showBorders={true}
      columnAutoWidth={true}
      remoteOperations={true}
      onRowInserted={onRowInserted}
    >
      // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
      <Scrolling
        // @ts-expect-error TS(2322): Type '{ mode: any; }' is not assignable to type 'I... Remove this comment to see the full error message
        mode={scrollingMode}
      />
      // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
      <Editing
        // @ts-expect-error TS(2322): Type '{ mode: string; allowAdding: boolean; allowD... Remove this comment to see the full error message
        mode='row'
        allowAdding={true}
        allowDeleting={true}
        allowUpdating={true}
        confirmDelete={false}
        useIcons={true}
        newRowPosition={newRowPosition}
        changes={changes}
        onChangesChange={setChanges}
        editRowKey={editRowKey}
        onEditRowKeyChange={setEditRowKey}
      />

      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField='OrderID' allowEditing={false} />
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField='OrderDate' dataType='date'>
        // @ts-expect-error TS(2786): 'ValidationRule' cannot be used as a JSX component... Remove this comment to see the full error message
        <ValidationRule type='required' />
      </Column>
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField='ShipName' />
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField='ShipCity' />
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField='ShipPostalCode' />
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField='ShipCountry' />
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column type='buttons'>
        // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
        <Button icon='add'
          onClick={onAddButtonClick}
          visible={isAddButtonVisible}
        />
        // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
        <Button name='delete' />
        // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
        <Button name='save' />
        // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
        <Button name='cancel' />
      </Column>

      // @ts-expect-error TS(2786): 'Toolbar' cannot be used as a JSX component.
      <Toolbar>
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item name='addRowButton' showText='always' />
      </Toolbar>
    </DataGrid>

    <div className='options'>
      <div className='caption'>Options</div>
      <div className='option-container'>
        <div className='option'>
          <span>New Row Position</span>
          // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
          <SelectBox
            id='newRowPositionSelectBox'
            value={newRowPosition}
            inputAttr={positionLabel}
            items={newRowPositionOptions}
            onValueChange={setNewRowPosition}
          />
        </div>
        <div className='option'>
          <span>Scrolling Mode</span>
          // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
          <SelectBox
            id='scrollingModeSelectBox'
            value={scrollingMode}
            inputAttr={scrollingModeLabel}
            items={scrollingModeOptions}
            onValueChange={setScrollingMode}
          />
        </div>
      </div>
    </div>
  </React.Fragment>;
}

export default App;
