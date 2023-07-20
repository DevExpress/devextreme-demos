import React, { useState } from 'react';
import Drawer from 'devextreme-react/drawer';
import RadioGroup from 'devextreme-react/radio-group';
import Toolbar from 'devextreme-react/toolbar';
import HTMLReactParser from 'html-react-parser';
import { text } from './data.js';
import NavigationList from './NavigationList.js';

const App = () => {
  const [opened, setOpened] = useState(false);
  const [openedStateMode, setOpenedStateMode] = useState('shrink');
  const [revealMode, setRevealMode] = useState('expand');
  const [position, setPosition] = useState('top');

  const toolbarItems = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => setOpened(!opened),
    },
  }];

  const onOpenedStateModeChanged = ({ value }) => {
    setOpenedStateMode(value);
  };

  const onRevealModeChanged = ({ value }) => {
    setRevealMode(value);
  };

  const onPositionChanged = ({ value }) => {
    setPosition(value);
  };

  const onOutsideClick = () => {
    setOpened(false);
  };

  return (
    <>
      <Toolbar items={toolbarItems} />
      <Drawer
        opened={opened}
        closeOnOutsideClick={onOutsideClick}
        openedStateMode={openedStateMode}
        position={position}
        component={NavigationList}
        revealMode={revealMode}
        height={400}
        maxSize={200}
      >
        <div id="content" className="dx-theme-background-color">
          {HTMLReactParser(text)}
        </div>
      </Drawer>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <label>Opened state mode</label>
          <RadioGroup
            items={['push', 'shrink', 'overlap']}
            layout="horizontal"
            value={openedStateMode}
            onValueChanged={onOpenedStateModeChanged}
          />
        </div>
        <div className="option">
          <label>Position</label>
          <RadioGroup
            items={['top', 'bottom']}
            layout="horizontal"
            value={position}
            onValueChanged={onPositionChanged}
          />
        </div>
        {openedStateMode !== 'push' && (
          <div className="option">
            <label>Reveal mode</label>
            <RadioGroup
              items={['slide', 'expand']}
              layout="horizontal"
              value={revealMode}
              onValueChanged={onRevealModeChanged}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default App;