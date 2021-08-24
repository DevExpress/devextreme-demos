import React from 'react';

import List from 'devextreme-react/list.js';
import { navigation } from './data.js';

const listAttributes = {
  class: 'panel-list dx-theme-accent-as-background-color'
};

class NavigationList extends React.PureComponent {
  render() {
    return (
      <div className="list" style={{ width: '200px' }}>
        <List
          dataSource={navigation}
          hoverStateEnabled={false}
          activeStateEnabled={false}
          focusStateEnabled={false}
          elementAttr={listAttributes} />
      </div>
    );
  }
}

export default NavigationList;
