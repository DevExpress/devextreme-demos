import React from 'react';

import Drawer from 'devextreme-react/drawer';
import RadioGroup from 'devextreme-react/radio-group';
import Toolbar from 'devextreme-react/toolbar';
import HTMLReactParser from 'html-react-parser';

import { text } from './data.js';
import NavigationList from './NavigationList.js';

const openedStateModes = ['push', 'shrink', 'overlap'];
const positions = ['top', 'bottom'];
const revealModes = ['slide', 'expand'];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      opened: false,
      openedStateMode: 'shrink',
      revealMode: 'expand',
      position: 'top'
    };

    this.toolbarItems = [{
      widget: 'dxButton',
      location: 'before',
      options: {
        icon: 'menu',
        onClick: () => this.setState({ opened: !this.state.opened })
      }
    }];

    this.onOpenedStateModeChanged = this.onOpenedStateModeChanged.bind(this);
    this.onRevealModeChanged = this.onRevealModeChanged.bind(this);
    this.onPositionChanged = this.onPositionChanged.bind(this);
  }

  onOpenedStateModeChanged({ value }) {
    this.setState({ openedStateMode: value });
  }

  onRevealModeChanged({ value }) {
    this.setState({ revealMode: value });
  }

  onPositionChanged({ value }) {
    this.setState({ position: value });
  }

  render() {
    const { opened, openedStateMode, position, revealMode } = this.state;

    return (
      <React.Fragment>
        <Toolbar items={this.toolbarItems} />
        <Drawer
          opened={opened}
          openedStateMode={openedStateMode}
          position={position}
          component={NavigationList}
          revealMode={revealMode}
          height={400}
          maxSize={200}
          closeOnOutsideClick={true}>
          <div id="content" className="dx-theme-background-color">
            {HTMLReactParser(text)}
          </div>
        </Drawer>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <label>Opened state mode</label>
            <RadioGroup
              items={openedStateModes}
              layout="horizontal"
              value={openedStateMode}
              onValueChanged={this.onOpenedStateModeChanged}
            />
          </div>
          {' '}
          <div className="option">
            <label>Position</label>
            <RadioGroup
              items={positions}
              layout="horizontal"
              value={position}
              onValueChanged={this.onPositionChanged}
            />
          </div>
          {' '}
          {openedStateMode !== 'push' && (<div className="option">
            <label>Reveal mode</label>
            <RadioGroup
              items={revealModes}
              layout="horizontal"
              value={revealMode}
              onValueChanged={this.onRevealModeChanged}
            />
          </div>)}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
