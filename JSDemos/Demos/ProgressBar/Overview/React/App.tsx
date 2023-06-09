import React from 'react';

import { Button } from 'devextreme-react/button';
import { ProgressBar } from 'devextreme-react/progress-bar';

const maxValue = 10;

function formatTime(value) {
  return `00:00:${(`0${value}`).slice(-2)}`;
}

function statusFormat(ratio) {
  return `Loading: ${ratio * 100}%`;
}

let intervalId;

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      seconds: maxValue,
      buttonText: 'Start progress',
      inProgress: false,
    };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.timer = this.timer.bind(this);
  }

  render() {
    return (
      <div className="form">
        // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
        <Button
          id="progress-button"
          text={this.state.buttonText}
          width={200}
          onClick={this.onButtonClick}
        />
        <div className="progress-info">
                    Time left {formatTime(this.state.seconds)}
        </div>
        // @ts-expect-error TS(2786): 'ProgressBar' cannot be used as a JSX component.
        <ProgressBar
          id="progress-bar-status"
          className={this.state.seconds === 0 ? 'complete' : '' }
          width="90%"
          min={0}
          max={maxValue}
          statusFormat={statusFormat}
          value={maxValue - this.state.seconds}
        />
      </div>
    );
  }

  onButtonClick() {
    const state = {
      inProgress: !this.state.inProgress,
    };

    if (this.state.inProgress) {
      // @ts-expect-error TS(2339): Property 'buttonText' does not exist on type '{ in... Remove this comment to see the full error message
      state.buttonText = 'Continue progress';
      clearInterval(intervalId);
    } else {
      // @ts-expect-error TS(2339): Property 'buttonText' does not exist on type '{ in... Remove this comment to see the full error message
      state.buttonText = 'Stop progress';

      if (this.state.seconds === 0) {
        // @ts-expect-error TS(2339): Property 'seconds' does not exist on type '{ inPro... Remove this comment to see the full error message
        state.seconds = maxValue;
      }

      intervalId = setInterval(() => this.timer(), 1000);
    }

    this.setState(state);
  }

  timer() {
    const state = {
      seconds: this.state.seconds - 1,
    };

    if (state.seconds === 0) {
      // @ts-expect-error TS(2339): Property 'buttonText' does not exist on type '{ se... Remove this comment to see the full error message
      state.buttonText = 'Restart progress';
      // @ts-expect-error TS(2339): Property 'inProgress' does not exist on type '{ se... Remove this comment to see the full error message
      state.inProgress = !this.state.inProgress;
      clearInterval(intervalId);
    }

    this.setState(state);
  }
}

export default App;
