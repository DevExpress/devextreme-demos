import React from 'react';
import RangeSelector, {
  Margin, Scale, Label, Behavior, Format,
} from 'devextreme-react/range-selector';
import DataGrid from 'devextreme-react/data-grid';
import { employees } from './data.js';

const columns = ['FirstName', 'LastName', 'BirthYear', 'City', 'Title'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      selectedEmployees: employees,
    };
    this.filterEmployees = this.filterEmployees.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
        <RangeSelector
          id="range-selector"
          title="Filter Employee List by Birth Year"
          dataSource={employees}
          dataSourceField="BirthYear"
          onValueChanged={this.filterEmployees}
        >
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin top={20} />
          // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
          <Scale tickInterval={1} minorTickInterval={1}>
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label>
              // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
              <Format type="decimal" />
            </Label>
          </Scale>
          // @ts-expect-error TS(2786): 'Behavior' cannot be used as a JSX component.
          <Behavior valueChangeMode="onHandleMove" />
        </RangeSelector>
        <h2 className="grid-header">Selected Employees</h2>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          dataSource={this.state.selectedEmployees}
          columns={columns}
          showBorders={true}
          columnAutoWidth={true}
        />
      </React.Fragment>
    );
  }

  filterEmployees({ value }) {
    this.setState({
      selectedEmployees: employees
        .filter((employee) => (employee.BirthYear >= value[0] && employee.BirthYear <= value[1])
          || !value.length),
    });
  }
}

export default App;
