import React from 'react';
import DataGrid, { Column, Sorting } from 'devextreme-react/data-grid';
import CheckBox from 'devextreme-react/check-box';
import { employees } from './data.js';

class App extends React.Component {
  dataGrid: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      positionDisableSorting: false,
    };

    this.dataGrid = null;

    this.onPositionSortingChanged = this.onPositionSortingChanged.bind(this);
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          dataSource={employees}
          keyExpr="ID"
          showBorders={true}
          ref={(ref) => { this.dataGrid = ref; }}
        >
          // @ts-expect-error TS(2786): 'Sorting' cannot be used as a JSX component.
          <Sorting mode="multiple" />

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; width:... Remove this comment to see the full error message
            dataField="Prefix"
            caption="Title"
            width={70} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; defaultSortOrder: strin... Remove this comment to see the full error message
            dataField="FirstName"
            defaultSortOrder="asc" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; defaultSortOrder: strin... Remove this comment to see the full error message
            dataField="LastName"
            defaultSortOrder="asc" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="City" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="State" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; allowSorting: boolean; ... Remove this comment to see the full error message
            dataField="Position"
            allowSorting={!this.state.positionDisableSorting}
            width={130} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
            dataField="HireDate"
            dataType="date" />
        </DataGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox text="Disable Sorting for the Position Column"
              value={this.state.positionDisableSorting}
              onValueChanged={this.onPositionSortingChanged} />
          </div>
        </div>
      </div>
    );
  }

  onPositionSortingChanged() {
    this.setState({
      positionDisableSorting: !this.state.positionDisableSorting,
    });

    this.dataGrid.instance.columnOption(5, 'sortOrder', undefined);
  }
}

export default App;
