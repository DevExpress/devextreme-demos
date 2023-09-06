import React from 'react';
import TreeView from 'devextreme-react/tree-view';
import Sortable from 'devextreme-react/sortable';

import service from './data.ts';

const calculateToIndex = (e: { fromComponent: any; toComponent: any; dropInsideItem: any; toIndex: number; fromIndex: number; }) => {
  if (e.fromComponent !== e.toComponent || e.dropInsideItem) {
    return e.toIndex;
  }

  return e.fromIndex >= e.toIndex
    ? e.toIndex
    : e.toIndex + 1;
};

const findNode = (treeView: { element: () => { (): any; new(): any; querySelectorAll: { (arg0: string): { (): any; new(): any;[x: string]: any; }; new(): any; }; }; getNodes: () => any; }, index: string | number) => {
  const nodeElement = treeView.element().querySelectorAll('.dx-treeview-node')[index];
  if (nodeElement) {
    return findNodeById(treeView.getNodes(), nodeElement.getAttribute('data-item-id'));
  }
  return null;
};

const findNodeById = (nodes: string | any[], id) => {
  for (let i = 0; i < nodes.length; i += 1) {
    if (nodes[i].itemData.id === id) {
      return nodes[i];
    }
    if (nodes[i].children) {
      const node = findNodeById(nodes[i].children, id);
      if (node != null) {
        return node;
      }
    }
  }
  return null;
};

const moveNode = (fromNode: { itemData: { id: any; }; }, toNode: { itemData: { items: any[]; id: any; }; }, fromItems, toItems, isDropInsideItem) => {
  const fromNodeContainingArray = getNodeContainingArray(fromNode, fromItems);
  const fromIndex = fromNodeContainingArray.findIndex((item: { id: any; }) => item.id === fromNode.itemData.id);
  fromNodeContainingArray.splice(fromIndex, 1);

  if (isDropInsideItem) {
    toNode.itemData.items.splice(toNode.itemData.items.length, 0, fromNode.itemData);
  } else {
    const toNodeContainingArray = getNodeContainingArray(toNode, toItems);
    const toIndex = toNode === null
      ? toNodeContainingArray.length
      : toNodeContainingArray.findIndex((item: { id: any; }) => item.id === toNode.itemData.id);
    toNodeContainingArray.splice(toIndex, 0, fromNode.itemData);
  }
};

const getNodeContainingArray = (node: { parent: { itemData: { items: any; }; }; }, rootArray) => (node === null || node.parent === null
  ? rootArray
  : node.parent.itemData.items);

const isChildNode = (parentNode: { itemData: { id: any; }; }, childNode: { parent: any; }) => {
  let { parent } = childNode;
  while (parent !== null) {
    if (parent.itemData.id === parentNode.itemData.id) {
      return true;
    }
    parent = parent.parent;
  }
  return false;
};

const getTopVisibleNode = (component: { element: () => any; }) => {
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
};

const App = () => {
  const treeViewDriveCRef = React.useRef();
  const treeViewDriveDRef = React.useRef();

  const [itemsDriveC, setItemsDriveC] = React.useState(service.getItemsDriveC());
  const [itemsDriveD, setItemsDriveD] = React.useState(service.getItemsDriveD());

  const onDragChange = React.useCallback((e: { fromComponent: any; toComponent: any; fromData: any; fromIndex: any; toData: any; cancel: boolean; }) => {
    if (e.fromComponent === e.toComponent) {
      const fromNode = findNode(getTreeView(e.fromData), e.fromIndex);
      const toNode = findNode(getTreeView(e.toData), calculateToIndex(e));
      if (toNode !== null && isChildNode(fromNode, toNode)) {
        e.cancel = true;
      }
    }
  }, [getTreeView]);

  const getStateFieldItems = React.useCallback((driveName: string) => (driveName === 'driveC'
    ? itemsDriveC
    : itemsDriveD), [itemsDriveC, itemsDriveD]);

  const onDragEnd = React.useCallback((e: { fromComponent: any; toComponent: any; fromIndex: any; toIndex: any; fromData: any; toData: any; dropInsideItem: any; }) => {
    if (e.fromComponent === e.toComponent && e.fromIndex === e.toIndex) {
      return;
    }

    const fromTreeView = getTreeView(e.fromData);
    const toTreeView = getTreeView(e.toData);

    const fromNode = findNode(fromTreeView, e.fromIndex);
    const toNode = findNode(toTreeView, calculateToIndex(e));

    if (e.dropInsideItem && toNode !== null && !toNode.itemData.isDirectory) {
      return;
    }

    const fromTopVisibleNode = getTopVisibleNode(e.fromComponent);
    const toTopVisibleNode = getTopVisibleNode(e.toComponent);

    const fromItems = getStateFieldItems(e.fromData);
    const toItems = getStateFieldItems(e.toData);
    moveNode(fromNode, toNode, fromItems, toItems, e.dropInsideItem);

    setItemsDriveC([...fromItems]);
    setItemsDriveD([...toItems]);
    fromTreeView.scrollToItem(fromTopVisibleNode);
    toTreeView.scrollToItem(toTopVisibleNode);
  }, [getTreeView, getStateFieldItems]);

  const getTreeView = React.useCallback((driveName: string) => (driveName === 'driveC'
    ? treeViewDriveCRef.current.instance
    : treeViewDriveDRef.current.instance), []);

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
          onDragChange={onDragChange}
          onDragEnd={onDragEnd}>
          <TreeView
            id="treeviewDriveC"
            expandNodesRecursive={false}
            dataStructure="tree"
            ref={treeViewDriveCRef}
            items={itemsDriveC}
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
          onDragChange={onDragChange}
          onDragEnd={onDragEnd}>
          <TreeView
            id="treeviewDriveD"
            expandNodesRecursive={false}
            dataStructure="tree"
            ref={treeViewDriveDRef}
            items={itemsDriveD}
            width={250}
            height={380}
            displayExpr="name"
          />
        </Sortable>
      </div>
    </div>
  );
};

export default App;
