import React from 'react';

import DataGrid, { Scrolling, Sorting, LoadPanel } from 'devextreme-react/data-grid';
import { generateData } from './data.js';

const dataSource = generateData(100000);

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        height={440}
        dataSource={dataSource}
        keyExpr="id"
        showBorders={true}
        customizeColumns={customizeColumns}
      >
        // @ts-expect-error TS(2786): 'Sorting' cannot be used as a JSX component.
        <Sorting mode="none" />
        // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
        <Scrolling mode="infinite" />
        // @ts-expect-error TS(2786): 'LoadPanel' cannot be used as a JSX component.
        <LoadPanel enabled={false} />
      </DataGrid>
    );
  }
}

function customizeColumns(columns) {
  columns[0].width = 70;
}

export default App;
