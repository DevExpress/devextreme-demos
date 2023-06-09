import React from 'react';

import Scheduler, { Resource } from 'devextreme-react/scheduler';

import RadioGroup from 'devextreme-react/radio-group';

import {
  data, assignees, rooms, priorities, resourcesList,
} from './data.js';

const currentDate = new Date(2021, 3, 27);
const views = ['workWeek'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor() {
    super();
    this.state = {
      radioGroupValue: resourcesList[0],
    };
    this.onRadioGroupValueChanged = this.onRadioGroupValueChanged.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
        <Scheduler
          timeZone="America/Los_Angeles"
          dataSource={data}
          // @ts-expect-error TS(2322): Type 'string[]' is not assignable to type '("workW... Remove this comment to see the full error message
          views={views}
          defaultCurrentView="workWeek"
          defaultCurrentDate={currentDate}
          startDayHour={9}
          endDayHour={19}
          height={600}
        >
          // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
          <Resource
            // @ts-expect-error TS(2322): Type '{ dataSource: { text: string; id: number; co... Remove this comment to see the full error message
            dataSource={rooms}
            fieldExpr="roomId"
            label="Room"
            useColorAsDefault={this.state.radioGroupValue === 'Room'}
          />
          // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
          <Resource
            // @ts-expect-error TS(2322): Type '{ dataSource: { text: string; id: number; co... Remove this comment to see the full error message
            dataSource={priorities}
            fieldExpr="priorityId"
            label="Priority"
            useColorAsDefault={this.state.radioGroupValue === 'Priority'}
          />
          // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
          <Resource
            // @ts-expect-error TS(2322): Type '{ dataSource: { text: string; id: number; co... Remove this comment to see the full error message
            dataSource={assignees}
            allowMultiple={true}
            fieldExpr="assigneeId"
            label="Assignee"
            useColorAsDefault={this.state.radioGroupValue === 'Assignee'}
          />
        </Scheduler>
        <div className="options">
          <div className="caption">Use colors of:</div>
          <div className="option">
            // @ts-expect-error TS(2786): 'RadioGroup' cannot be used as a JSX component.
            <RadioGroup
              items={resourcesList}
              value={this.state.radioGroupValue}
              layout="horizontal"
              onValueChanged={this.onRadioGroupValueChanged}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  onRadioGroupValueChanged(args) {
    this.setState({
      radioGroupValue: args.value,
    });
  }
}

export default App;
