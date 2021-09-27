import React from 'react';
import DataGrid, {
  Editing, Scrolling, Column, Button, Toolbar, Item,
} from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
import { generateData } from './data.js';

const dataSource = generateData(100000);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.dataGrid = React.createRef();

    this.state = {
      newRowPositionOptions: ['first', 'last', 'pageBottom', 'pageTop', 'viewportBottom', 'viewportTop'],
      newRowPosition: 'viewportTop',
      changes: [],
      scrollingModeOptions: ['infinite', 'standard', 'virtual'],
      scrollingMode: 'standard',
    };

    this.addButtonClick = this.addButtonClick.bind(this);
    this.newRowPositionChanged = this.newRowPositionChanged.bind(this);
    this.scrollingModeChanged = this.scrollingModeChanged.bind(this);
    this.onOptionChanged = this.onOptionChanged.bind(this);
  }

  newRowPositionChanged(e) {
    this.setState({
      newRowPosition: e.value,
    });
  }

  scrollingModeChanged(e) {
    this.setState({
      scrollingMode: e.value,
    });
  }

  addButtonClick(e) {
    this.setState({
      changes: [...this.state.changes, {
        type: 'insert',
        insertAfterKey: e.row.key,
      }],
    });
    this.dataGrid.current.instance.editCell(e.row.rowIndex + 1, 'id');
  }

  onOptionChanged(e) {
    if (e.fullName === 'editing.changes') {
      const changes = e.value;
      this.setState({ changes });
    }
  }

  render() {
    return (
      <React.Fragment>
        <DataGrid
          id="gridContainer"
          ref={this.dataGrid}
          dataSource={dataSource}
          showBorders={true}
          onOptionChanged={this.onOptionChanged}
        >
          <Editing
            allowAdding={true}
            allowDeleting={true}
            allowUpdating={true}
            confirmDelete={false}
            mode="cell"
            useIcons={true}
            newRowPosition={this.state.newRowPosition}
            changes={this.state.changes}
          />

          <Scrolling
            mode={this.state.scrollingMode}
          />

          <Column dataField="id" />
          <Column dataField="firstName" />
          <Column dataField="lastName" />
          <Column dataField="gender" />
          <Column dataField="birthDate" />
          <Column type="buttons">
            <Button icon="add" onClick={this.addButtonClick} />
            <Button name="delete" />
          </Column>

          <Toolbar>
            <Item name="addRowButton" showText="always" />
          </Toolbar>
        </DataGrid>

        <div className="options">
          <div className="caption">Options</div>
          <div className="option-container">
            <div className="option">
              <span>New Row Position</span>
              <SelectBox
                items={this.state.newRowPositionOptions}
                value={this.state.newRowPosition}
                onValueChanged={this.newRowPositionChanged}
              />
            </div>
            <div className="option">
              <span>Scrolling mode</span>
              <SelectBox
                items={this.state.scrollingModeOptions}
                value={this.state.scrollingMode}
                onValueChanged={this.scrollingModeChanged}
              />
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
