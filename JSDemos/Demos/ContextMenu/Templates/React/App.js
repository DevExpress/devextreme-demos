import React, { useState } from 'react';
import ContextMenu from 'devextreme-react/context-menu';
import notify from 'devextreme/ui/notify';
import { contextMenuItems as items } from './data.js';

function App() {
  const [imageSrc, setImageSrc] = useState('../../../../images/products/5.png');

  function itemClick(e) {
    if (!e.itemData.items) {
      notify(`The "${e.itemData.text}" item was clicked`, 'success', 1500);
    }
  }

  function ItemTemplate(e) {
    return (
      <React.Fragment>
        <span className={ e.icon } />
        { e.items ? <span className="dx-icon-spinright" /> : null }
        { e.text }
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="label">
        Right click an image to display the context menu:
      </div>
      <img id="image" src={imageSrc} onClick={() => setImageSrc('../../../../images/products/6.png')} />
      <ContextMenu
        dataSource={items}
        width={200}
        target="#image"
        itemRender={ItemTemplate}
        onItemClick={itemClick} />
    </React.Fragment>
  );
}

export default App;
