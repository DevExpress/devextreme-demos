import React from 'react';
import TreeView from 'devextreme-react/tree-view';
import Sortable from 'devextreme-react/sortable';

import service from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.treeViewDriveCRef = React.createRef();
    this.treeViewDriveDRef = React.createRef();

    this.state = {
      itemsDriveC: service.getItemsDriveC(),
      itemsDriveD: service.getItemsDriveD(),
    };

    this.onDragChange = this.onDragChange.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  render() {
    return (
      <div className="form">
        <div className="drive-panel">
          <div className="drive-header dx-treeview-item"><div className="dx-treeview-item-content"><i className="dx-icon dx-icon-activefolder"></i><span>Drive C:</span></div></div>
          <Sortable
            filter=".dx-treeview-item"
            group="shared"
            data="driveC"
            allowDropInsideItem={true}
            allowReordering={true}
            onDragChange={this.onDragChange}
            onDragEnd={this.onDragEnd}>
            <TreeView
              id="treeviewDriveC"
              expandNodesRecursive={false}
              dataStructure="plain"
              ref={this.treeViewDriveCRef}
              items={this.state.itemsDriveC}
              width={250}
              height={380}
              displayExpr="name"
            />
          </Sortable>
        </div>
        <div className="drive-panel">
          <div className="drive-header dx-treeview-item"><div className="dx-treeview-item-content"><i className="dx-icon dx-icon-activefolder"></i><span>Drive D:</span></div></div>
          <Sortable
            filter=".dx-treeview-item"
            group="shared"
            data="driveD"
            allowDropInsideItem={true}
            allowReordering={true}
            onDragChange={this.onDragChange}
            onDragEnd={this.onDragEnd}>
            <TreeView
              id="treeviewDriveD"
              expandNodesRecursive={false}
              dataStructure="plain"
              ref={this.treeViewDriveDRef}
              items={this.state.itemsDriveD}
              width={250}
              height={380}
              displayExpr="name"
            />
          </Sortable>
        </div>
      </div>
    );
  }

  get treeViewDriveC() {
    return this.treeViewDriveCRef.current.instance;
  }

  get treeViewDriveD() {
    return this.treeViewDriveDRef.current.instance;
  }

  onDragChange(e: { fromComponent: any; toComponent: any; fromData: any; fromIndex: any; toData: any; cancel: boolean; }) {
    if (e.fromComponent === e.toComponent) {
      const fromNode = this.findNode(this.getTreeView(e.fromData), e.fromIndex);
      const toNode = this.findNode(this.getTreeView(e.toData), this.calculateToIndex(e));
      if (toNode !== null && this.isChildNode(fromNode, toNode)) {
        e.cancel = true;
      }
    }
  }

  onDragEnd(e: { fromComponent: any; toComponent: any; fromIndex: any; toIndex: any; fromData: any; toData: any; dropInsideItem: any; }) {
    if (e.fromComponent === e.toComponent && e.fromIndex === e.toIndex) {
      return;
    }

    const fromTreeView = this.getTreeView(e.fromData);
    const toTreeView = this.getTreeView(e.toData);

    const fromNode = this.findNode(fromTreeView, e.fromIndex);
    const toNode = this.findNode(toTreeView, this.calculateToIndex(e));

    if (e.dropInsideItem && toNode !== null && !toNode.itemData.isDirectory) {
      return;
    }

    const fromTopVisibleNode = this.getTopVisibleNode(e.fromComponent);
    const toTopVisibleNode = this.getTopVisibleNode(e.toComponent);

    const fromItems = this.state[this.getStateFieldName(e.fromData)];
    const toItems = this.state[this.getStateFieldName(e.toData)];
    this.moveNode(fromNode, toNode, fromItems, toItems, e.dropInsideItem);

    this.setState({
      [this.getStateFieldName(e.fromData)]: [...fromItems],
      [this.getStateFieldName(e.toData)]: [...toItems],
    });
    fromTreeView.scrollToItem(fromTopVisibleNode);
    toTreeView.scrollToItem(toTopVisibleNode);
  }

  getTreeView(driveName: string) {
    return driveName === 'driveC'
      ? this.treeViewDriveC
      : this.treeViewDriveD;
  }

  getStateFieldName(driveName: string) {
    return driveName === 'driveC'
      ? 'itemsDriveC'
      : 'itemsDriveD';
  }

  calculateToIndex(e: { fromComponent: any; toComponent: any; dropInsideItem: any; toIndex: number; fromIndex: number; }) {
    if (e.fromComponent !== e.toComponent || e.dropInsideItem) {
      return e.toIndex;
    }

    return e.fromIndex >= e.toIndex
      ? e.toIndex
      : e.toIndex + 1;
  }

  findNode(treeView: { element: () => { (): any; new(): any; querySelectorAll: { (arg0: string): { (): any; new(): any;[x: string]: any; }; new(): any; }; }; getNodes: () => any; }, index: string | number) {
    const nodeElement = treeView.element().querySelectorAll('.dx-treeview-node')[index];
    if (nodeElement) {
      return this.findNodeById(treeView.getNodes(), nodeElement.getAttribute('data-item-id'));
    }
    return null;
  }

  findNodeById(nodes: string | any[], id) {
    for (let i = 0; i < nodes.length; i += 1) {
      if (nodes[i].itemData.id === id) {
        return nodes[i];
      }
      if (nodes[i].children) {
        const node = this.findNodeById(nodes[i].children, id);
        if (node != null) {
          return node;
        }
      }
    }
    return null;
  }

  moveNode(fromNode: { itemData: { id: any; parentId: any; }; }, toNode: { itemData: { id: any; parentId: any; }; }, fromItems: { findIndex: (arg0: (item: any) => boolean) => any; splice: (arg0: any,arg1: number) => void; }, toItems: { length: any; findIndex: (arg0: (item: any) => boolean) => any; splice: (arg0: any,arg1: number,arg2: any) => void; }, isDropInsideItem) {
    const fromIndex = fromItems.findIndex((item: { id: any; }) => item.id === fromNode.itemData.id);
    fromItems.splice(fromIndex, 1);

    const toIndex = toNode === null || isDropInsideItem
      ? toItems.length
      : toItems.findIndex((item: { id: any; }) => item.id === toNode.itemData.id);
    toItems.splice(toIndex, 0, fromNode.itemData);

    this.moveChildren(fromNode, fromItems, toItems);
    if (isDropInsideItem) {
      fromNode.itemData.parentId = toNode.itemData.id;
    } else {
      fromNode.itemData.parentId = toNode != null
        ? toNode.itemData.parentId
        : undefined;
    }
  }

  moveChildren(node: { itemData: { isDirectory: any; }; children: any[]; }, fromDataSource: { findIndex: (arg0: (item: any) => boolean) => any; splice: (arg0: any,arg1: number) => void; }, toDataSource: any[]) {
    if (!node.itemData.isDirectory) {
      return;
    }

    node.children.forEach((child: { itemData: { isDirectory: any; id: any; } | any[]; }) => {
      if (child.itemData.isDirectory) {
        this.moveChildren(child, fromDataSource, toDataSource);
      }

      const fromIndex = fromDataSource.findIndex((item: { id: any; }) => item.id === child.itemData.id);
      fromDataSource.splice(fromIndex, 1);
      toDataSource.splice(toDataSource.length, 0, child.itemData);
    });
  }

  isChildNode(parentNode: { itemData: { id: any; }; }, childNode: { parent: any; }) {
    let { parent } = childNode;
    while (parent !== null) {
      if (parent.itemData.id === parentNode.itemData.id) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  getTopVisibleNode(component: { element: () => any; }) {
    const treeViewElement = component.element();
    const treeViewTopPosition = treeViewElement.getBoundingClientRect().top;
    const nodes = treeViewElement.querySelectorAll('.dx-treeview-node');
    for (let i = 0; i < nodes.length; i += 1) {
      const nodeTopPosition = nodes[i].getBoundingClientRect().top;
      if (nodeTopPosition >= treeViewTopPosition) {
        return nodes[i];
      }
    }

    return null;
  }
}

export default App;
