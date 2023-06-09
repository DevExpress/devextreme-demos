import React from 'react';

import Sparkline, {
  Tooltip,
} from 'devextreme-react/sparkline';

import {
  aluminumCosts,
  nickelCosts,
  copperCosts,
} from './data.js';

export default function RowTemplate(props) {
  return (
    <tr>
      <th>{ props.year }</th>
      <td>
        // @ts-expect-error TS(2786): 'Sparkline' cannot be used as a JSX component.
        <Sparkline
          dataSource={aluminumCosts}
          showMinMax={true}
          winlossThreshold={2100}
          className="sparkline"
          argumentField="month"
          valueField={props.year}
          type="winloss"
        >
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip format="currency" />
        </Sparkline>
      </td>
      <td>
        // @ts-expect-error TS(2786): 'Sparkline' cannot be used as a JSX component.
        <Sparkline
          dataSource={nickelCosts}
          showMinMax={true}
          showFirstLast={false}
          winlossThreshold={19000}
          className="sparkline"
          argumentField="month"
          valueField={props.year}
          type="winloss"
          winColor="#6babac"
          lossColor="#8076bb"
        >
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip format="currency" />
        </Sparkline>
      </td>
      <td>
        // @ts-expect-error TS(2786): 'Sparkline' cannot be used as a JSX component.
        <Sparkline
          dataSource={copperCosts}
          winlossThreshold={8000}
          className="sparkline"
          argumentField="month"
          valueField={props.year}
          type="winloss"
          firstLastColor="#e55253"
          winColor="#7e4452"
          lossColor="#ebdd8f"
        >
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip format="currency" />
        </Sparkline>
      </td>
    </tr>
  );
}
