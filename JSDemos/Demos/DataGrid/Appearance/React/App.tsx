import React from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import CheckBox from 'devextreme-react/check-box';

import service from './data.js';

class App extends React.Component {
  employees: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.employees = service.getEmployees();
    this.state = {
      showColumnLines: false,
      showRowLines: true,
      showBorders: true,
      rowAlternationEnabled: true,
    };
    this.onValueChanged = this.onValueChanged.bind(this);
  }

  onValueChanged(e) {
    let optionName = null;
    switch (e.component.option('text')) {
      case 'Show Row Lines': {
        optionName = 'showRowLines';
        break;
      }
      case 'Show Borders': {
        optionName = 'showBorders';
        break;
      }
      case 'Alternating Row Color': {
        optionName = 'rowAlternationEnabled';
        break;
      }
      default: {
        optionName = 'showColumnLines';
        break;
      }
    }
    this.setState({
      [optionName]: e.value,
    });
  }

  render() {
    const {
      showColumnLines, showRowLines, showBorders, rowAlternationEnabled,
    } = this.state;
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid dataSource={this.employees}
          keyExpr="ID"
          showColumnLines={showColumnLines}
          showRowLines={showRowLines}
          showBorders={showBorders}
          rowAlternationEnabled={rowAlternationEnabled}>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Prefix" width={80} caption="Title" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="FirstName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="LastName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="City" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="State" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Position" width={130} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="BirthDate" width={100} dataType="date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="HireDate" width={100} dataType="date" />
        </DataGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox
              text="Show Column Lines"
              value={showColumnLines}
              onValueChanged={this.onValueChanged} />
          </div>
          &nbsp;
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox
              text="Show Row Lines"
              value={showRowLines}
              onValueChanged={this.onValueChanged} />
          </div>
          &nbsp;
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox
              text="Show Borders"
              value={showBorders}
              onValueChanged={this.onValueChanged} />
          </div>
          &nbsp;
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox
              text="Alternating Row Color"
              value={rowAlternationEnabled}
              onValueChanged={this.onValueChanged} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
