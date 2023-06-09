import React from 'react';

import Scheduler, { Resource } from 'devextreme-react/scheduler';

import { employees, data } from './data.js';
import DataCell from './DataCell.js';
import ResourceCell from './ResourceCell.js';

const currentDate = new Date(2021, 5, 2, 11, 30);
const groups = ['employeeID'];
const views = ['month'];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        dataCellComponent={DataCell}
        resourceCellComponent={ResourceCell}
        groups={groups}
        // @ts-expect-error TS(2322): Type 'string[]' is not assignable to type '("month... Remove this comment to see the full error message
        views={views}
        defaultCurrentView="month"
        defaultCurrentDate={currentDate}
        height={600}
        showAllDayPanel={true}
        firstDayOfWeek={1}
        startDayHour={8}
        endDayHour={18}
      >
        // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
        <Resource
          // @ts-expect-error TS(2322): Type '{ label: string; fieldExpr: string; dataSour... Remove this comment to see the full error message
          label="Employee"
          fieldExpr="employeeID"
          dataSource={employees}
          allowMultiple={false}
        />
      </Scheduler>
    );
  }
}

export default App;
