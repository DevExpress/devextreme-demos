import React, { useState } from 'react';
import CheckBox from 'devextreme-react/check-box';
import MultiView from 'devextreme-react/multi-view';
import { multiViewItems as companies } from './data.js';
import CompanyItem from './CompanyItem.js';

const App = () => {
  const [animationEnabled, setAnimationEnabled] = useState(true);
  const [loop, setLoop] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  return (
    <div id="multiview">
      <div>
        Item <span>
          {selectedIndex + 1}
        </span> of <span>
          {companies.length}
        </span>: <i>
          Swipe the view horizontally to switch to the next view.
        </i>
      </div>
      <MultiView
        height={300}
        dataSource={companies}
        selectedIndex={selectedIndex}
        onOptionChanged={onSelectionChanged}
        loop={loop}
        itemComponent={CompanyItem}
        animationEnabled={animationEnabled}
      />
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <CheckBox
            value={loop}
            onValueChanged={onLoopChanged}
            text="Loop enabled"
          />
        </div>
        <div className="option">
          <CheckBox
            value={animationEnabled}
            onValueChanged={onAnimationEnabledChanged}
            text="Animation enabled"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
