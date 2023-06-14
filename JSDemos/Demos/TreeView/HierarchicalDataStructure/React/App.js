import React, { useState } from 'react';
import TreeView from 'devextreme-react/tree-view';
import service from './data.js';

const App = () => {
  const [currentItem, setCurrentItem] = useState({ ...service.getProducts()[0] });

  const selectItem = (e) => {
    setCurrentItem({ ...e.itemData });
  };

  return (
    <div className="form">
      <TreeView id="simple-treeview"
        items={service.getProducts()}
        width={300}
        onItemClick={selectItem} />
      {currentItem.price
      && <div id="product-details">
        <img src={currentItem.image} />
        <div className="name">{currentItem.text}</div>
        <div className="price">{`$${currentItem.price}`}</div>
      </div>
      }
    </div>
  );
};

export default App;
