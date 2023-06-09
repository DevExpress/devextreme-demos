import React from 'react';

import DataGrid, {
  Column,
  Sorting,
  Paging,
} from 'devextreme-react/data-grid';
import service from './data.js';
import DiffCell from './DiffCell.js';
import ChartCell from './ChartCell.js';

class App extends React.Component {
  dataSource: any;

  constructor(props) {
    super(props);
    this.dataSource = service.getWeekData();
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid id="gridContainer"
        dataSource={this.dataSource}
        keyExpr="date"
        showRowLines={true}
        showColumnLines={false}
        showBorders={true}>
        // @ts-expect-error TS(2786): 'Sorting' cannot be used as a JSX component.
        <Sorting mode="none" />
        // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
        <Paging defaultPageSize={10} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="date" width={110} dataType="date" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column caption="Open" cellRender={DiffCell} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column caption="Close" cellRender={DiffCell} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column caption="Dynamics" minWidth={320} cellRender={ChartCell} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column caption="High" cellRender={DiffCell} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column caption="Low" cellRender={DiffCell} />
      </DataGrid>
    );
  }
}

export default App;
