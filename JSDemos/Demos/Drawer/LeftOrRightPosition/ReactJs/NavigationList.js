import React from 'react';
import List from 'devextreme-react/list';
import themes from 'devextreme/ui/themes';
import { navigation } from './data.js';

const listElementAttr = {
  class: `panel-list dx-theme-${themes.current().split('.')[0]}-typography`,
};

function NavigationList() {
  return (
    <div
      className="list"
      style={{ width: '200px' }}
    >
      <List
        dataSource={navigation}
        hoverStateEnabled={false}
        activeStateEnabled={false}
        focusStateEnabled={false}
        elementAttr={listElementAttr}
      />
    </div>
  );
}
export default NavigationList;
