import React from 'react';
import {
  CircularGauge, Scale, Label, RangeContainer, Range, Tooltip, Title, Font,
} from 'devextreme-react/circular-gauge';
import { SelectBox } from 'devextreme-react/select-box';
import { dataSource, seasonLabel } from './data.js';

class App extends React.Component {
  onSelectionChanged: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      value: dataSource[0].mean,
      subvalues: [dataSource[0].min, dataSource[0].max],
    };
    this.onSelectionChanged = ({ selectedItem }) => {
      this.setState({
        value: selectedItem.mean,
        subvalues: [selectedItem.min, selectedItem.max],
      });
    };
  }

  render() {
    return (
      <div id="gauge-demo">
        // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
        <CircularGauge
          id="gauge"
          value={this.state.value}
          subvalues={this.state.subvalues}
        >
          // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
          <Scale startValue={10} endValue={40} tickInterval={5}>
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label customizeText={this.customizeText} />
          </Scale>
          // @ts-expect-error TS(2786): 'RangeContainer' cannot be used as a JSX component... Remove this comment to see the full error message
          <RangeContainer>
            // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
            <Range startValue={10} endValue={20} color="#0077BE" />
            // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
            <Range startValue={20} endValue={30} color="#E6E200" />
            // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
            <Range startValue={30} endValue={40} color="#77DD77" />
          </RangeContainer>
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip enabled={true} />
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title text="Temperature in the Greenhouse">
            // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
            <Font size={28} />
          </Title>
        </CircularGauge>
        // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
        <SelectBox
          id="seasons"
          width={150}
          inputAttr={seasonLabel}
          dataSource={dataSource}
          defaultValue={dataSource[0]}
          displayExpr="name"
          onSelectionChanged={this.onSelectionChanged}
        />
      </div>
    );
  }

  customizeText({ valueText }) {
    return `${valueText} °C`;
  }
}

export default App;
