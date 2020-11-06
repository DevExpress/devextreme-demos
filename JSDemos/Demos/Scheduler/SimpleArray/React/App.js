import React from 'react';

import Scheduler from 'devextreme-react/scheduler';

import { data } from './data.js';

const currentDate = new Date(2021, 4, 25);
const views = ['week', 'month'];

class App extends React.Component {
  render() {
    return (
      <Scheduler
          timeZone="America/Los_Angeles"
        dataSource={data}
        views={views}
        defaultCurrentView="week"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9} />
    );
  }
}

export default App;
