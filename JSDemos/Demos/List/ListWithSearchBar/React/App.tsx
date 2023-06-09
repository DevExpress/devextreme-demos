import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import List from 'devextreme-react/list';
import { products, searchModeLabel } from './data.js';

function ItemTemplate(data) {
  return <div>{data.Name}</div>;
}
const searchModes = ['contains', 'startsWith', 'equals'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor() {
    super();
    this.state = {
      searchMode: 'contains',
    };
    this.onSearchModeChange = this.onSearchModeChange.bind(this);
  }

  onSearchModeChange(args) {
    this.setState({
      searchMode: args.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="list-container">
          // @ts-expect-error TS(2786): 'List' cannot be used as a JSX component.
          <List
            dataSource={products}
            height={400}
            itemRender={ItemTemplate}
            searchExpr="Name"
            searchEnabled={true}
            searchMode={this.state.searchMode} />
        </div>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Search mode </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              items={searchModes}
              inputAttr={searchModeLabel}
              value={this.state.searchMode}
              onValueChanged={this.onSearchModeChange} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
