import React from 'react';

import Scheduler, { Resource } from 'devextreme-react/scheduler';

import { data, resourcesData, priorityData } from './data.js';

const currentDate = new Date(2021, 1, 2);
const views = ['timelineDay', 'timelineWeek', 'timelineWorkWeek', 'timelineMonth'];
const groups = ['priority'];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        // @ts-expect-error TS(2322): Type 'string[]' is not assignable to type '("timel... Remove this comment to see the full error message
        views={views}
        defaultCurrentView="timelineMonth"
        defaultCurrentDate={currentDate}
        height={580}
        groups={groups}
        cellDuration={60}
        firstDayOfWeek={0}
        startDayHour={8}
        endDayHour={20}>
        // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
        <Resource
          // @ts-expect-error TS(2322): Type '{ fieldExpr: string; allowMultiple: boolean;... Remove this comment to see the full error message
          fieldExpr="ownerId"
          allowMultiple={true}
          dataSource={resourcesData}
          label="Owner"
          useColorAsDefault={ true }
        />
        // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
        <Resource
          // @ts-expect-error TS(2322): Type '{ fieldExpr: string; allowMultiple: boolean;... Remove this comment to see the full error message
          fieldExpr="priority"
          allowMultiple={false}
          dataSource={priorityData}
          label="Priority"
        />
      </Scheduler>
    );
  }
}

export default App;
