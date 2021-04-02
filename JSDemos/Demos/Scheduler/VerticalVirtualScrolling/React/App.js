import React from 'react';

import Scheduler from 'devextreme-react/scheduler';
import {
  resources,
  generateAppointments
} from './data.js';

const currentDate = new Date(2021, 1, 2);
const views = [{
  type: 'day',
  groupOrientation: 'vertical',
  name: '3 Days',
  intervalCount: 3
}, {
  type: 'workWeek',
  name: 'Work Week',
  groupOrientation: 'vertical'
}, {
  type: 'month',
  groupOrientation: 'vertical'
}];
const scrolling = { mode: 'virtual' };
const resourceData = [{
  fieldExpr: 'humanId',
  dataSource: resources
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
        defaultCurrentView="3 Days"
        defaultCurrentDate={currentDate}
        startDayHour={9}
        endDayHour={18}
        scrolling={scrolling}
        showAllDayPanel={false}
        groups={groups}
        resources={resourceData}
      />
    );
  }
}

export default App;
