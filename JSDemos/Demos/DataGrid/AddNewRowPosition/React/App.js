import React from 'react';
import DataGrid, {
  Editing, Scrolling, Column, Button, Toolbar, Item,
} from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
import { generateData } from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: generateData(100000),
      newRowPositionOptions: ['first', 'last', 'pageBottom', 'pageTop', 'viewportBottom', 'viewportTop'],
      newRowPosition: 'viewportTop',
      changes: [],
      scrollingModeOptions: ['infinite', 'standard', 'virtual'],
      scrollingMode: 'standard',
    };

    this.addButtonClick = this.addButtonClick.bind(this);
    this.newRowPositionChanged = this.newRowPositionChanged.bind(this);
    this.scrollingModeChanged = this.scrollingModeChanged.bind(this);
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
  }

  render() {
    return (
      <React.Fragment>
        <DataGrid
          id="gridContainer"
          dataSource={this.state.dataSource}
          showBorders={true}
        >
          <Editing
            allowAdding={true}
            allowDeleting={true}
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
