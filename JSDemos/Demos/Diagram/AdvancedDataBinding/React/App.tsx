import React from 'react';
import Diagram, {
  Nodes, AutoLayout, Edges, Toolbox, Group,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

class App extends React.Component {
  orgItemsDataSource: any;

  orgLinksDataSource: any;

  constructor(props) {
    super(props);

    this.orgItemsDataSource = new ArrayStore({
      key: 'id',
      data: service.getOrgItems(),
    });
    this.orgLinksDataSource = new ArrayStore({
      key: 'id',
      data: service.getOrgLinks(),
    });
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Diagram' cannot be used as a JSX component.
      <Diagram id="diagram">
        // @ts-expect-error TS(2786): 'Nodes' cannot be used as a JSX component.
        <Nodes
          // @ts-expect-error TS(2322): Type '{ children: Element; dataSource: any; typeEx... Remove this comment to see the full error message
          dataSource={this.orgItemsDataSource}
          typeExpr={this.itemTypeExpr}
          textExpr="name"
          widthExpr={this.itemWidthExpr}
          heightExpr={this.itemHeightExpr}
          textStyleExpr={this.itemTextStyleExpr}
          styleExpr={this.itemStyleExpr}>
          // @ts-expect-error TS(2786): 'AutoLayout' cannot be used as a JSX component.
          <AutoLayout type="tree" orientation="horizontal" />
        </Nodes>
        // @ts-expect-error TS(2786): 'Edges' cannot be used as a JSX component.
        <Edges dataSource={this.orgLinksDataSource} styleExpr={this.linkStyleExpr}
          fromLineEndExpr={this.linkFromLineEndExpr} toLineEndExpr={this.linkToLineEndExpr} />
        // @ts-expect-error TS(2786): 'Toolbox' cannot be used as a JSX component.
        <Toolbox>
          // @ts-expect-error TS(2786): 'Group' cannot be used as a JSX component.
          <Group category="general" title="General" />
        </Toolbox>
      </Diagram>
    );
  }

  itemTypeExpr(obj, value) {
    if (value) {
      obj.type = (value === 'rectangle') ? undefined : 'group';
    } else {
      return obj.type === 'group' ? 'ellipse' : 'rectangle';
    }
    return null;
  }

  itemWidthExpr(obj, value) {
    if (value) {
      obj.width = value;
    } else {
      return obj.width || (obj.type === 'group' && 1.5) || 1;
    }
    return null;
  }

  itemHeightExpr(obj, value) {
    if (value) {
      obj.height = value;
    } else {
      return obj.height || (obj.type === 'group' && 1) || 0.75;
    }
    return null;
  }

  itemTextStyleExpr(obj) {
    if (obj.level === 'senior') {
      return { 'font-weight': 'bold', 'text-decoration': 'underline' };
    }
    return {};
  }

  itemStyleExpr(obj) {
    const style = { stroke: '#444444' };
    if (obj.type === 'group') {
      // @ts-expect-error TS(2339): Property 'fill' does not exist on type '{ stroke: ... Remove this comment to see the full error message
      style.fill = '#f3f3f3';
    }
    return style;
  }

  linkStyleExpr() {
    return { stroke: '#444444' };
  }

  linkFromLineEndExpr() {
    return 'none';
  }

  linkToLineEndExpr() {
    return 'none';
  }
}

export default App;
