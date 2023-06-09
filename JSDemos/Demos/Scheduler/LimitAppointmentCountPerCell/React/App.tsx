import React from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';

import { data, resourcesData } from './data.js';

const currentDate = new Date(2021, 2, 25);
const views = [{
  type: 'month',
  name: 'Auto Mode',
  maxAppointmentsPerCell: 'auto',
}, {
  type: 'month',
  name: 'Unlimited Mode',
  maxAppointmentsPerCell: 'unlimited',
}, {
  type: 'month',
  name: 'Numeric Mode',
  maxAppointmentsPerCell: 2,
}];

class App extends React.Component {
  getAppointmentTemplate: any;

  hideSchedulerTooltip: any;

  onContentReady: any;

  render() {
    return (
      // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        // @ts-expect-error TS(2322): Type '({ type: string; name: string; maxAppointmen... Remove this comment to see the full error message
        views={views}
        // @ts-expect-error TS(2322): Type '"Auto Mode"' is not assignable to type '"mon... Remove this comment to see the full error message
        defaultCurrentView="Auto Mode"
        defaultCurrentDate={currentDate}
        height={650}
        appointmentTooltipRender={this.getAppointmentTemplate}
        onContentReady={this.onContentReady}
        onAppointmentDeleted={this.hideSchedulerTooltip}
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
