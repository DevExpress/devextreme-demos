import React from 'react';

import {
  Chart, Series, CommonSeriesSettings, Legend, Export, Tooltip,
} from 'devextreme-react/chart';
import service from './data.js';

const dataSource = service.getMaleAgeData();

class App extends React.Component {
  customizeTooltip(arg) {
    return {
      text: `${arg.percentText} - ${arg.valueText}`,
    };
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        title="Population: Age Structure"
        dataSource={dataSource}
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ argumentField: string; type: string; }' is... Remove this comment to see the full error message
          argumentField="state"
          type="fullstackedbar"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; stack: s... Remove this comment to see the full error message
          valueField="maleyoung"
          name="Male: 0-14"
          stack="male"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; stack: s... Remove this comment to see the full error message
          valueField="malemiddle"
          name="Male: 15-64"
          stack="male"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; stack: s... Remove this comment to see the full error message
          valueField="maleolder"
          name="Male: 65 and older"
          stack="male"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; stack: s... Remove this comment to see the full error message
          valueField="femaleyoung"
          name="Female: 0-14"
          stack="female"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; stack: s... Remove this comment to see the full error message
          valueField="femalemiddle"
          name="Female: 15-64"
          stack="female"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; stack: s... Remove this comment to see the full error message
          valueField="femaleolder"
          name="Female: 65 and older"
          stack="female"
        />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip
          // @ts-expect-error TS(2322): Type '{ enabled: boolean; customizeTooltip: (arg: ... Remove this comment to see the full error message
          enabled={true}
          customizeTooltip={this.customizeTooltip}
        />
      </Chart>
    );
  }
}

export default App;
