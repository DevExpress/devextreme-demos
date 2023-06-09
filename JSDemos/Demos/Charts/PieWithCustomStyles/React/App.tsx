import React from 'react';
import PieChart, {
  Series, Label, Connector, Export,
} from 'devextreme-react/pie-chart';
import {
  getStrokePattern, getSquarePattern, getLinearGradient, getRadialGradient, getPatternImage,
} from './utils.js';
import { data } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
      <PieChart
        id="pie"
        dataSource={data}
        customizePoint={customizePoint}
      >
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
          argumentField='type'
          valueField='value'>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label visible customizeText={customizeText}>
            // @ts-expect-error TS(2786): 'Connector' cannot be used as a JSX component.
            <Connector visible />
          </Label>
        </Series>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled />
      </PieChart>
    );
  }
}

function customizeText(info) {
  return info.argument;
}

function customizePoint(point) {
  const color = point.series.getPointsByArg(point.argument)[0].getColor();
  let fillId;
  switch (point.argument) {
    case 'Stripes':
      fillId = getStrokePattern(color);
      break;
    case 'Grid':
      fillId = getSquarePattern(color);
      break;
    case 'Linear Gradient':
      fillId = getLinearGradient(color);
      break;
    case 'Radial Gradient':
      fillId = getRadialGradient(color);
      break;
    case 'Image':
      fillId = getPatternImage(color);
      break;
    default:
      break;
  }

  return { color: { fillId } };
}

export default App;
