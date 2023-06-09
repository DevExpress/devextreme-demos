import React from 'react';

import { Tooltip } from 'devextreme-react/tooltip';

const animationConfig = {
  show: {
    type: 'slide',
    from: {
      top: -100,
      opacity: 0,
    },
    to: {
      top: 0,
      opacity: 1,
    },
  },
  hide: {
    type: 'pop',
    from: {
      scale: 1,
      opacity: 1,
    },
    to: {
      scale: 0.1,
      opacity: 0,
    },
  },
};

class App extends React.Component {
  render() {
    return (
      <div className="form">

        <div className="label">Default mode</div>
        <div>
          <img
            id="product1"
            src="../../../../images/products/17.png"
          />

          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip
            target="#product1"
            showEvent="mouseenter"
            hideEvent="mouseleave"
            hideOnOutsideClick={false}
          >
            <div>ExcelRemote IR</div>
          </Tooltip>
        </div>

        <div className="label">With template</div>
        <div>
          <img
            id="product2"
            src="../../../../images/products/3.png"
          />

          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip
            target="#product2"
            showEvent="mouseenter"
            hideEvent="mouseleave"
            position="right"
            hideOnOutsideClick={false}
          >
            <img width="150" src="../../../../images/products/3.png" /><br />
            <b>SuperPlasma 50</b><br /> 2400$
          </Tooltip>
        </div>

        <div className="label">With animation</div>
        <div>
          <img
            id="product3"
            src="../../../../images/products/15.png"
          />

          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip
            target="#product3"
            showEvent="mouseenter"
            hideEvent="mouseleave"
            position="top"
            // @ts-expect-error TS(2322): Type '{ show: { type: string; from: { top: number;... Remove this comment to see the full error message
            animation={animationConfig}
            hideOnOutsideClick={false}
          >
            <div>Projector PlusHD</div>
          </Tooltip>
        </div>

      </div>
    );
  }
}

export default App;
