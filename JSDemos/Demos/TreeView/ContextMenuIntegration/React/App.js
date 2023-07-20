import React, { useState, useRef } from 'react';
import TreeView from 'devextreme-react/tree-view';
import ContextMenu from 'devextreme-react/context-menu';
import List from 'devextreme-react/list';
import service from './data.js';

const products = service.getProducts();
const menuItems = service.getMenuItems();

const App = () => {
  const contextMenuRef = useRef();
  const treeViewRef = useRef();
  const [logItems, setLogItems] = useState([]);
  const [selectedTreeItem, setSelectedTreeItem] = useState(undefined);

  const treeViewItemContextMenu = (e) => {
    setSelectedTreeItem(e.itemData);

    const isProduct = e.itemData.price !== undefined;
    contextMenuRef.current.instance.option('items[0].visible', !isProduct);
    contextMenuRef.current.instance.option('items[1].visible', !isProduct);
    contextMenuRef.current.instance.option('items[2].visible', isProduct);
    contextMenuRef.current.instance.option('items[3].visible', isProduct);

    contextMenuRef.current.instance.option('items[0].disabled', e.node.expanded);
    contextMenuRef.current.instance.option('items[1].disabled', !e.node.expanded);
  };

  const contextMenuItemClick = (e) => {
    let logEntry = '';
    switch (e.itemData.id) {
      case 'expand': {
        logEntry = `The '${selectedTreeItem.text}' group was expanded`;
        treeViewRef.current.instance.expandItem(selectedTreeItem.id);
        break;
      }
      case 'collapse': {
        logEntry = `The '${selectedTreeItem.text}' group was collapsed`;
        treeViewRef.current.instance.collapseItem(selectedTreeItem.id);
        break;
      }
      case 'details': {
        logEntry = `Details about '${selectedTreeItem.text}' were displayed`;
        break;
      }
      case 'copy': {
        logEntry = `Information about '${selectedTreeItem.text}' was copied`;
        break;
      }
      default:
        break;
    }
    const updatedLogItems = [...logItems, logEntry];
    setLogItems(updatedLogItems);
  };

  return (
    <div className="form">
      <TreeView
        id="treeview"
        ref={treeViewRef}
        items={products}
        width={300}
        height={450}
        onItemContextMenu={treeViewItemContextMenu}
      />
      <div className="log-container">
        <div>
          <i className="icon dx-icon-clock"></i>&nbsp;Operations log:
        </div>
        <List
          id="log"
          width={400}
          height={300}
          showScrollbar="always"
          items={logItems}
        />
      </div>
      <ContextMenu
        ref={contextMenuRef}
        dataSource={menuItems}
        target="#treeview .dx-treeview-item"
        onItemClick={contextMenuItemClick}
      />
    </div>
  );
};

export default App;
