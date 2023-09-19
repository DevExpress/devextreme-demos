import React from 'react';
import TreeMap, { Colorizer, Tooltip } from 'devextreme-react/tree-map';
import SelectBox from 'devextreme-react/select-box';
import { populationByAge, algorithmLabel } from './data.ts';

const algorithms = ['sliceAndDice', 'squarified', 'strip', 'custom'];

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = React.useState(algorithms[2]);
  const [
    currentAlgorithm,
    setCurrentAlgorithm,
  ] = React.useState(getCurrentAlgorithm(algorithms[2]));

  const setAlgorithm = React.useCallback((data: { value: any; }) => {
    setSelectedAlgorithm(data.value);
    setCurrentAlgorithm(getCurrentAlgorithm(data.value));
  }, [setSelectedAlgorithm, setCurrentAlgorithm]);

  return (
    <React.Fragment>
      <TreeMap
        id="treemap"
        dataSource={populationByAge}
        layoutAlgorithm={currentAlgorithm}
        title="Population by Age Groups"
      >
        <Colorizer
          colorizeGroups={true}
          type="discrete"
        />
        <Tooltip
          enabled={true}
          customizeTooltip={customizeTooltip}
          format="thousands"
        />
      </TreeMap>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Tiling Algorithm </span>
          <SelectBox
            dataSource={algorithms}
            width={200}
            inputAttr={algorithmLabel}
            value={selectedAlgorithm}
            onValueChanged={setAlgorithm}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

function customAlgorithm(arg: { rect: string | any[]; sum: any; items: any[]; }) {
  const totalRect = arg.rect.slice();
  let totalSum = arg.sum;
  let side = 0;

  arg.items.forEach((item: { value: number; rect: any; }) => {
    const size = Math.round(((totalRect[side + 2] - totalRect[side]) * item.value) / totalSum);
    const rect = totalRect.slice();

    totalSum -= item.value;
    totalRect[side] += size;
    rect[side + 2] = totalRect[side];
    item.rect = rect;
    side = 1 - side;
  });
}

function getCurrentAlgorithm(selectedAlgorithm: string) {
  let currentAlgorithm = selectedAlgorithm.toLowerCase();
  if (currentAlgorithm === 'custom') {
    currentAlgorithm = customAlgorithm;
  }

  return currentAlgorithm;
}

function customizeTooltip(arg: { node: { getParent?: any; isLeaf?: any; data?: any; }; valueText: any; }) {
  const { data } = arg.node;
  const parentData = arg.node.getParent().data;

  return {
    text: arg.node.isLeaf()
      ? `<span class='country'>${parentData.name}</span><br />${data.name}<br />${arg.valueText}(${((100 * data.value) / parentData.total).toFixed(1)}%)`
      : `<span class='country'>${data.name}</span>`,
  };
}

export default App;
