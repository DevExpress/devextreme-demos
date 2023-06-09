import React from 'react';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import service from './data.js';

const tasks = service.getTasks();

class DetailTemplate extends React.Component {
  dataSource: any;

  props: any;

  constructor(props) {
    super(props);
    this.dataSource = getTasks(props.data.key);
  }

  render() {
    const { FirstName, LastName } = this.props.data.data;
    return (
      <React.Fragment>
        <div className="master-detail-caption">
          {`${FirstName} ${LastName}'s Tasks:`}
        </div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          dataSource={this.dataSource}
          showBorders={true}
          columnAutoWidth={true}
        >
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Subject" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="StartDate" dataType="date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="DueDate" dataType="date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Priority" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ caption: string; dataType: string; calcula... Remove this comment to see the full error message
            caption="Completed"
            dataType="boolean"
            calculateCellValue={this.completedValue}
          />
        </DataGrid>
      </React.Fragment>
    );
  }

  completedValue(rowData) {
    return rowData.Status === 'Completed';
  }
}

function getTasks(key) {
  return new DataSource({
    store: new ArrayStore({
      data: tasks,
      key: 'ID',
    }),
    filter: ['EmployeeID', '=', key],
  });
}

export default DetailTemplate;
