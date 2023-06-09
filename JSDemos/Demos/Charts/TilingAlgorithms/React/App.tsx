import React from 'react';
import TreeMap, { Colorizer, Tooltip } from 'devextreme-react/tree-map';
import SelectBox from 'devextreme-react/select-box';
import { populationByAge, algorithmLabel } from './data.js';

const algorithms = ['sliceAndDice', 'squarified', 'strip', 'custom'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      selectedAlgorithm: algorithms[2],
      currentAlgorithm: getCurrentAlgorithm(algorithms[2]),
    };
    this.setAlgorithm = this.setAlgorithm.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'TreeMap' cannot be used as a JSX component.
        <TreeMap
          id="treemap"
          dataSource={populationByAge}
          layoutAlgorithm={this.state.currentAlgorithm}
          title="Population by Age Groups"
        >
          // @ts-expect-error TS(2786): 'Colorizer' cannot be used as a JSX component.
          <Colorizer
            // @ts-expect-error TS(2322): Type '{ colorizeGroups: boolean; type: string; }' ... Remove this comment to see the full error message
            colorizeGroups={true}
            type="discrete"
          />
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip
            // @ts-expect-error TS(2322): Type '{ enabled: boolean; customizeTooltip: (arg: ... Remove this comment to see the full error message
            enabled={true}
            customizeTooltip={customizeTooltip}
            format="thousands"
          />
        </TreeMap>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Tiling Algorithm </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              dataSource={algorithms}
              width={200}
              inputAttr={algorithmLabel}
              value={this.state.selectedAlgorithm}
              onValueChanged={this.setAlgorithm}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  setAlgorithm(data) {
    this.setState({
      selectedAlgorithm: data.value,
      currentAlgorithm: getCurrentAlgorithm(data.value),
    });
  }
}

function customAlgorithm(arg) {
  const totalRect = arg.rect.slice();
  let totalSum = arg.sum;
  let side = 0;

  arg.items.forEach((item) => {
    const size = Math.round(((totalRect[side + 2] - totalRect[side]) * item.value) / totalSum);
    const rect = totalRect.slice();

    totalSum -= item.value;
    totalRect[side] += size;
    rect[side + 2] = totalRect[side];
    item.rect = rect;
    side = 1 - side;
  });
}

function getCurrentAlgorithm(selectedAlgorithm) {
  let currentAlgorithm = selectedAlgorithm.toLowerCase();
  if (currentAlgorithm === 'custom') {
    currentAlgorithm = customAlgorithm;
  }

  return currentAlgorithm;
}

function customizeTooltip(arg) {
  const { data } = arg.node;
  const parentData = arg.node.getParent().data;

  return {
    text: arg.node.isLeaf()
      ? `<span class='country'>${parentData.name}</span><br />${data.name}<br />${arg.valueText}(${((100 * data.value) / parentData.total).toFixed(1)}%)`
      : `<span class='country'>${data.name}</span>`,
  };
}

export default App;
