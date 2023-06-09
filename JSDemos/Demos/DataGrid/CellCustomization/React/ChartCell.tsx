import React from 'react';
import Sparkline, { Size, Tooltip } from 'devextreme-react/sparkline';

export default function ChartCell(cellData) {
  return (
    <div className="chart-cell">
      // @ts-expect-error TS(2786): 'Sparkline' cannot be used as a JSX component.
      <Sparkline
        dataSource={cellData.data.dayClose}
        argumentField="date"
        valueField="close"
        type="line"
        showMinMax={true}
        minColor="#f00"
        maxColor="#2ab71b"
        pointSize={6}>
        // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
        <Size width={290} height={40} />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip enabled={false} />
      </Sparkline>
    </div>
  );
}
