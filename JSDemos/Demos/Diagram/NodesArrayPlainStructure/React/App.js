import React, { useEffect } from 'react';
import Diagram, {
  Nodes, AutoLayout, Toolbox, Group,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

const App = () => {
  const dataSource = new ArrayStore({
    key: 'ID',
    data: service.getEmployees(),
  });

  useEffect(() => {
    // Any side effects can be added here
  }, []);

  return (
    <Diagram id="diagram">
      <Nodes dataSource={dataSource} keyExpr="ID" textExpr="Title" parentKeyExpr="Head_ID">
        <AutoLayout type="tree" />
      </Nodes>
      <Toolbox>
        <Group category="general" title="General" />
      </Toolbox>
    </Diagram>
  );
}

export default App;