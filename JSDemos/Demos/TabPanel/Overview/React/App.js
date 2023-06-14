import React, { useState } from 'react';
import CheckBox from 'devextreme-react/check-box';
import TabPanel from 'devextreme-react/tab-panel';
import { multiViewItems as companies } from './data.js';
import CompanyItem from './CompanyItem.js';

const App = () => {
  const [animationEnabled, setAnimationEnabled] = useState(true);
  const [swipeEnabled, setSwipeEnabled] = useState(true);
  const [loop, setLoop] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const itemTitleRender = (company) => <span>{company.CompanyName}</span>;

  const onSelectionChanged = (args) => {
    if (args.name === 'selectedIndex') {
      setSelectedIndex(args.value);
    }
  };

  const onLoopChanged = (args) => {
    setLoop(args.value);
  };

  const onAnimationEnabledChanged = (args) => {
    setAnimationEnabled(args.value);
  };

  const onSwipeEnabledChanged = (args) => {
    setSwipeEnabled(args.value);
  };

  return (
    <div>
      <TabPanel
        height={260}
        dataSource={companies}
        selectedIndex={selectedIndex}
        onOptionChanged={onSelectionChanged}
        loop={loop}
        itemTitleRender={itemTitleRender}
        itemComponent={CompanyItem}
        animationEnabled={animationEnabled}
        swipeEnabled={swipeEnabled}
      />
      <div className="item-box">
        Item <span>{selectedIndex + 1}</span> of <span>{companies.length}</span>
      </div>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <CheckBox value={loop} onValueChanged={onLoopChanged} text="Loop enabled" />
        </div>
        <div className="option">
          <CheckBox
            value={animationEnabled}
            onValueChanged={onAnimationEnabledChanged}
            text="Animation enabled"
          />
        </div>
        <div className="option">
          <CheckBox value={swipeEnabled} onValueChanged={onSwipeEnabledChanged} text="Swipe enabled" />
        </div>
      </div>
    </div>
  );
};

export default App;
