import React from 'react';

import List from 'devextreme-react/list.js';
import { navigation } from './data.js';

const listAttributes = {
  class: 'panel-list dx-theme-accent-as-background-color'
};

class NavigationList extends React.PureComponent {
  render() {
    return (
      <div className="list">
        <List
          dataSource={navigation}
          elementAttr={listAttributes}
          height={200} />
      </div>
    );
  }
}

export default NavigationList;
