import React from 'react';

import DataGrid, { Column, Editing, Lookup } from 'devextreme-react/data-grid';
import service from './data.js';

class App extends React.Component {
  cities: any;

  dataSource: any;

  defaultSetCellValue: any;

  states: any;

  constructor(props) {
    super(props);
    this.dataSource = service.getEmployees();
    this.states = service.getStates();
    this.cities = service.getCities();
    this.getFilteredCities = this.getFilteredCities.bind(this);
  }

  getFilteredCities(options) {
    return {
      store: this.cities,
      filter: options.data ? ['StateID', '=', options.data.StateID] : null,
    };
  }

  onEditorPreparing(e) {
    if (e.parentType === 'dataRow' && e.dataField === 'CityID') {
      e.editorOptions.disabled = (typeof e.row.data.StateID !== 'number');
    }
  }

  setStateValue(rowData, value) {
    rowData.CityID = null;
    this.defaultSetCellValue(rowData, value);
  }

  render() {
    return (
      <div id="data-grid-demo">
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          dataSource={this.dataSource}
          keyExpr="ID"
          showBorders={true}
          onEditorPreparing={this.onEditorPreparing}
        >
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing
            // @ts-expect-error TS(2322): Type '{ children: never[]; mode: string; allowUpda... Remove this comment to see the full error message
            mode="row"
            allowUpdating={true}
            allowAdding={true}>
          </Editing>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="FirstName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="LastName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Position" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="StateID" caption="State" setCellValue={this.setStateValue}>
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup dataSource={this.states} displayExpr="Name" valueExpr="ID" />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CityID" caption="City">
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup dataSource={this.getFilteredCities} displayExpr="Name" valueExpr="ID" />
          </Column>
        </DataGrid>
      </div>
    );
  }
}

export default App;
