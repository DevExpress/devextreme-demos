import React, { useCallback } from 'react';
import DataGrid, {
  Column,
  Lookup,
  Editing,
  HeaderFilter,
  FilterPanel,
  FilterRow,
  Pager,
  Paging,
} from 'devextreme-react/data-grid';
import { employees, states } from './data.js';

const allowedPageSizes = [5, 10];

const App = () => {
  const handleEditing = useCallback(() => {
    // handle editing callback
  }, []);

  const handleHeaderFilter = useCallback(() => {
    // handle header filter callback
  }, []);

  const handleFilterPanel = useCallback(() => {
    // handle filter panel callback
  }, []);

  const handleFilterRow = useCallback(() => {
    // handle filter row callback
  }, []);

  const handlePager = useCallback(() => {
    // handle pager callback
  }, []);

  const handlePaging = useCallback(() => {
    // handle paging callback
  }, []);

  return (
    <DataGrid
      dataSource={employees}
      keyExpr="ID"
      focusedRowEnabled={true}
      showBorders={true}
    >
      <Editing
        allowUpdating={true}
        allowDeleting={true}
        selectTextOnEditStart={true}
        useIcons={true}
        {...(handleEditing ? { onEditingStart: handleEditing } : {})}
      />
      <HeaderFilter visible={true} onInitialized={handleHeaderFilter} />
      <FilterPanel visible={true} onInitialized={handleFilterPanel} />
      <FilterRow visible={true} onInitialized={handleFilterRow} />
      <Pager
        allowedPageSizes={allowedPageSizes}
        showPageSizeSelector={true}
        showNavigationButtons={true}
        onInitialized={handlePager}
      />
      <Paging defaultPageSize={10} onInitialized={handlePaging} />
      <Column dataField="FirstName" />
      <Column dataField="LastName" />
      <Column dataField="Position" />
      <Column
        dataField="StateID"
        caption="State"
        dataType="number"
      >
        <Lookup
          dataSource={states}
          valueExpr="ID"
          displayExpr="Name"
        />
      </Column>
    </DataGrid>
  );
};

export default App;