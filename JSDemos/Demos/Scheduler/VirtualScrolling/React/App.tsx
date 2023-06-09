import React from 'react';

import Scheduler, { Resource, View, Scrolling } from 'devextreme-react/scheduler';
import {
  resources,
  generateAppointments,
} from './data.js';

const currentDate = new Date(2021, 1, 2);

const groups = ['humanId'];

const startDay = new Date(2021, 1, 1);
const endDay = new Date(2021, 1, 28);
const startDayHour = 8;
const endDayHour = 20;

const appointments = generateAppointments(startDay, endDay, startDayHour, endDayHour);

function App() {
  return (
    // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
    <Scheduler
      dataSource={appointments}
      height={600}
      // @ts-expect-error TS(2322): Type '"Timeline"' is not assignable to type '"agen... Remove this comment to see the full error message
      defaultCurrentView='Timeline'
      defaultCurrentDate={currentDate}
      startDayHour={startDayHour}
      endDayHour={endDayHour}
      cellDuration={60}
      showAllDayPanel={false}
      groups={groups}>
      // @ts-expect-error TS(2786): 'View' cannot be used as a JSX component.
      <View
        // @ts-expect-error TS(2322): Type '{ type: string; name: string; groupOrientati... Remove this comment to see the full error message
        type='timelineWorkWeek'
        name='Timeline'
        groupOrientation='vertical'
      />
      // @ts-expect-error TS(2786): 'View' cannot be used as a JSX component.
      <View
        // @ts-expect-error TS(2322): Type '{ type: string; groupOrientation: string; }'... Remove this comment to see the full error message
        type='workWeek'
        groupOrientation='vertical'
      />
      // @ts-expect-error TS(2786): 'View' cannot be used as a JSX component.
      <View
        // @ts-expect-error TS(2322): Type '{ type: string; groupOrientation: string; }'... Remove this comment to see the full error message
        type='month'
        groupOrientation='horizontal'
      />
      // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
      <Resource
        // @ts-expect-error TS(2322): Type '{ fieldExpr: string; dataSource: { id: numbe... Remove this comment to see the full error message
        fieldExpr='humanId'
        dataSource={resources}
        label='Employee'
      />
      // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
      <Scrolling
        // @ts-expect-error TS(2322): Type '{ mode: string; }' is not assignable to type... Remove this comment to see the full error message
        mode='virtual'
      />
    </Scheduler>
  );
}

export default App;
