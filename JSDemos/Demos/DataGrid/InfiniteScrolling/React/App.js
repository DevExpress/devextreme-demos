import React from 'react';

import DataGrid, { Scrolling, Sorting, LoadPanel } from 'devextreme-react/data-grid';
import { generateData } from './data.js';

const dataSource = generateData(100000);

class App extends React.Component {
  render() {
    return (
      <DataGrid
<<<<<<< HEAD
        height={440}
=======
        elementAttr ={{
          id: 'gridContainer',
        }}
>>>>>>> d49217665d389c609302de8080af2870fad3d12b
        dataSource={dataSource}
        keyExpr="id"
        showBorders={true}
        customizeColumns={customizeColumns}
      >
        <Sorting mode="none" />
        <Scrolling mode="infinite" />
        <LoadPanel enabled={false} />
      </DataGrid>
    );
  }
}

function customizeColumns(columns) {
  columns[0].width = 70;
}

export default App;
