import React, { useState, useEffect } from 'react';
import Diagram, {
  Nodes, AutoLayout, Toolbox, PropertiesPanel,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

const App = () => {
  const [selectedItemNames, setSelectedItemNames] = useState('Nobody has been selected');
  const [dataSource] = useState(new ArrayStore({
    key: 'ID',
    data: service.getEmployees(),
  }));

  const onContentReady = (e) => {
    const diagram = e.component;
    // preselect some shape
    const items = diagram.getItems().filter((item) => item.itemType === 'shape' && (item.text === 'Greta Sims'));
    if (items.length > 0) {
      diagram.setSelectedItems(items);
      diagram.scrollToItem(items[0]);
      diagram.focus();
    }
  };

  const onSelectionChanged = ({ items }) => {
    let selectedItemNames = 'Nobody has been selected';
    const filteredItems = items
      .filter((item) => item.itemType === 'shape')
      .map((item) => item.text);
    if (filteredItems.length > 0) {
      selectedItemNames = filteredItems.join(', ');
    }
    setSelectedItemNames(selectedItemNames);
  };

  useEffect(() => {
    // componentDidMount logic here
  }, []);

  return (
    <div>
      <Diagram id="diagram" onContentReady={onContentReady} onSelectionChanged={onSelectionChanged}>
        <Nodes dataSource={dataSource} keyExpr="ID" textExpr="Full_Name" parentKeyExpr="Head_ID">
          <AutoLayout type="tree" />
        </Nodes>
        <Toolbox visibility="disabled" />
        <PropertiesPanel visibility="disabled" />
      </Diagram>
      <div className="selected-data">
        <span className="caption">Selected Items:</span>{' '}
        <span>
          {selectedItemNames}
        </span>
      </div>
    </div>
  );
};

export default App;