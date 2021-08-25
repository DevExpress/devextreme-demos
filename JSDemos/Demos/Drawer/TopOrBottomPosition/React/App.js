import React from 'react';

import Drawer from 'devextreme-react/drawer';
import RadioGroup from 'devextreme-react/radio-group';
import Toolbar from 'devextreme-react/toolbar';
import HTMLReactParser from 'html-react-parser';

import { text } from './data.js';
import NavigationList from './NavigationList.js';

class App extends React.Component {
  constructor() {
    super();
    this.drawerRef = React.createRef();

    this.state = {
      openedStateMode: 'shrink',
      revealMode: 'expand',
      position: 'top'
    };

    this.toolbarItems = [{
      widget: 'dxButton',
      location: 'before',
      options: {
        icon: 'menu',
        onClick: () => this.drawer.toggle()
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
    const { openedStateMode, position, revealMode } = this.state;
    const openedStateRadioButtons = ['push', 'shrink', 'overlap'];
    const positionRadioButtons = ['top', 'bottom'];
    const revealModeRadioButtons = ['slide', 'expand'];
    return (
      <React.Fragment>
        <Toolbar items={this.toolbarItems} />
        <Drawer
          ref={this.drawerRef}
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
              items={openedStateRadioButtons}
              layout="horizontal"
              value={openedStateMode}
              onValueChanged={this.onOpenedStateModeChanged}
            />
          </div>
          {' '}
          <div className="option">
            <label>Position</label>
            <RadioGroup
              items={positionRadioButtons}
              layout="horizontal"
              value={position}
              onValueChanged={this.onPositionChanged}
            />
          </div>
          {' '}
          {openedStateMode !== 'push' && (<div className="option">
            <label>Reveal mode</label>
            <RadioGroup
              items={revealModeRadioButtons}
              layout="horizontal"
              value={revealMode}
              onValueChanged={this.onRevealModeChanged}
            />
          </div>)}
        </div>
      </React.Fragment>
    );
  }

  get drawer() {
    return this.drawerRef.current.instance;
  }
}

export default App;
