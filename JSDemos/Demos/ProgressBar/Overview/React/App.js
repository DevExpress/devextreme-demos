import React, { useState, useEffect } from 'react';
import { Button } from 'devextreme-react/button';
import { ProgressBar } from 'devextreme-react/progress-bar';

const maxValue = 10;

function formatTime(value) {
  return `00:00:${(`0${value}`).slice(-2)}`;
}

function statusFormat(ratio) {
  return `Loading: ${ratio * 100}%`;
}

const App = () => {
  const [seconds, setSeconds] = useState(maxValue);
  const [buttonText, setButtonText] = useState('Start progress');
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    let intervalId;

    if (inProgress) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (seconds === 0) {
      clearInterval(intervalId);
      setInProgress(false);
      setButtonText('Restart progress');
    }

    return () => clearInterval(intervalId);
  }, [inProgress, seconds]);

  const onButtonClick = () => {
    if (inProgress) {
      setInProgress(false);
      setButtonText('Continue progress');
    } else {
      setInProgress(true);
      setButtonText('Stop progress');

      if (seconds === 0) {
        setSeconds(maxValue);
      }
    }
  };

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
        statusFormat={statusFormat}
        value={maxValue - seconds}
      />
    </div>
  );
};

export default App;
