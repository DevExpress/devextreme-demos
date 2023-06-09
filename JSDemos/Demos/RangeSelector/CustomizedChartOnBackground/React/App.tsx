import React from 'react';
import RangeSelector, {
  Margin, Background, Scale, Label, SliderMarker, Chart, Series,
} from 'devextreme-react/range-selector';
import { dataSource } from './data.js';

const defaultValue = [0, 5];

function App() {
  return (
    // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
    <RangeSelector
      id="range-selector"
      title="Select a Range in the CPU Usage History"
      dataSource={dataSource}
      defaultValue={defaultValue}
    >
      // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
      <Margin left={15} right={15} top={50} />
      // @ts-expect-error TS(2786): 'Background' cannot be used as a JSX component.
      <Background color="#808080" />
      // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
      <Scale minorTickInterval={0.5} tickInterval={1}>
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label customizeText={format} />
      </Scale>
      // @ts-expect-error TS(2786): 'SliderMarker' cannot be used as a JSX component.
      <SliderMarker visible={false} />
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart topIndent={0.05} bottomIndent={0.05}>
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series argumentField="x" valueField="y" color="#ffa500" width={3} type="line" />
      </Chart>
    </RangeSelector>
  );
}

function format({ valueText }) {
  return `${valueText} s`;
}

export default App;
