import React, { useState, useRef } from 'react';
import {
  PivotGrid,
  FieldChooser,
} from 'devextreme-react/pivot-grid';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import { Popup } from 'devextreme-react/popup';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

import { sales } from './data.js';

const App = () => {
  const [popupTitle, setPopupTitle] = useState('');
  const [drillDownDataSource, setDrillDownDataSource] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const dataGridRef = useRef(null);

  const dataSource = new PivotGridDataSource({
    fields: [{
      caption: 'Region',
      width: 120,
      dataField: 'region',
      area: 'row',
    }, {
      caption: 'City',
      dataField: 'city',
      width: 150,
      area: 'row',
    }, {
      dataField: 'date',
      dataType: 'date',
      area: 'column',
    }, {
      caption: 'Total',
      dataField: 'amount',
      dataType: 'number',
      summaryType: 'sum',
      format: 'currency',
      area: 'data',
    }],
    store: sales,
  });

  const getDataGridInstance = (ref) => {
    dataGridRef.current = ref.instance;
  };

  const onCellClick = (e) => {
    if (e.area === 'data') {
      const pivotGridDataSource = e.component.getDataSource();
      const rowPathLength = e.cell.rowPath.length;
      const rowPathName = e.cell.rowPath[rowPathLength - 1];

      setPopupTitle(`${rowPathName || 'Total'} Drill Down Data`);
      setDrillDownDataSource(pivotGridDataSource.createDrillDownDataSource(e.cell));
      setPopupVisible(true);
    }
  };

  const onHiding = () => {
    setPopupVisible(false);
  };

  const onShown = () => {
    dataGridRef.current.updateDimensions();
  };

  return (
    <React.Fragment>
      <PivotGrid
        id="sales"
        allowSortingBySummary={true}
        allowSorting={true}
        allowFiltering={true}
        allowExpandAll={true}
        showBorders={true}
        dataSource={dataSource}
        onCellClick={onCellClick}
      >
        <FieldChooser enabled={false} />
      </PivotGrid>
      <Popup
        visible={popupVisible}
        width={600}
        height={400}
        title={popupTitle}
        onHiding={onHiding}
        onShown={onShown}
      >
        <DataGrid
          width={560}
          height={300}
          dataSource={drillDownDataSource}
          ref={getDataGridInstance}
        >
          <Column dataField="region" />
          <Column dataField="city" />
          <Column dataField="amount" dataType="number" format="currency" />
          <Column dataField="date" dataType="date" />
        </DataGrid>
      </Popup>
    </React.Fragment>
  );
};

export default App;
