import React from 'react';

import TreeList, {
  Column,
  Editing,
  KeyboardNavigation,
} from 'devextreme-react/tree-list';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';
import { employees } from './data.js';

const expandedRowKeys = [1, 2, 4, 5];

class App extends React.Component {
  enterKeyActions: any;

  enterKeyDirections: any;

  onFocusedCellChanging: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.enterKeyActions = ['startEdit', 'moveFocus'];
    this.enterKeyDirections = ['none', 'column', 'row'];
    this.state = {
      editOnKeyPress: true,
      enterKeyAction: 'moveFocus',
      enterKeyDirection: 'column',
    };
    this.onFocusedCellChanging = (e) => {
      e.isHighlighted = true;
    };
    this.editOnKeyPressChanged = this.editOnKeyPressChanged.bind(this);
    this.enterKeyActionChanged = this.enterKeyActionChanged.bind(this);
    this.enterKeyDirectionChanged = this.enterKeyDirectionChanged.bind(this);
  }

  editOnKeyPressChanged(e) {
    this.setState({ editOnKeyPress: e.value });
  }

  enterKeyActionChanged(e) {
    this.setState({ enterKeyAction: e.value });
  }

  enterKeyDirectionChanged(e) {
    this.setState({ enterKeyDirection: e.value });
  }

  render() {
    return (
      <div id="tree-list-demo">
        // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
        <TreeList
          id="employees"
          dataSource={employees}
          keyExpr="ID"
          parentIdExpr="Head_ID"
          columnAutoWidth={true}
          defaultExpandedRowKeys={expandedRowKeys}
          onFocusedCellChanging={this.onFocusedCellChanging}>
          // @ts-expect-error TS(2786): 'KeyboardNavigation' cannot be used as a JSX compo... Remove this comment to see the full error message
          <KeyboardNavigation
            // @ts-expect-error TS(2322): Type '{ editOnKeyPress: any; enterKeyAction: any; ... Remove this comment to see the full error message
            editOnKeyPress={this.state.editOnKeyPress}
            enterKeyAction={this.state.enterKeyAction}
            enterKeyDirection={this.state.enterKeyDirection} />
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing
            // @ts-expect-error TS(2322): Type '{ mode: string; allowUpdating: boolean; star... Remove this comment to see the full error message
            mode="batch"
            allowUpdating={true}
            startEditAction="dblClick" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: never[]; dataField: string; }' i... Remove this comment to see the full error message
            dataField="Full_Name">
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: never[]; dataField: string; capt... Remove this comment to see the full error message
            dataField="Prefix"
            caption="Title">
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: never[]; dataField: string; capt... Remove this comment to see the full error message
            dataField="Title"
            caption="Position">
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: never[]; dataField: string; }' i... Remove this comment to see the full error message
            dataField="City">
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: never[]; dataField: string; data... Remove this comment to see the full error message
            dataField="Hire_Date"
            dataType="date">
          </Column>
        </TreeList>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option-container">
            <div className="option check-box">
              // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
              <CheckBox text="Edit On Key Press"
                value={this.state.editOnKeyPress}
                onValueChanged={this.editOnKeyPressChanged} />
            </div>
            <div className="option">
              <span className="option-caption">Enter Key Action</span>
              // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
              <SelectBox className="select"
                items={this.enterKeyActions}
                value={this.state.enterKeyAction}
                onValueChanged={this.enterKeyActionChanged} />
            </div>
            <div className="option">
              <span className="option-caption">Enter Key Direction</span>
              // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
              <SelectBox className="select"
                items={this.enterKeyDirections}
                value={this.state.enterKeyDirection}
                onValueChanged={this.enterKeyDirectionChanged} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
