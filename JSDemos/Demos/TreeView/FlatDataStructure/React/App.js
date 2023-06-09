import React, { useState } from 'react';
import TreeView from 'devextreme-react/tree-view';
import service from './data.js';

const App = () => {
  const [currentItem, setCurrentItem] = useState(service.getProducts()[0]);

  const selectItem = (e) => {
    setCurrentItem({ ...e.itemData });
  };

  return (
    <div className="form">
      <TreeView
        id="simple-treeview"
        items={service.getProducts()}
        dataStructure="plain"
        displayExpr="name"
        parentIdExpr="categoryId"
        keyExpr="ID"
        width={300}
        onItemClick={selectItem}
      />
      {currentItem.price && (
        <div id="product-details">
          <img src={currentItem.icon} />
          <div className="name">{currentItem.name}</div>
          <div className="price">{`$${currentItem.price}`}</div>
        </div>
      )}
    </div>
  );
};

export default App;