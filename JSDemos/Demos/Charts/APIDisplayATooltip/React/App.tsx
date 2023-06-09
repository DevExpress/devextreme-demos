import React from 'react';
import PieChart, {
  Series, Tooltip, Size, Legend,
} from 'devextreme-react/pie-chart';
import { SelectBox } from 'devextreme-react/select-box';
import { populationData, regionLabel } from './data.js';

class App extends React.Component {
  pieChartRef: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      selectedRegion: null,
    };

    this.pieChartRef = React.createRef();
    this.onPointClick = this.onPointClick.bind(this);
    this.onRegionChanged = this.onRegionChanged.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
        <PieChart
          ref={this.pieChartRef}
          dataSource={populationData}
          onPointClick={this.onPointClick}
          type="doughnut"
          palette="Soft Pastel"
          title="The Population of Continents and Regions"
        >
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series argumentField="region" />
          // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
          <Size height={350} />
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip
            // @ts-expect-error TS(2322): Type '{ enabled: boolean; format: string; customiz... Remove this comment to see the full error message
            enabled={false}
            format="millions"
            customizeTooltip={customizeTooltip}
          />
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={false} />
        </PieChart>
        <div className="controls-pane">
          // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
          <SelectBox
            width={250}
            dataSource={populationData}
            inputAttr={regionLabel}
            displayExpr="region"
            valueExpr="region"
            placeholder="Choose region"
            value={this.state.selectedRegion}
            // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
            onValueChanged={this.onRegionChanged}
          />
        </div>
      </React.Fragment>
    );
  }

  get pieChart() {
    return this.pieChartRef.current.instance;
  }

  onPointClick({ target: point }) {
    this.showTooltip(point);
  }

  onRegionChanged({ value }) {
    const point = this.pieChart.getAllSeries()[0].getPointsByArg(value)[0];
    this.showTooltip(point);
  }

  showTooltip(point) {
    point.showTooltip();
    this.setState({
      selectedRegion: point.argument,
    });
  }
}

function customizeTooltip(pointInfo) {
  return {
    text: `${pointInfo.argumentText}<br/>${pointInfo.valueText}`,
  };
}

export default App;
