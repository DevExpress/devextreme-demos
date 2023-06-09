import React from 'react';

import DataGrid, { Scrolling, Sorting, LoadPanel } from 'devextreme-react/data-grid';
import { generateData } from './data.js';

const dataSource = generateData(100000);

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      loadPanelEnabled: true,
    };
    this.onContentReady = this.onContentReady.bind(this);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        height={440}
        dataSource={dataSource}
        keyExpr="id"
        showBorders={true}
        customizeColumns={this.customizeColumns}
        onContentReady={this.onContentReady}
      >
        // @ts-expect-error TS(2786): 'Sorting' cannot be used as a JSX component.
        <Sorting mode="none" />
        // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
        <Scrolling mode="virtual" />
        // @ts-expect-error TS(2786): 'LoadPanel' cannot be used as a JSX component.
        <LoadPanel enabled={this.state.loadPanelEnabled} />
      </DataGrid>
    );
  }

  customizeColumns(columns) {
    columns[0].width = 70;
  }

  onContentReady() {
    this.setState({
      loadPanelEnabled: false,
    });
  }
}

export default App;
