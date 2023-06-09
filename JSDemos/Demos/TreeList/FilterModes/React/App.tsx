import React from 'react';
import { TreeList, Column, SearchPanel } from 'devextreme-react/tree-list';
import SelectBox from 'devextreme-react/select-box';
import { employees, filterLabel } from './data.js';

class App extends React.Component {
  filterModes: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      filterMode: 'matchOnly',
    };
    this.filterModes = ['matchOnly', 'withAncestors', 'fullBranch'];
    this.onFilterModeChange = this.onFilterModeChange.bind(this);
  }

  onFilterModeChange(args) {
    this.setState({
      filterMode: args.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
        <TreeList
          id="employees"
          dataSource={employees}
          showRowLines={true}
          showBorders={true}
          columnAutoWidth={true}
          keyExpr="ID"
          parentIdExpr="Head_ID"
          filterMode={this.state.filterMode}>
          // @ts-expect-error TS(2786): 'SearchPanel' cannot be used as a JSX component.
          <SearchPanel
            // @ts-expect-error TS(2322): Type '{ visible: boolean; defaultText: string; }' ... Remove this comment to see the full error message
            visible={true}
            defaultText="Manager" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; dataTy... Remove this comment to see the full error message
            dataField="Title"
            caption="Position"
            dataType="string" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
            dataField="Full_Name"
            dataType="string" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
            dataField="City"
            dataType="string" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
            dataField="State"
            dataType="string" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
            dataField="Mobile_Phone"
            dataType="string" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
            dataField="Hire_Date"
            dataType="date" />
        </TreeList>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Filter Mode </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              items={this.filterModes}
              value={this.state.filterMode}
              inputAttr={filterLabel}
              onValueChanged={this.onFilterModeChange}>
            </SelectBox>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
