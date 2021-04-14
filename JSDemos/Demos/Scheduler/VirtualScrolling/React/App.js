import React from 'react';

import Scheduler from 'devextreme-react/scheduler';
import {
  humans,
  generateAppointments
} from './data.js';

const currentDate = new Date(2021, 1, 2);
const views = [
  {
    type: 'timelineWorkWeek',
    name: 'Timeline',
    groupOrientation: 'vertical'
  },
  {
    type: 'workWeek',
    groupOrientation: 'vertical'
  },
  {
    type: 'month',
    groupOrientation: 'horizontal'
  }
];
const scrolling = { mode: 'virtual' };
const resources = [{
  fieldExpr: 'humanId',
  dataSource: humans
}];
const groups = ['humanId'];
const appointments = generateAppointments();
class App extends React.Component {
  render() {
    return (
      <Scheduler
        dataSource={appointments}
        height={600}
        views={views}
        defaultCurrentView="timelineWorkWeek"
        defaultCurrentDate={currentDate}
        firstDayOfWeek={0}
        startDayHour={8}
        endDayHour={20}
        cellDuration={60}
        showAllDayPanel={false}
        scrolling={scrolling}
        groups={groups}
        resources={resources}
      />
    );
  }
}

export default App;
