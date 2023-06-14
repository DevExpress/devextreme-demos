import React, { useState } from 'react';
import Diagram, {
  Nodes,
  AutoLayout,
  Edges,
  Toolbox,
  Group,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

const App = () => {
  const [orgItemsDataSource] = useState(
    new ArrayStore({
      key: 'id',
      data: service.getOrgItems(),
    }),
  );
  const [orgLinksDataSource] = useState(
    new ArrayStore({
      key: 'id',
      data: service.getOrgLinks(),
    }),
  );

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
};

export default App;
