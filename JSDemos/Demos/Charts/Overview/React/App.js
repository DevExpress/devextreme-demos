import React, { useState } from 'react';
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

const App = () => {
  const [dataArray, setDataArray] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const data = complaintsData.sort((a, b) => b.count - a.count);
  let cumulativeCount = 0;
  const updateDataArray = () => {
    const updatedDataArray = data.map((item) => {
      cumulativeCount += item.count;
      return {
        complaint: item.complaint,
        count: item.count,
        cumulativePercentage: Math.round((cumulativeCount * 100) / totalCount),
      };
    });
    setDataArray(updatedDataArray);
  };
  const customizePercentageText = ({ valueText }) => `${valueText}%`;
  const customizeTooltip = (pointInfo) => ({
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
  });
  const setChartData = () => {
    setTotalCount(data.reduce((prevValue, item) => prevValue + item.count, 0));
    updateDataArray();
  };
  setChartData();
  return (
    <Chart
      title="Pizza Shop Complaints"
      dataSource={dataArray}
      palette="Harmony Light"
      id="chart"
    >
      <CommonSeriesSettings argumentField="complaint" />
      <Series
        name="Complaint frequency"
        valueField="count"
        axis="frequency"
        type="bar"
        color="#fac29a"
      />
      <Series
        name="Cumulative percentage"
        valueField="cumulativePercentage"
        axis="percentage"
        type="spline"
        color="#6b71c3"
      />

      <ArgumentAxis>
        <Label overlappingBehavior="stagger" />
      </ArgumentAxis>

      <ValueAxis name="frequency" position="left" tickInterval={300} />
      <ValueAxis
        name="percentage"
        position="right"
        tickInterval={20}
        showZero={true}
        valueMarginsEnabled={false}
      >
        <Label customizeText={customizePercentageText} />
        <ConstantLine
          value={80}
          width={2}
          color="#fc3535"
          dashStyle="dash"
        >
          <Label visible={false} />
        </ConstantLine>
      </ValueAxis>

      <Tooltip
        enabled={true}
        shared={true}
        customizeTooltip={customizeTooltip}
      />

      <Legend verticalAlignment="top" horizontalAlignment="center" />
    </Chart>
  );
};

export default App;
