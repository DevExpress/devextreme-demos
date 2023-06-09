import React from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import { Switch } from 'devextreme-react/switch';
import { NumberBox } from 'devextreme-react/number-box';

import { data, moviesData, positionLabel } from './data.js';
import AppointmentTemplate from './AppointmentTemplate.js';

const currentDate = new Date();
const views = ['week', 'timelineWeek'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      showCurrentTimeIndicator: true,
      shadeUntilCurrentTime: true,
      updateInterval: 10,
    };
    this.onShowCurrentTimeIndicatorChanged = this.onShowCurrentTimeIndicatorChanged.bind(this);
    this.onShadeUntilCurrentTimeChanged = this.onShadeUntilCurrentTimeChanged.bind(this);
    this.onUpdateIntervalChanged = this.onUpdateIntervalChanged.bind(this);
    this.onContentReady = this.onContentReady.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Scheduler' cannot be used as a JSX component.
        <Scheduler
          dataSource={data}
          // @ts-expect-error TS(2322): Type 'string[]' is not assignable to type '("week"... Remove this comment to see the full error message
          views={views}
          defaultCurrentView="week"
          showCurrentTimeIndicator={this.state.showCurrentTimeIndicator}
          showAllDayPanel={false}
          shadeUntilCurrentTime={this.state.shadeUntilCurrentTime}
          defaultCurrentDate={currentDate}
          editing={false}
          height={600}
          appointmentRender={AppointmentTemplate}
          onContentReady={this.onContentReady}
          onAppointmentClick={this.onAppointmentClick}
          onAppointmentDblClick={this.onAppointmentDblClick}
        >
          // @ts-expect-error TS(2786): 'Resource' cannot be used as a JSX component.
          <Resource
            // @ts-expect-error TS(2322): Type '{ dataSource: { id: number; text: string; im... Remove this comment to see the full error message
            dataSource={moviesData}
            fieldExpr="movieId"
          />
        </Scheduler>
        <div className="options">
          <div className="column">
            <div className="option">
              <div className="label">Current time indicator </div>
              {' '}
              <div className="value">
                // @ts-expect-error TS(2786): 'Switch' cannot be used as a JSX component.
                <Switch
                  id="show-indicator"
                  value={this.state.showCurrentTimeIndicator}
                  onValueChanged={this.onShowCurrentTimeIndicatorChanged}
                />
              </div>
            </div>
            <div className="option">
              <div className="label">Shading until current time </div>
              {' '}
              <div className="value">
                // @ts-expect-error TS(2786): 'Switch' cannot be used as a JSX component.
                <Switch
                  id="allow-shading"
                  value={this.state.shadeUntilCurrentTime}
                  onValueChanged={this.onShadeUntilCurrentTimeChanged}
                />
              </div>
            </div>
          </div>
          {' '}
          <div className="column">
            <div className="option">
              <div className="label">Update position in </div>
              {' '}
              <div className="value">
                // @ts-expect-error TS(2786): 'NumberBox' cannot be used as a JSX component.
                <NumberBox
                  min={1}
                  max={1200}
                  value={this.state.updateInterval}
                  step={10}
                  showSpinButtons={true}
                  width={100}
                  format="#0 s"
                  inputAttr={positionLabel}
                  onValueChanged={this.onUpdateIntervalChanged}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  onContentReady(e) {
    e.component.scrollTo(new Date());
  }

  onAppointmentClick(e) {
    e.cancel = true;
  }

  onAppointmentDblClick(e) {
    e.cancel = true;
  }

  onShowCurrentTimeIndicatorChanged(e) {
    this.setState({ showCurrentTimeIndicator: e.value });
  }

  onShadeUntilCurrentTimeChanged(e) {
    this.setState({ shadeUntilCurrentTime: e.value });
  }

  onUpdateIntervalChanged(args) {
    this.setState({ updateInterval: args.value });
  }
}

export default App;
