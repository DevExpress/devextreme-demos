import React, { useEffect, useState } from 'react';
import Diagram, {
  Nodes, AutoLayout, Toolbox, Group,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

const App = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await service.getEmployees();
      setDataSource(new ArrayStore({
        key: 'this',
        data: data,
      }));
    };

    fetchData();
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