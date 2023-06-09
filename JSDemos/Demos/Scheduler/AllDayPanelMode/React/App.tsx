import React from 'react';

import Scheduler from 'devextreme-react/scheduler';
import RadioGroup from 'devextreme-react/radio-group';

import { data } from './data.js';

const currentDate = new Date(2021, 2, 28);
const views = [{
  type: 'day',
  name: '4 Days',
  intervalCount: 4,
}, 'week'];
const allDayPanelItems = ['all', 'allDay', 'hidden'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = { allDayPanelMode: 'allDay' };

    this.onChangeAllDayPanelMode = this.onChangeAllDayPanelMode.bind(this);
  }

  onChangeAllDayPanelMode(e) {
    this.setState({ allDayPanelMode: e.value });
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
        <Scheduler
          timeZone="America/Los_Angeles"
          dataSource={data}
          // @ts-expect-error TS(2322): Type '(string | { type: string; name: string; inte... Remove this comment to see the full error message
          views={views}
          defaultCurrentView="day"
          defaultCurrentDate={currentDate}
          allDayPanelMode={this.state.allDayPanelMode}
          startDayHour={9}
          height={600} />

        <div className="options">
          <div className="option">
            <div className="label">All day panel mode</div>
            <div className="value">
              // @ts-expect-error TS(2786): 'RadioGroup' cannot be used as a JSX component.
              <RadioGroup
                items={allDayPanelItems}
                value={this.state.allDayPanelMode}
                layout="horizontal"
                onValueChanged={this.onChangeAllDayPanelMode}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
