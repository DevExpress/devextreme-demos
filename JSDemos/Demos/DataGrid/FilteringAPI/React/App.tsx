import React from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
import 'devextreme/data/odata/store';

const dataSourceOptions = {
  store: {
    type: 'odata',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks',
    key: 'Task_ID',
  },
  expand: 'ResponsibleEmployee',
  select: [
    'Task_ID',
    'Task_Subject',
    'Task_Start_Date',
    'Task_Status',
    'ResponsibleEmployee/Employee_Full_Name',
  ],
};

const statuses = ['All', 'Not Started', 'In Progress', 'Need Assistance', 'Deferred', 'Completed'];
const statusLabel = { 'aria-label': 'Status' };

class App extends React.Component {
  dataGrid: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      filterStatus: statuses[0],
    };

    this.onValueChanged = this.onValueChanged.bind(this);
  }

  render() {
    return (
      <div>
        <div className="left-side">
          <div className="logo">
            <img src="../../../../images/logo-devav.png" />
            &nbsp;
            <img src="../../../../images/logo-tasks.png" />
          </div>
        </div>
        <div className="right-side">
          // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
          <SelectBox
            items={statuses}
            inputAttr={statusLabel}
            value={this.state.filterStatus}
            // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
            onValueChanged={this.onValueChanged} />
        </div>

        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          id="gridContainer"
          ref={(ref) => { this.dataGrid = ref; }}
          // @ts-expect-error TS(2322): Type '{ store: { type: string; url: string; key: s... Remove this comment to see the full error message
          dataSource={dataSourceOptions}
          columnAutoWidth={true}
          showBorders={true}
        >
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; width: number; }' is no... Remove this comment to see the full error message
            dataField="Task_ID"
            width={80} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; dataTy... Remove this comment to see the full error message
            dataField="Task_Start_Date"
            caption="Start Date"
            dataType="date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ allowSorting: boolean; dataField: string; ... Remove this comment to see the full error message
            allowSorting={false}
            dataField="ResponsibleEmployee.Employee_Full_Name"
            cssClass="employee"
            caption="Assigned To" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; width:... Remove this comment to see the full error message
            dataField="Task_Subject"
            caption="Subject"
            width={350} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; }' is ... Remove this comment to see the full error message
            dataField="Task_Status"
            caption="Status" />
        </DataGrid>
      </div>
    );
  }

  onValueChanged({ value }) {
    const dataGrid = this.dataGrid.instance;

    if (value === 'All') {
      dataGrid.clearFilter();
    } else {
      dataGrid.filter(['Task_Status', '=', value]);
    }

    this.setState({
      filterStatus: value,
    });
  }
}

export default App;
