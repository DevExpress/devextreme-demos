import React from 'react';

import List from 'devextreme-react/list.js';
import { navigation } from './data.js';

class NavigationList extends React.PureComponent {
  render() {
    return (
      <div className="list">
        <List
          dataSource={navigation}
          height={200}
          className="panel-list dx-theme-accent-as-background-color" />
      </div>
    );
  }
}

export default NavigationList;
