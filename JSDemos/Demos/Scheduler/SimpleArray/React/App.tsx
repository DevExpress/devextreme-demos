import React from 'react';

import Scheduler from 'devextreme-react/scheduler';

import { data } from './data.js';

const currentDate = new Date(2021, 2, 28);
const views = ['week', 'month'];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        // @ts-expect-error TS(2322): Type 'string[]' is not assignable to type '("week"... Remove this comment to see the full error message
        views={views}
        defaultCurrentView="week"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9} />
    );
  }
}

export default App;
