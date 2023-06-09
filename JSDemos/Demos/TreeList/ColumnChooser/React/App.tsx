import React from 'react';
import {
  TreeList, Column, ColumnChooser, ColumnChooserSearch, ColumnChooserSelection, Position,
} from 'devextreme-react/tree-list';
import { SelectBox } from 'devextreme-react/select-box';
import { CheckBox } from 'devextreme-react/check-box';
import { employees, columnChooserModeLabel } from './data.js';

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
  setState: any;

  state: any;

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

    const isDragMode = mode === columnChooserModes[0].key;

    return (
      <div>
        // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
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
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Title" caption="Position" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Full_Name" allowHiding={false} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="City" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="State" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column caption="Contacts">
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="Mobile_Phone" allowHiding={false} />
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="Email" />
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column visible={false} dataField="Skype" />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Hire_Date" dataType="date" />
          // @ts-expect-error TS(2786): 'ColumnChooser' cannot be used as a JSX component.
          <ColumnChooser
            // @ts-expect-error TS(2322): Type '{ children: Element[]; enabled: boolean; mod... Remove this comment to see the full error message
            enabled={true}
            mode={mode}
          >
            // @ts-expect-error TS(2786): 'Position' cannot be used as a JSX component.
            <Position
              // @ts-expect-error TS(2322): Type '{ my: string; at: string; of: string; }' is ... Remove this comment to see the full error message
              my="right top"
              at="right bottom"
              of=".dx-treelist-column-chooser-button"
            />

            // @ts-expect-error TS(2786): 'ColumnChooserSearch' cannot be used as a JSX comp... Remove this comment to see the full error message
            <ColumnChooserSearch
              // @ts-expect-error TS(2322): Type '{ enabled: any; editorOptions: { placeholder... Remove this comment to see the full error message
              enabled={searchEnabled}
              editorOptions={searchEditorOptions} />

            // @ts-expect-error TS(2786): 'ColumnChooserSelection' cannot be used as a JSX c... Remove this comment to see the full error message
            <ColumnChooserSelection
              // @ts-expect-error TS(2322): Type '{ allowSelectAll: any; selectByClick: any; r... Remove this comment to see the full error message
              allowSelectAll={allowSelectAll}
              selectByClick={selectByClick}
              recursive={recursive} />
          </ColumnChooser>
        </TreeList>
        <div className="options">
          <div className="caption">Options</div>

          <div className="selectboxes-container">
            <div className="option">
              <span>Column chooser mode</span>
              &nbsp;
              // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
              <SelectBox
                items={columnChooserModes}
                value={mode}
                valueExpr="key"
                displayExpr="name"
                inputAttr={columnChooserModeLabel}
                onValueChanged={this.onModeValueChanged}
              />
            </div>
          </div>

          <div className='checkboxes-container'>
            <div className="option">
              // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
              <CheckBox
                id="searchEnabled"
                defaultValue={searchEnabled}
                text="Search enabled"
                onValueChanged={this.onSearchEnabledValueChanged}
              />
            </div>
            <div className="option">
              // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
              <CheckBox
                id="allowSelectAll"
                defaultValue={allowSelectAll}
                text="Allow select all"
                onValueChanged={this.onAllowSelectAllValueChanged}
                disabled={isDragMode}
              />
            </div>
            <div className="option">
              // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
              <CheckBox
                id="selectByClick"
                defaultValue={selectByClick}
                text="Select by click"
                onValueChanged={this.onSelectByClickValueChanged}
                disabled={isDragMode}
              />
            </div>
            <div className="option">
              // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
              <CheckBox
                id="recursive"
                defaultValue={recursive}
                text="Recursive"
                onValueChanged={this.onRecursiveValueChanged}
                disabled={isDragMode}
              />
            </div>
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
