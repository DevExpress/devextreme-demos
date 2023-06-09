import React from 'react';

import DataGrid, { Scrolling, Paging } from 'devextreme-react/data-grid';
import { generateData } from './data.js';

const dataSource = generateData(50, 500);

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        height={440}
        dataSource={dataSource}
        keyExpr="field1"
        showBorders={true}
        columnWidth={100}
      >
        // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
        <Scrolling columnRenderingMode="virtual" />
        // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
        <Paging enabled={false} />
      </DataGrid>
    );
  }
}

export default App;
