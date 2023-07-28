import React, { useEffect } from 'react';
import Diagram, {
  Nodes, AutoLayout, Edges, Toolbox, Group,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

const App = () => {
  const orgItemsDataSource = new ArrayStore({
    key: 'id',
    data: service.getOrgItems(),
  });
  const orgLinksDataSource = new ArrayStore({
    key: 'id',
    data: service.getOrgLinks(),
  });

  const itemTypeExpr = (obj, value) => {
    if (value) {
      obj.type = (value === 'rectangle') ? undefined : 'group';
    } else {
      return obj.type === 'group' ? 'ellipse' : 'rectangle';
    }
    return null;
  }

  const itemWidthExpr = (obj, value) => {
    if (value) {
      obj.width = value;
    } else {
      return obj.width || (obj.type === 'group' && 1.5) || 1;
    }
    return null;
  }

  const itemHeightExpr = (obj, value) => {
    if (value) {
      obj.height = value;
    } else {
      return obj.height || (obj.type === 'group' && 1) || 0.75;
    }
    return null;
  }

  const itemTextStyleExpr = (obj) => {
    if (obj.level === 'senior') {
      return { 'font-weight': 'bold', 'text-decoration': 'underline' };
    }
    return {};
  }

  const itemStyleExpr = (obj) => {
    const style = { stroke: '#444444' };
    if (obj.type === 'group') {
      style.fill = '#f3f3f3';
    }
    return style;
  }

  const linkStyleExpr = () => {
    return { stroke: '#444444' };
  }

  const linkFromLineEndExpr = () => {
    return 'none';
  }

  const linkToLineEndExpr = () => {
    return 'none';
  }

  useEffect(() => {
    // Initialize the data sources
    orgItemsDataSource.load();
    orgLinksDataSource.load();
  }, []);

  return (
    <Diagram id="diagram">
      <Nodes
        dataSource={orgItemsDataSource}
        typeExpr={itemTypeExpr}
        textExpr="name"
        widthExpr={itemWidthExpr}
        heightExpr={itemHeightExpr}
        textStyleExpr={itemTextStyleExpr}
        styleExpr={itemStyleExpr}>
        <AutoLayout type="tree" orientation="horizontal" />
      </Nodes>
      <Edges dataSource={orgLinksDataSource} styleExpr={linkStyleExpr}
        fromLineEndExpr={linkFromLineEndExpr} toLineEndExpr={linkToLineEndExpr} />
      <Toolbox>
        <Group category="general" title="General" />
      </Toolbox>
    </Diagram>
  );
}

export default App;