import React, { useState } from 'react';
import SelectBox from 'devextreme-react/select-box';
import List from 'devextreme-react/list';
import { products, searchModeLabel } from './data.js';

function ItemTemplate(data) {
  return <div>{data.Name}</div>;
}

const searchModes = ['contains', 'startsWith', 'equals'];

function App() {
  const [searchMode, setSearchMode] = useState('contains');

  const onSearchModeChange = (args) => {
    setSearchMode(args.value);
  };

  return (
    <React.Fragment>
      <div className="list-container">
        <List
          dataSource={products}
          height={400}
          itemRender={ItemTemplate}
          searchExpr="Name"
          searchEnabled={true}
          searchMode={searchMode}
        />
      </div>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Search mode </span>
          <SelectBox
            items={searchModes}
            inputAttr={searchModeLabel}
            value={searchMode}
            onValueChanged={onSearchModeChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;