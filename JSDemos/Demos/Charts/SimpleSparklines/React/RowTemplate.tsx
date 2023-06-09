import React from 'react';

import Sparkline, {
  Tooltip,
} from 'devextreme-react/sparkline';

import {
  oilCosts,
  silverCosts,
  goldCosts,
} from './data.js';

export default function RowTemplate(props) {
  return (
    <tr>
      <th>{props.year}</th>
      <td>
        // @ts-expect-error TS(2786): 'Sparkline' cannot be used as a JSX component.
        <Sparkline
          dataSource={oilCosts}
          showMinMax={true}
          className="sparkline"
          argumentField="month"
          valueField={props.year}
          type="line"
        >
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip format="currency" />
        </Sparkline>
      </td>
      <td>
        // @ts-expect-error TS(2786): 'Sparkline' cannot be used as a JSX component.
        <Sparkline
          dataSource={goldCosts}
          lineWidth={3}
          showMinMax={true}
          showFirstLast={false}
          className="sparkline"
          argumentField="month"
          valueField={props.year}
          type="spline"
          lineColor="#9ab57e"
          minColor="#6babac"
          maxColor="#ebdd8f"
        >
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip format="currency" />
        </Sparkline>
      </td>
      <td>
        // @ts-expect-error TS(2786): 'Sparkline' cannot be used as a JSX component.
        <Sparkline
          dataSource={silverCosts}
          pointSize={6}
          className="sparkline"
          argumentField="month"
          valueField={props.year}
          type="stepline"
          lineColor="#e8c267"
          firstLastColor="#e55253"
          pointSymbol="square"
          pointColor="#ebdd8f"
        >
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip format="currency" />
        </Sparkline>
      </td>
    </tr>
  );
}
