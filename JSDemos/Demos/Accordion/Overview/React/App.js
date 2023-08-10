import React, { useState } from 'react';
import Accordion from 'devextreme-react/accordion';
import CheckBox from 'devextreme-react/check-box';
import TagBox from 'devextreme-react/tag-box';
import Slider, { Tooltip, Label } from 'devextreme-react/slider';

import service from './data.js';
import CustomTitle from './CustomTitle.js';
import CustomItem from './CustomItem.js';

const companyLabel = { 'aria-label': 'Company' };

const App = () => {
  const companies = service.getCompanies();
  const [selectedItems, setSelectedItems] = useState([companies[0]]);
  const [multiple, setMultiple] = useState(false);
  const [collapsible, setCollapsible] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(300);

  const selectionChanged = (e) => {
    let newItems = [...selectedItems];
    e.removedItems.forEach((item) => {
      const index = newItems.indexOf(item);
      if (index >= 0) {
        newItems.splice(index, 1);
      }
    });
    if (e.addedItems.length) {
      newItems = [...newItems, ...e.addedItems];
    }
    setSelectedItems(newItems);
  };

  const selectedItemsChanged = (e) => {
    setSelectedItems(e.value);
  };

  const multipleChanged = (e) => {
    setMultiple(e.value);
  };

  const collapsibleChanged = (e) => {
    setCollapsible(e.value);
  };

  const animationDurationChanged = (e) => {
    setAnimationDuration(e.value);
  };

  return (
    <div id="accordion">
      <Accordion
        dataSource={companies}
        collapsible={collapsible}
        multiple={multiple}
        animationDuration={animationDuration}
        selectedItems={selectedItems}
        onSelectionChanged={selectionChanged}
        itemTitleRender={CustomTitle}
        itemRender={CustomItem}
        id="accordion-container"
      />
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <CheckBox
            text="Multiple enabled"
            value={multiple}
            onValueChanged={multipleChanged}
          />
        </div>
        <div className="option">
          <CheckBox
            text="Collapsible enabled"
            value={collapsible}
            onValueChanged={collapsibleChanged}
          />
        </div>
        <div className="option">
          <span>Animation duration</span>
          <Slider
            min={0}
            max={1000}
            value={animationDuration}
            onValueChanged={animationDurationChanged}
          >
            <Tooltip enabled={true} position="bottom" />
            <Label visible={true} />
          </Slider>
        </div>
        <div className="option">
          <span className="caption">Selected Items</span>
          <TagBox
            dataSource={companies}
            displayExpr="CompanyName"
            value={selectedItems}
            inputAttr={companyLabel}
            onValueChanged={selectedItemsChanged}
            disabled={!multiple}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
