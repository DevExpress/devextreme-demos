import React from 'react';

import Sparkline, {
  Tooltip,
} from 'devextreme-react/sparkline';

import {
  copperCosts,
  nickelCosts,
  palladiumCosts,
} from './data.js';

export default function RowTemplate(props) {
  return (
    <tr>
      <th>{props.year}</th>
      <td>
        // @ts-expect-error TS(2786): 'Sparkline' cannot be used as a JSX component.
        <Sparkline
          dataSource={copperCosts}
          showMinMax={true}
          className="sparkline"
          argumentField="month"
          valueField={props.year}
          type="area"
        >
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip format="currency" />
        </Sparkline>
      </td>
      <td>
        // @ts-expect-error TS(2786): 'Sparkline' cannot be used as a JSX component.
        <Sparkline
          dataSource={nickelCosts}
          pointSize={6}
          showMinMax={true}
          showFirstLast={false}
          className="sparkline"
          argumentField="month"
          valueField={props.year}
          type="splinearea"
          lineColor="#8076bb"
          minColor="#6babac"
          maxColor="#8076bb"
        >
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip format="currency" />
        </Sparkline>
      </td>
      <td>
        // @ts-expect-error TS(2786): 'Sparkline' cannot be used as a JSX component.
        <Sparkline
          dataSource={palladiumCosts}
          lineWidth={3}
          className="sparkline"
          argumentField="month"
          valueField={props.year}
          type="steparea"
          lineColor="#7e4452"
          firstLastColor="#e55253"
          pointColor="#e8c267"
          pointSymbol="polygon"
        >
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip format="currency" />
        </Sparkline>
      </td>
    </tr>

  );
}
