import React from 'react';

import { Button } from 'devextreme-react/button';
import { LoadIndicator } from 'devextreme-react/load-indicator';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      loadIndicatorVisible: false,
      buttonText: 'Send',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="form">
        <div className="label">Custom size</div>
        <div className="indicators">
          // @ts-expect-error TS(2786): 'LoadIndicator' cannot be used as a JSX component.
          <LoadIndicator id="small-indicator" height={20} width={20} />
          // @ts-expect-error TS(2786): 'LoadIndicator' cannot be used as a JSX component.
          <LoadIndicator id="medium-indicator" height={40} width={40} />
          // @ts-expect-error TS(2786): 'LoadIndicator' cannot be used as a JSX component.
          <LoadIndicator id="large-indicator" height={60} width={60} />
        </div>
        <div className="label">Custom image</div>

        // @ts-expect-error TS(2786): 'LoadIndicator' cannot be used as a JSX component.
        <LoadIndicator id="image-indicator" indicatorSrc="../../../../images/Loading.gif" />

        <div className="label">Using with other widgets</div>

        // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
        <Button
          id="button"
          width={180}
          height={40}
          onClick={this.handleClick}
        >
          // @ts-expect-error TS(2786): 'LoadIndicator' cannot be used as a JSX component.
          <LoadIndicator className="button-indicator" visible={this.state.loadIndicatorVisible} />
          <span className="dx-button-text">{this.state.buttonText}</span>
        </Button>
      </div>
    );
  }

  handleClick() {
    this.setState(
      {
        loadIndicatorVisible: true,
        buttonText: 'Sending',
      },
      () => {
        setTimeout(() => {
          this.setState({
            loadIndicatorVisible: false,
            buttonText: 'Send',
          });
        }, 2000);
      },
    );
  }
}

export default App;
