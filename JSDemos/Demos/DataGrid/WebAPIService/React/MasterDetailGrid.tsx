import React from 'react';
import DataGrid from 'devextreme-react/data-grid';

import { createStore } from 'devextreme-aspnet-data-nojquery';

const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';

class MasterDetailGrid extends React.Component {
  dataSource: any;

  constructor(props) {
    super(props);
    this.dataSource = getMasterDetailGridDataSource(props.data.key);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        dataSource={this.dataSource}
        showBorders={true}
      />
    );
  }
}

function getMasterDetailGridDataSource(id) {
  return {
    store: createStore({
      loadUrl: `${url}/OrderDetails`,
      loadParams: { orderID: id },
      onBeforeSend: (method, ajaxOptions) => {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    }),
  };
}

export default MasterDetailGrid;
