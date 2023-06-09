import React from 'react';
import { TreeList, RemoteOperations, Column } from 'devextreme-react/tree-list';
import 'whatwg-fetch';

const dataSource = {
  load(loadOptions) {
    const parentIdsParam = loadOptions.parentIds;
    const url = new URL('https://js.devexpress.com/Demos/Mvc/api/treeListData');
    if (parentIdsParam) {
      parentIdsParam.forEach((id) => {
        url.searchParams.append('parentIds', id);
      });
    }

    return fetch(url)
      .then((response) => response.json())
      .catch(() => { throw new Error('Data Loading Error'); });
  },
};

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
      <TreeList
        id="treelist"
        // @ts-expect-error TS(2322): Type '{ load(loadOptions: any): Promise<any>; }' i... Remove this comment to see the full error message
        dataSource={dataSource}
        showBorders={true}
        keyExpr="id"
        parentIdExpr="parentId"
        hasItemsExpr="hasItems"
        rootValue=""
      >
        // @ts-expect-error TS(2786): 'RemoteOperations' cannot be used as a JSX compone... Remove this comment to see the full error message
        <RemoteOperations filtering={true} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="name" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column width={100} customizeText={this.customizeText} dataField="size" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column width={150} dataField="createdDate" dataType="date" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column width={150} dataField="modifiedDate" dataType="date" />
      </TreeList>
    );
  }

  customizeText(e) {
    if (e.value !== null) {
      return `${Math.ceil(e.value / 1024)} KB`;
    }
    return null;
  }
}

export default App;
