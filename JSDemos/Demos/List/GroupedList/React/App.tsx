import React from 'react';

import List from 'devextreme-react/list';

import { employees } from './data.js';

function GroupTemplate(item) {
  return <div>Assigned: {item.key}</div>;
}

class App extends React.Component {
  render() {
    return (
      <div className="list-container">
        // @ts-expect-error TS(2786): 'List' cannot be used as a JSX component.
        <List
          dataSource={employees}
          height="100%"
          grouped={true}
          collapsibleGroups={true}
          groupRender={GroupTemplate} />
      </div>
    );
  }
}

export default App;
