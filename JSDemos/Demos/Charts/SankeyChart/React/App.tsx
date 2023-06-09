import React from 'react';

import Sankey, {
  Tooltip,
  Link,
  Node,
} from 'devextreme-react/sankey';

import { data } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Sankey' cannot be used as a JSX component.
      <Sankey id="sankey"
        dataSource={data}
        sourceField="source"
        targetField="target"
        weightField="weight"
        title="Commodity Turnover in 2017"
      >
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip
          // @ts-expect-error TS(2322): Type '{ children: never[]; enabled: boolean; custo... Remove this comment to see the full error message
          enabled={true}
          customizeLinkTooltip={customizeLinkTooltip}
        >
        </Tooltip>

        // @ts-expect-error TS(2786): 'Link' cannot be used as a JSX component.
        <Link
          // @ts-expect-error TS(2322): Type '{ children: never[]; colorMode: string; }' i... Remove this comment to see the full error message
          colorMode="gradient">
        </Link>
        // @ts-expect-error TS(2786): 'Node' cannot be used as a JSX component.
        <Node
          // @ts-expect-error TS(2322): Type '{ children: never[]; width: number; padding:... Remove this comment to see the full error message
          width={8}
          padding={30}>
        </Node>

      </Sankey>
    );
  }
}

function customizeLinkTooltip(info) {
  return {
    html: `<b>From:</b> ${info.source}<br/><b>To:</b> ${info.target}<br/><b>Weight:</b> ${info.weight}`,
  };
}

export default App;
