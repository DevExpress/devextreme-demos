import React from 'react';

import Chart, {
  ArgumentAxis,
  CommonSeriesSettings,
  Legend,
  Series,
  Tooltip,
  ValueAxis,
  ConstantLine,
  Label,
} from 'devextreme-react/chart';

import { complaintsData } from './data.js';

const data = complaintsData.sort((a, b) => b.count - a.count);

const totalCount = data.reduce((prevValue, item) => prevValue + item.count, 0);

let cumulativeCount = 0;

const dataArray = data.map((item) => {
  cumulativeCount += item.count;
  return {
    complaint: item.complaint,
    count: item.count,
    cumulativePercentage: Math.round((cumulativeCount * 100) / totalCount),
  };
});

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        title="Pizza Shop Complaints"
        dataSource={dataArray}
        palette="Harmony Light"
        id="chart"
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings argumentField="complaint" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ name: string; valueField: string; axis: st... Remove this comment to see the full error message
          name="Complaint frequency"
          valueField="count"
          axis="frequency"
          type="bar"
          color="#fac29a"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ name: string; valueField: string; axis: st... Remove this comment to see the full error message
          name="Cumulative percentage"
          valueField="cumulativePercentage"
          axis="percentage"
          type="spline"
          color="#6b71c3"
        />

        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label overlappingBehavior="stagger" />
        </ArgumentAxis>

        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis
          // @ts-expect-error TS(2322): Type '{ name: string; position: string; tickInterv... Remove this comment to see the full error message
          name="frequency"
          position="left"
          tickInterval={300}
        />
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis
          // @ts-expect-error TS(2322): Type '{ children: Element[]; name: string; positio... Remove this comment to see the full error message
          name="percentage"
          position="right"
          tickInterval={20}
          showZero={true}
          valueMarginsEnabled={false}
        >
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label customizeText={customizePercentageText} />
          // @ts-expect-error TS(2786): 'ConstantLine' cannot be used as a JSX component.
          <ConstantLine
            // @ts-expect-error TS(2322): Type '{ children: Element; value: number; width: n... Remove this comment to see the full error message
            value={80}
            width={2}
            color="#fc3535"
            dashStyle="dash"
          >
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label visible={false} />
          </ConstantLine>
        </ValueAxis>

        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip
          // @ts-expect-error TS(2322): Type '{ enabled: boolean; shared: boolean; customi... Remove this comment to see the full error message
          enabled={true}
          shared={true}
          customizeTooltip={customizeTooltip}
        />

        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
          verticalAlignment="top"
          horizontalAlignment="center"
        />
      </Chart>
    );
  }
}

function customizeTooltip(pointInfo) {
  return {
    html: `<div><div class="tooltip-header">${
      pointInfo.argumentText
    }</div><div class="tooltip-body"><div class="series-name"><span class='top-series-name'>${
      pointInfo.points[0].seriesName
    }</span>: </div><div class="value-text"><span class='top-series-value'>${
      pointInfo.points[0].valueText
    }</span></div><div class="series-name"><span class='bottom-series-name'>${
      pointInfo.points[1].seriesName
    }</span>: </div><div class="value-text"><span class='bottom-series-value'>${
      pointInfo.points[1].valueText
    }</span>% </div></div></div>`,
  };
}

function customizePercentageText({ valueText }) {
  return `${valueText}%`;
}

export default App;
