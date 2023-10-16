import React from 'react';
import ContextMenu from 'devextreme-react/context-menu';
import notify from 'devextreme/ui/notify';
import { contextMenuItems as items } from './data.js';

const itemClick = (e) => {
  if (!e.itemData.items) {
    notify(`The "${e.itemData.text}" item was clicked`, 'success', 1500);
  }
};
const ItemTemplate = (e) => (
  <React.Fragment>
    <span className={e.icon} />
    {e.items ? <span className="dx-icon-spinright" /> : null}
    {e.text}
  </React.Fragment>
);
const App = () => (
  <React.Fragment>
    <div className="label">Right click an image to display the context menu:</div>
    <img
      id="image"
      alt="product"
      src="../../../../images/products/5.png"
    />
    <ContextMenu
      dataSource={items}
      width={200}
      target="#image"
      itemRender={ItemTemplate}
      onItemClick={itemClick}
    />
  </React.Fragment>
);
export default App;
