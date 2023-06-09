import React from 'react';

import TreeView from 'devextreme-react/tree-view';
import SelectBox from 'devextreme-react/select-box';

import { products, searchModeLabel } from './data.js';

const options = ['contains', 'startswith', 'equals'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      value: 'contains',
    };
    this.valueChanged = this.valueChanged.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'TreeView' cannot be used as a JSX component.
        <TreeView
          id="treeview"
          items={products}
          width={500}
          searchMode={this.state.value}
          searchEnabled={true}
        />
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Search mode</span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              items={options}
              inputAttr={searchModeLabel}
              value={this.state.value}
              onValueChanged={this.valueChanged}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  valueChanged(e) {
    this.setState({ value: e.value });
  }
}

export default App;
