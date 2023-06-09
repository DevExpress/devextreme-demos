import React from 'react';

import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup,
} from 'devextreme-react/data-grid';
import CheckBox from 'devextreme-react/check-box';
import SelectBox from 'devextreme-react/select-box';
import { employees, states } from './data.js';

const startEditActions = ['click', 'dblClick'];
const actionLabel = { 'aria-label': 'Action' };

class App extends React.Component {
  setState: any;

  state: any;

  constructor() {
    super();
    this.state = {
      selectTextOnEditStart: true,
      startEditAction: 'click',
    };
    this.onSelectTextOnEditStartChanged = this.onSelectTextOnEditStartChanged.bind(this);
    this.onStartEditActionChanged = this.onStartEditActionChanged.bind(this);
  }

  onSelectTextOnEditStartChanged(args) {
    this.setState({
      selectTextOnEditStart: args.value,
    });
  }

  onStartEditActionChanged(args) {
    this.setState({
      startEditAction: args.value,
    });
  }

  render() {
    return (
      <div id="data-grid-demo">
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          dataSource={employees}
          keyExpr="ID"
          showBorders={true}
        >
          // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
          <Paging enabled={false} />
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing
            // @ts-expect-error TS(2322): Type '{ mode: string; allowUpdating: boolean; allo... Remove this comment to see the full error message
            mode="batch"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}
            selectTextOnEditStart={this.state.selectTextOnEditStart}
            startEditAction={this.state.startEditAction} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Prefix" caption="Title" width={70} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="FirstName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="LastName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Position" width={170} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="StateID" caption="State" width={125}>
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="BirthDate" dataType="date" />
        </DataGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox
              value={this.state.selectTextOnEditStart}
              text="Select Text on Edit Start"
              onValueChanged={this.onSelectTextOnEditStartChanged}
            />
          </div>
          <div className="option">
            <span>Start Edit Action</span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              items={startEditActions}
              inputAttr={actionLabel}
              value={this.state.startEditAction}
              onValueChanged={this.onStartEditActionChanged}>
            </SelectBox>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
