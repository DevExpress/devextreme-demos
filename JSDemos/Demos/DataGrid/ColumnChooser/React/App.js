import React from 'react';
import {
  TreeList, Column, ColumnChooser, ColumnChooserSearch, ColumnChooserSelection,
} from 'devextreme-react/tree-list';
import { SelectBox } from 'devextreme-react/select-box';
import { CheckBox } from 'devextreme-react/check-box';
import { employees } from './data.js';

const columnChooserModes = [{
  key: 'dragAndDrop',
  name: 'Drag and drop',
}, {
  key: 'select',
  name: 'Select',
}];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: columnChooserModes[1].key,
      searchEnabled: true,
      allowSelectAll: true,
      selectByClick: true,
      recursive: true,
    };

    this.onModeValueChanged = this.onModeValueChanged.bind(this);
    this.onSearchEnabledValueChanged = this.onSearchEnabledValueChanged.bind(this);
    this.onAllowSelectAllValueChanged = this.onAllowSelectAllValueChanged.bind(this);
    this.onSelectByClickValueChanged = this.onSelectByClickValueChanged.bind(this);
    this.onRecursiveValueChanged = this.onRecursiveValueChanged.bind(this);
  }

  render() {
    const {
      mode, searchEnabled, allowSelectAll, selectByClick, recursive,
    } = this.state;

    return (
      <div>
        <TreeList
          id="employees"
          dataSource={employees}
          columnAutoWidth={true}
          showRowLines={true}
          showBorders={true}
          keyExpr="ID"
        >
          <Column dataField="Title" caption="Position" />
          <Column allowHiding={false} dataField="Full_Name" />
          <Column dataField="City" />
          <Column dataField="State" />
          <Column caption="Contact information">
            <Column dataField="Mobile_Phone" allowHiding={false} />
            <Column visible={false} dataField="Email" />
            <Column visible={false} dataField="Skype" />
          </Column>
          <Column dataField="Hire_Date" dataType="date" />
          <ColumnChooser enabled={true} mode={mode}>
            <ColumnChooserSearch
              enabled={searchEnabled}
              editorOptions={{ placeholder: 'Search column' }} />

            <ColumnChooserSelection
              allowSelectAll={allowSelectAll}
              selectByClick={selectByClick}
              recursive={recursive} />
          </ColumnChooser>
        </TreeList>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Column chooser mode</span>
            &nbsp;
            <SelectBox
              items={columnChooserModes}
              value={mode}
              valueExpr="key"
              displayExpr="name"
              onValueChanged={this.onModeValueChanged}
            />
          </div>
          <div className="option">
            <CheckBox
              id="searchEnabled"
              defaultValue={searchEnabled}
              text="Search enabled"
              onValueChanged={this.onSearchEnabledValueChanged}
            />
          </div>
          <div className="option">
            <CheckBox
              id="allowSelectAll"
              defaultValue={allowSelectAll}
              text="Allow select all"
              onValueChanged={this.onAllowSelectAllValueChanged}
            />
          </div>
          <div className="option">
            <CheckBox
              id="selectByClick"
              defaultValue={selectByClick}
              text="Select by click"
              onValueChanged={this.onSelectByClickValueChanged}
            />
          </div>
          <div className="option">
            <CheckBox
              id="recursive"
              defaultValue={recursive}
              text="Recursive"
              onValueChanged={this.onRecursiveValueChanged}
            />
          </div>
        </div>
      </div>
    );
  }

  onModeValueChanged(e) {
    this.setState({
      mode: e.value,
    });
  }

  onSearchEnabledValueChanged(e) {
    this.setState({
      searchEnabled: e.value,
    });
  }

  onAllowSelectAllValueChanged(e) {
    this.setState({
      allowSelectAll: e.value,
    });
  }

  onSelectByClickValueChanged(e) {
    this.setState({
      selectByClick: e.value,
    });
  }

  onRecursiveValueChanged(e) {
    this.setState({
      recursive: e.value,
    });
  }
}

export default App;
