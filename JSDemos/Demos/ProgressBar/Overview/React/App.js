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

const elementAttr = { 'aria-label': 'Progress Bar' };

const App = () => {
  const [seconds, setSeconds] = React.useState(maxValue);
  const [buttonText, setButtonText] = React.useState('Start progress');
  const [inProgress, setInProgress] = React.useState(false);

  React.useEffect(() => {
    let intervalId;

    if (inProgress) {
      setButtonText('Stop progress');

      if (seconds === 0) {
        setSeconds(maxValue);
      }

      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      setButtonText('Continue progress');
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [inProgress, seconds]);

  const onButtonClick = React.useCallback(() => {
    setInProgress((prevInProgress) => !prevInProgress);
  });

  return (
    <div className="form">
      <Button
        id="progress-button"
        text={buttonText}
        width={200}
        onClick={onButtonClick}
      />
      <div className="progress-info">
        Time left {formatTime(seconds)}
      </div>
      <ProgressBar
        id="progress-bar-status"
        className={seconds === 0 ? 'complete' : ''}
        width="90%"
        min={0}
        max={maxValue}
        elementAttr={elementAttr}
        statusFormat={statusFormat}
        value={maxValue - seconds}
      />
    </div>
  );
};

export default App;
