import React from 'react';
import { Button } from 'devextreme-react/button';
import { LoadIndicator } from 'devextreme-react/load-indicator';

const App = () => {
  const [loadIndicatorVisible, setLoadIndicatorVisible] = React.useState(false);
  const [buttonText, setButtonText] = React.useState('Send');

  const handleClick = React.useCallback(() => {
    setLoadIndicatorVisible(true);
    setButtonText('Sending');

    setTimeout(() => {
      setLoadIndicatorVisible(false);
      setButtonText('Send');
    }, 2000);
  });

  return (
    <div className="form">
      <div className="label">Custom size</div>
      <div className="indicators">
        <LoadIndicator id="small-indicator" height={20} width={20} />
        <LoadIndicator id="medium-indicator" height={40} width={40} />
        <LoadIndicator id="large-indicator" height={60} width={60} />
      </div>
      <div className="label">Custom image</div>

      <LoadIndicator id="image-indicator" indicatorSrc="../../../../images/Loading.gif" />

      <div className="label">Using with other widgets</div>

      <Button
        id="button"
        width={180}
        height={40}
        onClick={handleClick}
      >
        <LoadIndicator className="button-indicator" visible={loadIndicatorVisible} />
        <span className="dx-button-text">{buttonText}</span>
      </Button>
    </div>
  );
};

export default App;
