import React from 'react';
import Diagram, {
  Nodes, AutoLayout, Toolbox, PropertiesPanel,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

export default function App() {
  const [dataSource, setDataSource] = React.useState([]);

  React.useEffect(() => {
    setDataSource(new ArrayStore({
      key: 'ID',
      data: service.getEmployees(),
    }));
  }, []);

  return (
    <Diagram id="diagram" simpleView={true}>
      <Nodes dataSource={dataSource} keyExpr="ID" textExpr="Title" parentKeyExpr="Head_ID">
        <AutoLayout type="tree" />
      </Nodes>
      <Toolbox visibility="disabled" />
      <PropertiesPanel visibility="disabled" />
    </Diagram>
  );
}
