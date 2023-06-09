import React from 'react';

import Scheduler, { Resource, View } from 'devextreme-react/scheduler';

import { data, priorityData } from './data.js';

const currentDate = new Date(2021, 3, 21);

const groups = ['priorityId'];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        groups={groups}
        // @ts-expect-error TS(2322): Type '"Vertical Grouping"' is not assignable to ty... Remove this comment to see the full error message
        defaultCurrentView="Vertical Grouping"
        defaultCurrentDate={currentDate}
        startDayHour={9}
        endDayHour={16}
        crossScrollingEnabled={true}
        showAllDayPanel={false}>
        // @ts-expect-error TS(2786): 'View' cannot be used as a JSX component.
        <View
          // @ts-expect-error TS(2322): Type '{ name: string; type: string; groupOrientati... Remove this comment to see the full error message
          name="Vertical Grouping"
          type="workWeek"
          groupOrientation="vertical"
          cellDuration={60}
          intervalCount={2}
        />
        // @ts-expect-error TS(2786): 'View' cannot be used as a JSX component.
        <View
          // @ts-expect-error TS(2322): Type '{ name: string; type: string; cellDuration: ... Remove this comment to see the full error message
          name="Horizontal Grouping"
          type="workWeek"
          cellDuration={30}
          intervalCount={2}
        />
        // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
        <Resource
          // @ts-expect-error TS(2322): Type '{ fieldExpr: string; allowMultiple: boolean;... Remove this comment to see the full error message
          fieldExpr="priorityId"
          allowMultiple={false}
          dataSource={priorityData}
          label="Priority"
        />
      </Scheduler>
    );
  }
}

export default App;
