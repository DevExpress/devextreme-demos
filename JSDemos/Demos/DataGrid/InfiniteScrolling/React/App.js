﻿import React from 'react';

import DataGrid, { Scrolling, Sorting, LoadPanel } from 'devextreme-react/data-grid';
import { generateData } from './data.js';

const dataSource = generateData(100000);

class App extends React.Component {
  render() {
    return (
      <DataGrid
        height={440}
        dataSource={dataSource}
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
