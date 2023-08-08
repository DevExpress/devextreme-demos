import React from 'react';
import Diagram, {
  Nodes, AutoLayout, Edges, Toolbox, Group,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

const orgItemsDataSource = new ArrayStore({
  key: 'id',
  data: service.getOrgItems(),
});
const orgLinksDataSource = new ArrayStore({
  key: 'id',
  data: service.getOrgLinks(),
});

export default function App() {
  React.useEffect(() => {
    // any necessary code that needs to run on component mount or update
  }, []);

  return (
    <Diagram id="diagram">
      <Nodes dataSource={orgItemsDataSource} imageUrlExpr="picture">
        <AutoLayout orientation="horizontal" type="tree" />
      </Nodes>
      <Edges dataSource={orgLinksDataSource} />
      <Toolbox>
        <Group category="general" title="General" />
        <Group category="orgChart" title="Organizational Chart" expanded={true} />
      </Toolbox>
    </Diagram>
  );
}
