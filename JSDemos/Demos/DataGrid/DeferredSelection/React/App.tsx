import React from 'react';
import DataGrid, { Column, FilterRow, Selection } from 'devextreme-react/data-grid';
import Button from 'devextreme-react/button';
import query from 'devextreme/data/query';
import 'devextreme/data/odata/store';

let dataGrid;
const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
const dataSource = {
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
    'Task_Due_Date',
    'Task_Status',
    'ResponsibleEmployee/Employee_Full_Name',
  ],
};
const selectionFilter = ['Task_Status', '=', 'Completed'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      taskCount: 0,
      peopleCount: 0,
      avgDuration: 0,
    };
    this.onInitialized = this.onInitialized.bind(this);
    this.calculateStatistics = this.calculateStatistics.bind(this);
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          id="grid-container"
          // @ts-expect-error TS(2322): Type '{ store: { type: string; url: string; key: s... Remove this comment to see the full error message
          dataSource={dataSource}
          showBorders={true}
          defaultSelectionFilter={selectionFilter}
          onInitialized={this.onInitialized}
        >
          // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
          <Selection mode="multiple" deferred={true} />
          // @ts-expect-error TS(2786): 'FilterRow' cannot be used as a JSX component.
          <FilterRow visible={true} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ caption: string; dataField: string; }' is ... Remove this comment to see the full error message
            caption="Subject"
            dataField="Task_Subject"
          />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ caption: string; dataField: string; width:... Remove this comment to see the full error message
            caption="Start Date"
            dataField="Task_Start_Date"
            width="auto"
            dataType="date"
          />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ caption: string; dataField: string; width:... Remove this comment to see the full error message
            caption="Due Date"
            dataField="Task_Due_Date"
            width="auto"
            dataType="date"
          />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ caption: string; dataField: string; width:... Remove this comment to see the full error message
            caption="Assigned To"
            dataField="ResponsibleEmployee.Employee_Full_Name"
            width="auto"
            allowSorting={false}
          />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ caption: string; width: string; dataField:... Remove this comment to see the full error message
            caption="Status"
            width="auto"
            dataField="Task_Status"
          />
        </DataGrid>
        <div className="selection-summary center">
          // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
          <Button
            id="calculateButton"
            text="Get statistics on the selected tasks"
            type="default"
            onClick={this.calculateStatistics}
          />
          <div>
            <div className="column">
              <span className="text count">Task count:</span>
              &nbsp;
              <span className="value">{this.state.taskCount}</span>
            </div>
            &nbsp;
            <div className="column">
              <span className="text people-count">People assigned:</span>
              &nbsp;
              <span className="value">{this.state.peopleCount}</span>
            </div>
            &nbsp;
            <div className="column">
              <span className="text avg-duration">Average task duration (days):</span>
              &nbsp;
              <span className="value">{this.state.avgDuration}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onInitialized(e) {
    dataGrid = e.component;
    this.calculateStatistics();
  }

  calculateStatistics() {
    dataGrid.getSelectedRowsData().then((rowData) => {
      let commonDuration = 0;

      for (let i = 0; i < rowData.length; i += 1) {
        commonDuration += rowData[i].Task_Due_Date - rowData[i].Task_Start_Date;
      }
      commonDuration /= MILLISECONDS_IN_DAY;
      this.setState({
        taskCount: rowData.length,
        peopleCount: query(rowData)
          .groupBy('ResponsibleEmployee.Employee_Full_Name')
          .toArray()
          .length,
        avgDuration: Math.round(commonDuration / rowData.length) || 0,
      });
    });
  }
}

export default App;
