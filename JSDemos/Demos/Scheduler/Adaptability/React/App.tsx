import React from 'react';

import Scheduler, { Resource } from 'devextreme-react/scheduler';
import SpeedDialAction from 'devextreme-react/speed-dial-action';

import { data, priorities } from './data.js';

const views = ['week', 'month'];

class App extends React.Component {
  schedulerRef: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(2021, 2, 25),
      cellDuration: 30,
    };
    this.showAppointmentPopup = this.showAppointmentPopup.bind(this);
    this.onOptionChanged = this.onOptionChanged.bind(this);

    this.schedulerRef = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
        <Scheduler
          ref={this.schedulerRef}
          timeZone="America/Los_Angeles"
          dataSource={data}
          // @ts-expect-error TS(2322): Type 'string[]' is not assignable to type '("week"... Remove this comment to see the full error message
          views={views}
          adaptivityEnabled={true}
          onOptionChanged={this.onOptionChanged}
          defaultCurrentView="month"
          currentDate={this.state.currentDate}
          cellDuration={this.state.cellDuration}
          height={590}
          startDayHour={9}>
          // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
          <Resource
            // @ts-expect-error TS(2322): Type '{ dataSource: { text: string; id: number; co... Remove this comment to see the full error message
            dataSource={priorities}
            fieldExpr="priorityId"
            label="Priority"
          />
        </Scheduler>
        // @ts-expect-error TS(2786): 'SpeedDialAction' cannot be used as a JSX componen... Remove this comment to see the full error message
        <SpeedDialAction
          icon="plus"
          onClick={this.showAppointmentPopup}
        />
      </React.Fragment>
    );
  }

  onOptionChanged(e) {
    if (e.name === 'currentDate') {
      this.setState({ currentDate: e.value });
    }
  }

  showAppointmentPopup() {
    this.schedulerRef.current.instance.showAppointmentPopup();
  }
}

export default App;
