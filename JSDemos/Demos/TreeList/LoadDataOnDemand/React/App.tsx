import React from 'react';
import {
  TreeList, RemoteOperations, Column, IColumnProps,
} from 'devextreme-react/tree-list';
import 'whatwg-fetch';

const dataSource = {
  async load(loadOptions: { parentIds: any; }) {
    const parentIdsParam = loadOptions.parentIds;
    const url = new URL('https://js.devexpress.com/Demos/Mvc/api/treeListData');
    if (parentIdsParam) {
      parentIdsParam.forEach((id: string) => {
        url.searchParams.append('parentIds', id);
      });
    }

    const result = await fetch(url);

    if (result.status === 200) {
      return result.json();
    }

    throw new Error('Data Loading Error');
  },
};

const customizeText: IColumnProps['customizeText'] = (e) => {
  if (e.value !== null) {
    return `${Math.ceil(e.value / 1024)} KB`;
  }
  return null;
};
const App = () => (
  <TreeList
    id="treelist"
    dataSource={dataSource as any}
    showBorders={true}
    keyExpr="id"
    parentIdExpr="parentId"
    hasItemsExpr="hasItems"
    rootValue=""
  >
    <RemoteOperations filtering={true} />
    <Column dataField="name" />
    <Column width={100} customizeText={customizeText} dataField="size" />
    <Column width={150} dataField="createdDate" dataType="date" />
    <Column width={150} dataField="modifiedDate" dataType="date" />
  </TreeList>
);

export default App;
