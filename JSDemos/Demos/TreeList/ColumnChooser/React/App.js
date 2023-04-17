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

const expandedRowKeys = [1, 5];

const searchEditorOptions = { placeholder: 'Search column' };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: columnChooserModes[0].key,
      searchEnabled: true,
      allowSelectAll: true,
      selectByClick: true,
    };

    this.onModeValueChanged = this.onModeValueChanged.bind(this);
    this.onSearchEnabledValueChanged = this.onSearchEnabledValueChanged.bind(this);
    this.onAllowSelectAllValueChanged = this.onAllowSelectAllValueChanged.bind(this);
    this.onSelectByClickValueChanged = this.onSelectByClickValueChanged.bind(this);
  }

  render() {
    const {
      mode, searchEnabled, allowSelectAll, selectByClick,
    } = this.state;

    return (
      <div>
        <TreeList
          id="employees"
          dataSource={employees}
          columnAutoWidth={true}
          showRowLines={true}
          showBorders={true}
          defaultExpandedRowKeys={expandedRowKeys}
          keyExpr="ID"
          parentIdExpr="Head_ID"
        >
          <Column dataField="Title" caption="Position" />
          <Column allowHiding={false} dataField="Full_Name" />
          <Column dataField="City" />
          <Column dataField="State" />
          <Column dataField="Mobile_Phone" />
          <Column visible={false} dataField="Email" />
          <Column dataField="Hire_Date" dataType="date" />
          <Column visible={false} dataField="Skype" />
          <ColumnChooser enabled={true} mode={mode}>
            <ColumnChooserSearch
              enabled={searchEnabled}
              editorOptions={searchEditorOptions} />

            <ColumnChooserSelection
              allowSelectAll={allowSelectAll}
              selectByClick={selectByClick} />
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
}

export default App;
