import React from 'react';
import { BarGauge, Label } from 'devextreme-react/bar-gauge';
import { CheckBox } from 'devextreme-react/check-box';
import { products } from './data.js';

const format = {
  type: 'fixedPoint',
  precision: 0,
};

class App extends React.Component {
  getValueChangedHandler: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      productsActivity: products.map((p) => p.active),
      values: products.map((p) => p.count),
    };

    this.getValueChangedHandler = (productIndex) => (e) => {
      const productsActivity = this.state.productsActivity.slice();
      productsActivity[productIndex] = e.value;
      this.setState({
        productsActivity,
        values: products
          .map((p, i) => (productsActivity[i] ? p.count : null))
          .filter((c) => c !== null),
      });
    };
  }

  render() {
    return (
      <div>
        <div className="long-title">
          <h3>Sampling by Goods</h3>
        </div>
        <div id="gauge-demo">
          // @ts-expect-error TS(2786): 'BarGauge' cannot be used as a JSX component.
          <BarGauge
            id="gauge"
            startValue={0}
            endValue={50}
            values={this.state.values}
          >
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label format={format} />
          </BarGauge>
          <div id="panel">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            {this.state.productsActivity.map((p, i) => <CheckBox
              key={i}
              text={products[i].name}
              value={p}
              onValueChanged={this.getValueChangedHandler(i)}
            ></CheckBox>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
