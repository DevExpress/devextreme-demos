import React from 'react';

import Switch from 'devextreme-react/switch';
import Scheduler, { Resource, View } from 'devextreme-react/scheduler';

import { data, priorityData } from './data.js';

const currentDate = new Date(2021, 3, 21);

const groups = ['priorityId'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor() {
    super();

    this.state = {
      groupByDate: true,
    };
    this.onGroupByDateChanged = this.onGroupByDateChanged.bind(this);
  }

  onGroupByDateChanged(args) {
    this.setState({
      groupByDate: args.value,
    });
  }

  render() {
    return (
      <div id="scheduler">
        // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
        <Scheduler
          timeZone="America/Los_Angeles"
          dataSource={data}
          groups={groups}
          groupByDate={this.state.groupByDate}
          defaultCurrentView="week"
          defaultCurrentDate={currentDate}
          height={700}
          startDayHour={9}
          endDayHour={16}
          crossScrollingEnabled={true}>
          // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
          <Resource
            // @ts-expect-error TS(2322): Type '{ fieldExpr: string; allowMultiple: boolean;... Remove this comment to see the full error message
            fieldExpr="priorityId"
            allowMultiple={false}
            dataSource={priorityData}
            label="Priority"
          />
          // @ts-expect-error TS(2786): 'View' cannot be used as a JSX component.
          <View
            // @ts-expect-error TS(2322): Type '{ type: string; name: string; }' is not assi... Remove this comment to see the full error message
            type="week"
            name="Week"
          />
          // @ts-expect-error TS(2786): 'View' cannot be used as a JSX component.
          <View
            // @ts-expect-error TS(2322): Type '{ type: string; name: string; }' is not assi... Remove this comment to see the full error message
            type="month"
            name="Month"
          />
        </Scheduler>
        <div className="options">
          <div className="caption">Group by Date First</div>
          <div className="option">
            // @ts-expect-error TS(2786): 'Switch' cannot be used as a JSX component.
            <Switch
              value={ this.state.groupByDate }
              onValueChanged={this.onGroupByDateChanged}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
