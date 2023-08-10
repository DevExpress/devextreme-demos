import React, { useState } from 'react';
import Drawer from 'devextreme-react/drawer';
import RadioGroup from 'devextreme-react/radio-group';
import Toolbar from 'devextreme-react/toolbar';
import HTMLReactParser from 'html-react-parser';
import { text } from './data.js';
import NavigationList from './NavigationList.js';

const openedStateModes = ['push', 'shrink', 'overlap'];
const positions = ['left', 'right'];
const revealModes = ['slide', 'expand'];

const App = () => {
  const [opened, setOpened] = useState(true);
  const [openedStateMode, setOpenedStateMode] = useState('shrink');
  const [revealMode, setRevealMode] = useState('slide');
  const [position, setPosition] = useState('left');

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
    <React.Fragment>
      <Toolbar items={toolbarItems} />
      <Drawer
        opened={opened}
        openedStateMode={openedStateMode}
        position={position}
        revealMode={revealMode}
        component={NavigationList}
        closeOnOutsideClick={onOutsideClick}
        height={400}
      >
        <div id="content" className="dx-theme-background-color">
          {HTMLReactParser(text)}
        </div>
      </Drawer>
      <div className="options">
        <div className="caption">Options</div>
        <div className="options-container">
          <div className="option">
            <label>Opened state mode</label>
            <RadioGroup
              items={openedStateModes}
              layout="horizontal"
              value={openedStateMode}
              onValueChanged={onOpenedStateModeChanged}
            />
          </div>
          <div className="option">
            <label>Position</label>
            <RadioGroup
              items={positions}
              layout="horizontal"
              value={position}
              onValueChanged={onPositionChanged}
            />
          </div>
          {openedStateMode !== 'push' && (
            <div className="option">
              <label>Reveal mode</label>
              <RadioGroup
                items={revealModes}
                layout="horizontal"
                value={revealMode}
                onValueChanged={onRevealModeChanged}
              />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
