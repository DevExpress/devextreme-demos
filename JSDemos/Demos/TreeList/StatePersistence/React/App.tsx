import React from 'react';
import {
  TreeList, Selection, FilterRow, StateStoring, Column,
} from 'devextreme-react/tree-list';
import { employees } from './data.js';

const expandedRowKeys = [1, 2, 10];

class App extends React.Component {
  treeList: any;

  constructor(props) {
    super(props);

    this.treeList = React.createRef();
    this.onStateResetClick = this.onStateResetClick.bind(this);
  }

  onStateResetClick() {
    this.treeList.current.instance.state(null);
  }

  render() {
    return (
      <div>
        <div id="descContainer">Sort and filter data, reorder and resize columns, select and expand rows. Once you are done, <a onClick={this.reloadPage}>refresh</a> the web page to see that the grid’s state is automatically persisted to continue working from where you stopped or you can <a onClick={this.onStateResetClick}>reset</a> the grid to its initial state.</div>
        // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
        <TreeList
          id="employees"
          ref={this.treeList}
          dataSource={employees}
          allowColumnReordering={true}
          allowColumnResizing={true}
          showBorders={true}
          defaultExpandedRowKeys={expandedRowKeys}
          keyExpr="ID"
          parentIdExpr="Head_ID"
        >
          // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
          <Selection recursive={true} mode="multiple" />
          // @ts-expect-error TS(2786): 'FilterRow' cannot be used as a JSX component.
          <FilterRow visible={true} />
          // @ts-expect-error TS(2786): 'StateStoring' cannot be used as a JSX component.
          <StateStoring enabled={true} type="localStorage" storageKey="treeListStorage" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Full_Name" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Title" caption="Position" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="City" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column width={160} dataField="Hire_Date" dataType="date" />
        </TreeList>
      </div>
    );
  }

  reloadPage() {
    window.location.reload();
  }
}

export default App;
