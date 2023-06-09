import React from 'react';

import Tabs from 'devextreme-react/tabs';
import SelectBox from 'devextreme-react/select-box';

import { tabs, longtabs, tabLabel } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
    this.onValueChanged = this.onValueChanged.bind(this);
    this.onTabsSelectionChanged = this.onTabsSelectionChanged.bind(this);
  }

  render() {
    const { selectedIndex } = this.state;
    return (
      <React.Fragment>
        <div id="longtabs">
          <div className="caption">Tabs</div>
          // @ts-expect-error TS(2786): 'Tabs' cannot be used as a JSX component.
          <Tabs dataSource={longtabs} />
        </div>
        <div id="scrolledtabs">
          <div className="caption">Tabs with Overflow</div>
          // @ts-expect-error TS(2786): 'Tabs' cannot be used as a JSX component.
          <Tabs
            dataSource={longtabs}
            width={300}
            scrollByContent={true}
            showNavButtons={true}
          />
        </div>
        <div id="tabs">
          <div className="caption">API</div>
          // @ts-expect-error TS(2786): 'Tabs' cannot be used as a JSX component.
          <Tabs
            dataSource={tabs}
            selectedIndex={selectedIndex}
            onOptionChanged={this.onTabsSelectionChanged}
          />
          <div className="content dx-fieldset">
            <div className="dx-field">
              <div className="dx-field-label">Selected index:</div>
              <div className="dx-field-value">
                // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
                <SelectBox
                  dataSource={tabs}
                  displayExpr="text"
                  inputAttr={tabLabel}
                  valueExpr="id"
                  value={selectedIndex}
                  onValueChanged={this.onValueChanged}
                />
              </div>
            </div>
            <div className="dx-field">
              <div className="dx-field-label">Selected content:</div>
              <div className="dx-field-value-static left-aligned">
                {tabs[selectedIndex].content}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  onTabsSelectionChanged(args) {
    if (args.name === 'selectedIndex') {
      this.setState({
        selectedIndex: args.value,
      });
    }
  }

  onValueChanged(args) {
    this.setState({
      selectedIndex: args.value,
    });
  }
}

export default App;
