import React, { useState } from 'react';
import { ButtonGroup } from 'devextreme-react/button-group';
import notify from 'devextreme/ui/notify';
import { alignments, fontStyles } from './data.js';

const selectedItemKeys = ['left'];

function App() {
  const [selectedItems, setSelectedItems] = useState(selectedItemKeys);

  const handleItemClick = (e) => {
    notify({ message: `The "${e.itemData.hint}" button was clicked`, width: 320 }, 'success', 1000);
    setSelectedItems(e.component.option('selectedItemKeys'));
  };

  return (
    <div>
      <div className="buttongroups-container">
        <ButtonGroup
          items={alignments}
          keyExpr="alignment"
          stylingMode="outlined"
          selectedItemKeys={selectedItems}
          onItemClick={handleItemClick}
        />
        <ButtonGroup
          items={fontStyles}
          keyExpr="style"
          stylingMode="outlined"
          selectionMode="multiple"
          onItemClick={handleItemClick}
        />
      </div>
      <div className="buttongroups-container">
        <ButtonGroup
          items={alignments}
          keyExpr="alignment"
          stylingMode="text"
          selectedItemKeys={selectedItems}
          onItemClick={handleItemClick}
        />
        <ButtonGroup
          className="multiple-selection-styling-mode"
          items={fontStyles}
          keyExpr="style"
          stylingMode="text"
          selectionMode="multiple"
          onItemClick={handleItemClick}
        />
      </div>
    </div>
  );
}

export default App;
