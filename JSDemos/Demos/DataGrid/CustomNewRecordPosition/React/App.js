import React from 'react';
import DataGrid, {
  Column, Editing, ValidationRule, Button, Toolbar, Item, Scrolling,
} from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
import Guid from 'devextreme/core/guid';
import { dataSource } from './data.js';

const newRowPositionOptions = ['first', 'last', 'pageTop', 'pageBottom', 'viewportTop', 'viewportBottom'];
const scrollingModeOptions = ['standard', 'virtual'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRowPosition: 'viewportTop',
      scrollingMode: 'standard',
      changes: [],
      editRowKey: null,
    };

    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.isAddButtonVisible = this.isAddButtonVisible.bind(this);
    this.onRowInserted = this.onRowInserted.bind(this);
    this.newRowPositionChanged = this.newRowPositionChanged.bind(this);
    this.scrollingModeChanged = this.scrollingModeChanged.bind(this);
    this.onOptionChanged = this.onOptionChanged.bind(this);
  }

  onOptionChanged(e) {
    if (['editing.changes', 'editing.editRowKey'].includes(e.fullName)) {
      const optionName = e.fullName.split('.')[1];
      this.setState({ [optionName]: e.value });
    }
  }

  onAddButtonClick(e) {
    const key = new Guid().toString();
    this.setState({
      changes: [{
        key,
        type: 'insert',
        insertAfterKey: e.row.key,
      }],
      editRowKey: key,
    });
  }

  isAddButtonVisible({ row }) {
    return !row.isEditing;
  }

  newRowPositionChanged(value) {
    this.setState({
      newRowPosition: value,
    });
  }

  scrollingModeChanged(value) {
    this.setState({
      scrollingMode: value,
    });
  }

  onRowInserted(e) {
    e.component.navigateToRow(e.key);
  }

  render() {
    return (
      <React.Fragment>
        <DataGrid
          id='gridContainer'
          dataSource={dataSource}
          showBorders={true}
          columnAutoWidth={true}
          remoteOperation={true}
          onRowInserted={this.onRowInserted}
          onOptionChanged={this.onOptionChanged}
        >
          <Scrolling
            mode={this.state.scrollingMode}
          />
          <Editing
            mode='row'
            allowAdding={true}
            allowDeleting={true}
            allowUpdating={true}
            confirmDelete={false}
            useIcons={true}
            newRowPosition={this.state.newRowPosition}
            changes={this.state.changes}
            editRowKey={this.state.editRowKey}
          />

          <Column dataField='OrderID' allowEditing={false} />
          <Column dataField='OrderDate' dataType='date'>
            <ValidationRule type='required' />
          </Column>
          <Column dataField='ShipName' />
          <Column dataField='ShipCity' />
          <Column dataField='ShipPostalCode' />
          <Column dataField='ShipCountry' />
          <Column type='buttons'>
            <Button icon='add'
              onClick={this.onAddButtonClick}
              visible={this.isAddButtonVisible}
            />
            <Button name='delete' />
            <Button name='save' />
            <Button name='cancel' />
          </Column>

          <Toolbar>
            <Item name='addRowButton' showText='always' />
          </Toolbar>
        </DataGrid>

        <div className='options'>
          <div className='caption'>Options</div>
          <div className='option-container'>
            <div className='option'>
              <span>New Row Position</span>
              <SelectBox
                id='newRowPositionSelectBox'
                value={this.state.newRowPosition}
                items={newRowPositionOptions}
                onValueChange={this.newRowPositionChanged}
              />
            </div>
            <div className='option'>
              <span>Scrolling Mode</span>
              <SelectBox
                id='scrollingModeSelectBox'
                value={this.state.scrollingMode}
                items={scrollingModeOptions}
                onValueChange={this.scrollingModeChanged}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
