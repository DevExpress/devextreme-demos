import React from 'react';

import PivotGrid, {
  FieldChooser,
  Export,
} from 'devextreme-react/pivot-grid';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
// Our demo infrastructure requires us to use 'file-saver-es'.
//  We recommend that you use the official 'file-saver' package in your applications.
import { exportPivotGrid } from 'devextreme/excel_exporter';

import { sales } from './data.js';

const dataSource = new PivotGridDataSource({
  fields: [{
    caption: 'Region',
    dataField: 'region',
    area: 'row',
    expanded: true,
  }, {
    caption: 'City',
    dataField: 'city',
    area: 'row',
    width: 150,
  }, {
    dataField: 'date',
    dataType: 'date',
    area: 'column',
    expanded: true,
  }, {
    caption: 'Sales',
    dataField: 'amount',
    dataType: 'number',
    area: 'data',
    summaryType: 'sum',
    format: 'currency',
  }],
  store: sales,
});

export default function App() {
  const onExporting = React.useCallback((e) => {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Sales');

    exportPivotGrid({
      component: e.component,
      worksheet,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Sales.xlsx');
      });
    });
    e.cancel = true;
  });

  return (
    <React.Fragment>
      // @ts-expect-error TS(2786): 'PivotGrid' cannot be used as a JSX component.
      <PivotGrid
        dataSource={dataSource}
        height={440}
        showBorders={true}
        rowHeaderLayout="tree"
        onExporting={onExporting}
      >
        // @ts-expect-error TS(2786): 'FieldChooser' cannot be used as a JSX component.
        <FieldChooser enabled={false} />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
      </PivotGrid>
    </React.Fragment>
  );
}
