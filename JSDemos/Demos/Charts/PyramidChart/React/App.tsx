import React from 'react';
import Funnel, {
  Title,
  Margin,
  Tooltip,
  Item,
  Border,
  Legend,
  Label,
  Font,
} from 'devextreme-react/funnel';
import { dataSource } from './data.js';

function App() {
  return (
    // @ts-expect-error TS(2786): 'Funnel' cannot be used as a JSX component.
    <Funnel id="pyramid"
      dataSource={dataSource}
      sortData={false}
      inverted={true}
      algorithm="dynamicHeight"
      palette="Harmony Light"
      argumentField="level"
      valueField="count"
    >
      // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
      <Title text="Team Composition">
        // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
        <Margin bottom={30} />
      </Title>
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip enabled={true} />
      // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
      <Item>
        // @ts-expect-error TS(2786): 'Border' cannot be used as a JSX component.
        <Border visible={true} />
      </Item>
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend visible={true} />
      // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
      <Label
        // @ts-expect-error TS(2322): Type '{ children: Element; visible: boolean; horiz... Remove this comment to see the full error message
        visible={true}
        horizontalAlignment="left"
        backgroundColor="none"
      >
        // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
        <Font size={16} />
      </Label>
    </Funnel>
  );
}

export default App;
