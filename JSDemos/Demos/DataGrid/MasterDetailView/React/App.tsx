import React from 'react';

import DataGrid,
{
  Column,
  MasterDetail,
} from 'devextreme-react/data-grid';

import DetailTemplate from './DetailTemplate.js';

import service from './data.js';

const employees = service.getEmployees();

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid id="grid-container"
        dataSource={employees}
        keyExpr="ID"
        showBorders={true}
      >
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Prefix" width={70} caption="Title" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="FirstName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="LastName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Position" width={170} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="State" width={125} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="BirthDate" dataType="date" />
        // @ts-expect-error TS(2786): 'MasterDetail' cannot be used as a JSX component.
        <MasterDetail
          // @ts-expect-error TS(2322): Type '{ enabled: boolean; component: typeof Detail... Remove this comment to see the full error message
          enabled={true}
          component={DetailTemplate}
        />
      </DataGrid>
    );
  }
}

export default App;
