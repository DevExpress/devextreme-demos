import React from 'react';

import SelectBox from 'devextreme-react/select-box';
import PieChart, {
  Series,
  Label,
  Margin,
  Export,
  Legend,
  Animation,
} from 'devextreme-react/pie-chart';

import { dataSource, resolutionModeLabel } from './data.js';

const resolveModes = ['shift', 'hide', 'none'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      resolveMode: resolveModes[0],
    };
    this.setResolveMode = this.setResolveMode.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
        <PieChart
          id="pie"
          dataSource={dataSource}
          palette="Bright"
          title="Olympic Medals in 2008"
          resolveLabelOverlapping={this.state.resolveMode}
        >
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series
            // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
            argumentField="country"
            valueField="medals"
          >
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label visible={true} customizeText={formatText} />
          </Series>
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin bottom={20} />
          // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
          <Export enabled={true} />
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={false} />
          // @ts-expect-error TS(2786): 'Animation' cannot be used as a JSX component.
          <Animation enabled={false} />
        </PieChart>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Label Overlapping Resolution Mode </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              dataSource={resolveModes}
              inputAttr={resolutionModeLabel}
              value={this.state.resolveMode}
              onValueChanged={this.setResolveMode}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  setResolveMode(data) {
    this.setState({
      resolveMode: data.value,
    });
  }
}

function formatText(arg) {
  return `${arg.argumentText} (${arg.percentText})`;
}

export default App;
