import React from 'react';

import Scheduler, { Resource } from 'devextreme-react/scheduler';

import { data, resourcesData } from './data.js';

const currentDate = new Date(2020, 10, 25);
const views = ['day', 'week', 'month'];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        // @ts-expect-error TS(2322): Type 'string[]' is not assignable to type '("day" ... Remove this comment to see the full error message
        views={views}
        defaultCurrentView="month"
        defaultCurrentDate={currentDate}
        startDayHour={9}
        height={600}
      >
        // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
        <Resource
          // @ts-expect-error TS(2322): Type '{ dataSource: { text: string; id: number; co... Remove this comment to see the full error message
          dataSource={resourcesData}
          fieldExpr="roomId"
          label="Room"
        />
      </Scheduler>
    );
  }
}

export default App;
