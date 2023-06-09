import React, { useState, useEffect } from 'react';
import Diagram, {
  Nodes, AutoLayout, Toolbox, Group,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

const App = () => {
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    const data = new ArrayStore({
      key: 'this',
      data: service.getEmployees(),
    });
    setDataSource(data);
  }, []);

  return (
    <Diagram id="diagram">
      <Nodes dataSource={dataSource} textExpr="Title" itemsExpr="Items">
        <AutoLayout type="tree" />
      </Nodes>
      <Toolbox>
        <Group category="general" title="General" />
      </Toolbox>
    </Diagram>
  );
};

export default App;