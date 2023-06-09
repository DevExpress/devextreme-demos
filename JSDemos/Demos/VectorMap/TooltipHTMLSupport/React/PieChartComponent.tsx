import React from 'react';
import PieChart, {
  Series,
  Label,
  Legend,
  Connector,
} from 'devextreme-react/pie-chart';

function PieChartComponent(props) {
  return (
    // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
    <PieChart id="gdp-sectors"
      dataSource={props.data}
      animation={false}
    >
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
        argumentField="name"
        valueField="value">
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label
          // @ts-expect-error TS(2322): Type '{ children: Element; visible: boolean; custo... Remove this comment to see the full error message
          visible={true}
          customizeText={customizeText}
        >
          // @ts-expect-error TS(2786): 'Connector' cannot be used as a JSX component.
          <Connector
            // @ts-expect-error TS(2322): Type '{ visible: boolean; width: number; }' is not... Remove this comment to see the full error message
            visible={true}
            width={1}
          ></Connector>
        </Label>
      </Series>
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend visible={false}></Legend>
    </PieChart>
  );
}

function customizeText(pointInfo) {
  return `${pointInfo.argument[0].toUpperCase()}${
    pointInfo.argument.slice(1)
  }: $${pointInfo.value}M`;
}

export default PieChartComponent;
