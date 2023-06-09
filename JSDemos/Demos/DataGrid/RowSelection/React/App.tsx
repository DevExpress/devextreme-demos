import React from 'react';
import DataGrid, { Column, Selection } from 'devextreme-react/data-grid';
import { employees } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      showEmployeeInfo: false,
      selectedRowPicture: '',
      selectedRowNotes: '',
    };

    this.onSelectionChanged = this.onSelectionChanged.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          dataSource={employees}
          showBorders={true}
          hoverStateEnabled={true}
          keyExpr="ID"
          onSelectionChanged={this.onSelectionChanged}
        >
          // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
          <Selection mode="single" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Prefix" caption="Title" width={70} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="FirstName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="LastName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Position" width={180} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="BirthDate" dataType="date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="HireDate" dataType="date" />
        </DataGrid>
        {
          this.state.showEmployeeInfo
          && <div id="employee-info">
            <img src={this.state.selectedRowPicture} className="employee-photo" />
            <p className="employee-notes">{this.state.selectedRowNotes}</p>
          </div>
        }
      </React.Fragment>
    );
  }

  onSelectionChanged({ selectedRowsData }) {
    const data = selectedRowsData[0];

    this.setState({
      showEmployeeInfo: !!data,
      selectedRowNotes: data && data.Notes,
      selectedRowPicture: data && data.Picture,
    });
  }
}

export default App;
