import React from 'react';
import Diagram, {
  Nodes, AutoLayout, Toolbox, Group,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.dataSource = new ArrayStore({
      key: 'this',
      data: service.getEmployees(),
    });
  }

  render() {
    return (
      <Diagram id="diagram">
        <Nodes dataSource={this.dataSource} textExpr="Title" itemsExpr="Items">
          <AutoLayout type="tree" />
        </Nodes>
        <Toolbox>
          <Group category="general" title="General" />
        </Toolbox>
      </Diagram>
    );
  }
}

export default App;
