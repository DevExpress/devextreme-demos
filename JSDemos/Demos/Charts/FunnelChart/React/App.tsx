import React from 'react';
import Funnel, {
  Title,
  Margin,
  Export,
  Tooltip,
  Item,
  Border,
  Label,
} from 'devextreme-react/funnel';
import { dataSource } from './data.js';

function App() {
  return (
    // @ts-expect-error TS(2786): 'Funnel' cannot be used as a JSX component.
    <Funnel id="funnel"
      dataSource={dataSource}
      palette="Soft Pastel"
      argumentField="argument"
      valueField="value"
    >
      // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
      <Title text="Website Conversions">
        // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
        <Margin bottom={30} />
      </Title>
      // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
      <Export enabled={true} />
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip enabled={true} format="fixedPoint" />
      // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
      <Item>
        // @ts-expect-error TS(2786): 'Border' cannot be used as a JSX component.
        <Border visible={true} />
      </Item>
      // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
      <Label
        // @ts-expect-error TS(2322): Type '{ visible: boolean; position: string; backgr... Remove this comment to see the full error message
        visible={true}
        position="inside"
        backgroundColor="none"
        customizeText={formatLabel}
      />
    </Funnel>
  );
}

function formatLabel(arg) {
  return `<span class="label">${arg.percentText}</span><br/>${arg.item.argument}`;
}

export default App;
