import React from 'react';
import TreeList, {
  Pager,
  Paging,
  Editing,
  HeaderFilter,
  FilterPanel,
  FilterRow,
  Scrolling,
  Column,
} from 'devextreme-react/tree-list';
import { employees } from './data.js';

const allowedPageSizes = [5, 10];
const expandedRowKeys = [1, 2, 3, 5];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
      <TreeList
        dataSource={employees}
        keyExpr="ID"
        parentIdExpr="Head_ID"
        showBorders={true}
        focusedRowEnabled={true}
        defaultExpandedRowKeys={expandedRowKeys}
      >
        // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
        <Editing
          // @ts-expect-error TS(2322): Type '{ allowUpdating: boolean; allowDeleting: boo... Remove this comment to see the full error message
          allowUpdating={true}
          allowDeleting={true}
          selectTextOnEditStart={true}
          useIcons={true}
        />
        // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
        <HeaderFilter
          // @ts-expect-error TS(2322): Type '{ visible: boolean; }' is not assignable to ... Remove this comment to see the full error message
          visible={true}
        />
        // @ts-expect-error TS(2786): 'FilterPanel' cannot be used as a JSX component.
        <FilterPanel
          // @ts-expect-error TS(2322): Type '{ visible: boolean; }' is not assignable to ... Remove this comment to see the full error message
          visible={true}
        />
        // @ts-expect-error TS(2786): 'FilterRow' cannot be used as a JSX component.
        <FilterRow
          // @ts-expect-error TS(2322): Type '{ visible: boolean; }' is not assignable to ... Remove this comment to see the full error message
          visible={true}
        />
        // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
        <Scrolling
          // @ts-expect-error TS(2322): Type '{ mode: string; }' is not assignable to type... Remove this comment to see the full error message
          mode="standard"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Full_Name" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; }' is ... Remove this comment to see the full error message
          dataField="Title"
          caption="Position"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="City" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField= "State" />
        // @ts-expect-error TS(2786): 'Pager' cannot be used as a JSX component.
        <Pager
          // @ts-expect-error TS(2322): Type '{ allowedPageSizes: number[]; showPageSizeSe... Remove this comment to see the full error message
          allowedPageSizes={allowedPageSizes}
          showPageSizeSelector={true}
          showNavigationButtons={true}
        />
        // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
        <Paging
          // @ts-expect-error TS(2322): Type '{ enabled: boolean; defaultPageSize: number;... Remove this comment to see the full error message
          enabled={true}
          defaultPageSize={10}
        />
      </TreeList>
    );
  }
}

export default App;
