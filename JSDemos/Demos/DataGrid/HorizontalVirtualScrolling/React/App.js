import React from 'react';

import DataGrid, { Scrolling, Paging } from 'devextreme-react/data-grid';
import { generateData } from './data.js';

const dataSource = generateData(50, 500);

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
        keyExpr="field1"
        showBorders={true}
        columnWidth={100}
      >
        <Scrolling columnRenderingMode="virtual" />
        <Paging enabled={false} />
      </DataGrid>
    );
  }
}

export default App;
