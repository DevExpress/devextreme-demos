import React from 'react';
import {
  LinearGauge, Scale, Label, Tooltip, Export, Title, Font,
} from 'devextreme-react/linear-gauge';
import { SelectBox } from 'devextreme-react/select-box';
import { dataSource, departmentLabel } from './data.js';

class App extends React.Component {
  onValueChanged: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      value: dataSource[0].primary,
      subvalues: dataSource[0].secondary,
    };

    this.onValueChanged = ({ value }) => {
      this.setState({
        value: value.primary,
        subvalues: value.secondary,
      });
    };
  }

  render() {
    return (
      <div id="gauge-demo">
        // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
        <LinearGauge
          id="gauge"
          value={this.state.value}
          subvalues={this.state.subvalues}
        >
          // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
          <Scale startValue={0} endValue={10} tickInterval={2}>
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label customizeText={this.customizeText} />
          </Scale>
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip enabled={true} customizeTooltip={this.customizeTooltip} />
          // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
          <Export enabled={true} />
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title text="Power of Air Conditioners in Store Departments (kW)">
            // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
            <Font size={28} />
          </Title>
        </LinearGauge>
        // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
        <SelectBox
          id="selectbox"
          dataSource={dataSource}
          inputAttr={departmentLabel}
          defaultValue={dataSource[0]}
          width={200}
          displayExpr="name"
          onValueChanged={this.onValueChanged}
        />
      </div>
    );
  }

  customizeText({ valueText }) {
    return `${valueText} kW`;
  }

  customizeTooltip(arg) {
    let result = `${arg.valueText} kW`;
    if (arg.index >= 0) {
      result = `Secondary ${(arg.index + 1)}: ${result}`;
    } else {
      result = `Primary: ${result}`;
    }
    return {
      text: result,
    };
  }
}

export default App;
