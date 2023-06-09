import React from 'react';
import Scheduler, { Resource, View } from 'devextreme-react/scheduler';

import { data, priorityData, typeData } from './data.js';

const currentDate = new Date(2021, 3, 27);
const dayOfWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const typeGroups = ['typeId'];
const priorityGroups = ['priorityId'];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        defaultCurrentView="workWeek"
        showAllDayPanel={false}
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={7}
        endDayHour={23}
      >
        // @ts-expect-error TS(2786): 'View' cannot be used as a JSX component.
        <View
          // @ts-expect-error TS(2322): Type '{ type: string; }' is not assignable to type... Remove this comment to see the full error message
          type="day"
        />
        // @ts-expect-error TS(2786): 'View' cannot be used as a JSX component.
        <View
          // @ts-expect-error TS(2322): Type '{ type: string; groups: string[]; dateCellRe... Remove this comment to see the full error message
          type="week"
          groups={typeGroups}
          dateCellRender={renderDateCell}
        />
        // @ts-expect-error TS(2786): 'View' cannot be used as a JSX component.
        <View
          // @ts-expect-error TS(2322): Type '{ type: string; groups: string[]; startDayHo... Remove this comment to see the full error message
          type="workWeek"
          groups={priorityGroups}
          startDayHour={9}
          endDayHour={18}
          dateCellRender={renderDateCell}
        />
        // @ts-expect-error TS(2786): 'View' cannot be used as a JSX component.
        <View
          // @ts-expect-error TS(2322): Type '{ type: string; }' is not assignable to type... Remove this comment to see the full error message
          type="month"
        />
        // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
        <Resource
          // @ts-expect-error TS(2322): Type '{ dataSource: { text: string; id: number; co... Remove this comment to see the full error message
          dataSource={priorityData}
          fieldExpr="priorityId"
          label="Priority"
          allowMultiple={false}
        />
        // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
        <Resource
          // @ts-expect-error TS(2322): Type '{ dataSource: { text: string; id: number; co... Remove this comment to see the full error message
          dataSource={typeData}
          fieldExpr="typeId"
          label="Type"
          allowMultiple={false}
        />
      </Scheduler>
    );
  }
}

function renderDateCell(cellData) {
  return (
    <React.Fragment>
      <div className="name">{dayOfWeekNames[cellData.date.getDay()]}</div>
      <div className="number">{cellData.date.getDate()}</div>
    </React.Fragment>
  );
}

export default App;
