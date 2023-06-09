import React from 'react';

import Scheduler, { Resource } from 'devextreme-react/scheduler';

import { assignees, data, priorities } from './data.js';

const currentDate = new Date(2021, 4, 11);
const views = ['agenda'];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        // @ts-expect-error TS(2322): Type 'string[]' is not assignable to type '("agend... Remove this comment to see the full error message
        views={views}
        currentView="agenda"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9}>
        // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
        <Resource
          // @ts-expect-error TS(2322): Type '{ dataSource: { text: string; id: number; co... Remove this comment to see the full error message
          dataSource={assignees}
          allowMultiple={true}
          fieldExpr="assigneeId"
          label="Assignee"
          useColorAsDefault={true}
        />
        // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
        <Resource
          // @ts-expect-error TS(2322): Type '{ dataSource: { text: string; id: number; co... Remove this comment to see the full error message
          dataSource={priorities}
          fieldExpr="priorityId"
          label="Priority"
        />
      </Scheduler>
    );
  }
}

export default App;
