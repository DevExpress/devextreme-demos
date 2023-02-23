import React from 'react';
import PieChart, {
  Series, Label, Connector, Export,
} from 'devextreme-react/pie-chart';
import Charts from 'devextreme/common/charts';
import { data } from './data.js';

class App extends React.Component {
  render() {
    return (
      <PieChart
        dataSource={data}
        customizePoint={customizePoint}
      >
        <Series
          argumentField='type'
          valueField='value'>
          <Label visible customizeText={customizeText}>
            <Connector visible />
          </Label>
        </Series>
        <Export enabled />
      </PieChart>
    );
  }
}

function customizeText(info) {
  return info.argument;
}

const imagePatternSize = 12;
const shapePatternSize = 6;

function hexToRgb(hex, opacity = 1) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${opacity})`;
}

function gradient(type, color1, color2) {
  return Charts.registerGradient(type, {
    colors: [{
      offset: '20%',
      color: color1,
    }, {
      offset: '90%',
      color: color2,
    }],
  });
}

function linearGradient(color) { return gradient('linear', color, hexToRgb(color, 0.5)); }

function radialGradient(color) { return gradient('radial', hexToRgb(color, 0.5), color); }

function patternImage(color) {
  return Charts.registerPattern({
    width: imagePatternSize,
    height: imagePatternSize,
    template: (container) => {
      container.innerHTML = ['<svg>',
        `<rect width=${imagePatternSize} height=${imagePatternSize} fill=${color} />`,
        `<image width=${imagePatternSize} height=${imagePatternSize}
          href='../../../../images/Charts/PieWithCustomStyles/diamond.png'
          opacity=0.6
        />`,
        '</svg>'].join('');
    },
  });
}

function strokePattern(color) {
  return Charts.registerPattern({
    width: shapePatternSize,
    height: shapePatternSize,
    template: (container) => {
      const halfSize = shapePatternSize / 2;
      const oneHalfSize = shapePatternSize * 1.5;
      const d = `M ${halfSize} ${-halfSize} L ${-halfSize} ${halfSize} M 0 ${shapePatternSize} L ${shapePatternSize} 0 M ${oneHalfSize} ${halfSize} L ${halfSize} ${oneHalfSize}`;

      container.innerHTML = ['<svg>',
        `<path stroke=${color} stroke-width=2 d="${d}" />`,
        '</svg>'].join('');
    },
  });
}

function squarePattern(color) {
  return Charts.registerPattern({
    width: shapePatternSize,
    height: shapePatternSize,
    template: (container) => {
      container.innerHTML = ['<svg>',
        `<rect width=${shapePatternSize} height=${shapePatternSize} stroke=${color} stroke-width=2 />`,
        '</svg>'].join('');
    },
  });
}

function customizePoint(point) {
  const color = point.series.getPointsByArg(point.argument)[0].getColor();
  const pointSettings = { color };
  if (point.argument === 'Stroke Pattern') {
    pointSettings.color = { fillId: strokePattern(color) };
  }
  if (point.argument === 'Square Pattern') {
    pointSettings.color = { fillId: squarePattern(color) };
  }
  if (point.argument === 'Linear Gradient') {
    pointSettings.color = { fillId: linearGradient(color) };
  }
  if (point.argument === 'Radial Gradient') {
    pointSettings.color = { fillId: radialGradient(color) };
  }
  if (point.argument === 'Pattern with image') {
    pointSettings.color = { fillId: patternImage(color) };
  }

  return pointSettings;
}

export default App;
