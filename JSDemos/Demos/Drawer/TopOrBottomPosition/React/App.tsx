import React from 'react';

import Drawer from 'devextreme-react/drawer';
import RadioGroup from 'devextreme-react/radio-group';
import Toolbar from 'devextreme-react/toolbar';
import HTMLReactParser from 'html-react-parser';

import { text } from './data.js';
import NavigationList from './NavigationList.js';

class App extends React.Component {
  openedStateRadioButtons: any;

  positionRadioButtons: any;

  revealModeRadioButtons: any;

  setState: any;

  state: any;

  toolbarItems: any;

  constructor() {
    super();
    this.openedStateRadioButtons = ['push', 'shrink', 'overlap'];
    this.positionRadioButtons = ['top', 'bottom'];
    this.revealModeRadioButtons = ['slide', 'expand'];

    this.state = {
      opened: false,
      openedStateMode: 'shrink',
      revealMode: 'expand',
      position: 'top',
    };

    this.toolbarItems = [{
      widget: 'dxButton',
      location: 'before',
      options: {
        icon: 'menu',
        onClick: () => this.setState({ opened: !this.state.opened }),
      },
    }];

    this.onOpenedStateModeChanged = this.onOpenedStateModeChanged.bind(this);
    this.onRevealModeChanged = this.onRevealModeChanged.bind(this);
    this.onPositionChanged = this.onPositionChanged.bind(this);
    this.onOutsideClick = this.onOutsideClick.bind(this);
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

  onOutsideClick() {
    this.setState({ opened: false });
  }

  render() {
    const {
      opened, openedStateMode, position, revealMode,
    } = this.state;
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Toolbar' cannot be used as a JSX component.
        <Toolbar items={this.toolbarItems} />
        // @ts-expect-error TS(2786): 'Drawer' cannot be used as a JSX component.
        <Drawer
          opened={opened}
          // @ts-expect-error TS(2322): Type '() => void' is not assignable to type 'boole... Remove this comment to see the full error message
          closeOnOutsideClick={this.onOutsideClick}
          openedStateMode={openedStateMode}
          position={position}
          component={NavigationList}
          revealMode={revealMode}
          height={400}
          maxSize={200}>
          <div id="content" className="dx-theme-background-color">
            {HTMLReactParser(text)}
          </div>
        </Drawer>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <label>Opened state mode</label>
            // @ts-expect-error TS(2786): 'RadioGroup' cannot be used as a JSX component.
            <RadioGroup
              items={this.openedStateRadioButtons}
              layout="horizontal"
              value={openedStateMode}
              // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
              onValueChanged={this.onOpenedStateModeChanged}
            />
          </div>
          {' '}
          <div className="option">
            <label>Position</label>
            // @ts-expect-error TS(2786): 'RadioGroup' cannot be used as a JSX component.
            <RadioGroup
              items={this.positionRadioButtons}
              layout="horizontal"
              value={position}
              // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
              onValueChanged={this.onPositionChanged}
            />
          </div>
          {' '}
          {openedStateMode !== 'push' && (<div className="option">
            <label>Reveal mode</label>
            // @ts-expect-error TS(2786): 'RadioGroup' cannot be used as a JSX component.
            <RadioGroup
              items={this.revealModeRadioButtons}
              layout="horizontal"
              value={revealMode}
              // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
              onValueChanged={this.onRevealModeChanged}
            />
          </div>)}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
