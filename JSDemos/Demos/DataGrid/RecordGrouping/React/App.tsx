import React from 'react';

import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Paging,
  SearchPanel,
} from 'devextreme-react/data-grid';
import CheckBox from 'devextreme-react/check-box';
import { customers } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      autoExpandAll: true,
    };

    this.onAutoExpandAllChanged = this.onAutoExpandAllChanged.bind(this);
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          dataSource={customers}
          keyExpr="ID"
          allowColumnReordering={true}
          showBorders={true}
        >
          // @ts-expect-error TS(2786): 'GroupPanel' cannot be used as a JSX component.
          <GroupPanel visible={true} />
          // @ts-expect-error TS(2786): 'SearchPanel' cannot be used as a JSX component.
          <SearchPanel visible={true} />
          // @ts-expect-error TS(2786): 'Grouping' cannot be used as a JSX component.
          <Grouping autoExpandAll={this.state.autoExpandAll} />
          // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
          <Paging defaultPageSize={10} />

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CompanyName" dataType="string" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Phone" dataType="string" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Fax" dataType="string" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="City" dataType="string" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="State" dataType="string" groupIndex={0} />
        </DataGrid>

        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox text="Expand All Groups"
              id="autoExpand"
              value={this.state.autoExpandAll}
              onValueChanged={this.onAutoExpandAllChanged} />
          </div>
        </div>
      </div>
    );
  }

  onAutoExpandAllChanged() {
    this.setState({
      autoExpandAll: !this.state.autoExpandAll,
    });
  }
}

export default App;
