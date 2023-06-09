import React, { useState } from 'react';
import Menu from 'devextreme-react/menu';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';
import service from './data.js';

const orientations = ['horizontal', 'vertical'];
const orientationLabel = { 'aria-label': 'Orientation' };
const showSubmenuModeLabel = { 'aria-label': 'Show Submenu Mode' };

const App = () => {
  const [showFirstSubmenuModes, setShowFirstSubmenuModes] = useState({
    name: 'onClick',
    delay: { show: 0, hide: 300 },
  });
  const [orientation, setOrientation] = useState('horizontal');
  const [hideSubmenuOnMouseLeave, setHideSubmenuOnMouseLeave] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const products = service.getProducts();
  const showSubmenuModes = [
    {
      name: 'onHover',
      delay: { show: 0, hide: 500 },
    },
    {
      name: 'onClick',
      delay: { show: 0, hide: 300 },
    },
  ];

  const itemClick = (e) => {
    if (e.itemData.price) {
      setCurrentProduct(e.itemData);
    }
  };

  const showSubmenuModeChanged = (e) => {
    setShowFirstSubmenuModes(e.value);
  };

  const orientationChanged = (e) => {
    setOrientation(e.value);
  };

  const hideSubmenuOnMouseLeaveChanged = (e) => {
    setHideSubmenuOnMouseLeave(e.value);
  };

  return (
    <div className="form">
      <div>
        <div className="label">Catalog:</div>
        <Menu
          dataSource={products}
          displayExpr="name"
          showFirstSubmenuMode={showFirstSubmenuModes}
          orientation={orientation}
          hideSubmenuOnMouseLeave={hideSubmenuOnMouseLeave}
          onItemClick={itemClick}
        />
        {currentProduct && (
          <div id="product-details">
            <img src={currentProduct.icon} />
            <div className="name">{currentProduct.name}</div>
            <div className="price">{`$${currentProduct.price}`}</div>
          </div>
        )}
      </div>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <div>Show First Submenu Mode</div>
          <SelectBox
            items={showSubmenuModes}
            displayExpr="name"
            inputAttr={showSubmenuModeLabel}
            value={showFirstSubmenuModes}
            onValueChanged={showSubmenuModeChanged}
          />
        </div>
        <div className="option">
          <div>Orientation</div>
          <SelectBox
            items={orientations}
            inputAttr={orientationLabel}
            value={orientation}
            onValueChanged={orientationChanged}
          />
        </div>
        <div className="option">
          <CheckBox
            text="Hide Submenu on Mouse Leave"
            value={hideSubmenuOnMouseLeave}
            onValueChanged={hideSubmenuOnMouseLeaveChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default App;