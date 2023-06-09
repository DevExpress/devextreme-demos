import React from 'react';

import DataGrid, {
  Column,
  Grouping,
  Export,
  Selection,
  Paging,
} from 'devextreme-react/data-grid';
import { jsPDF } from 'jspdf';
import { exportDataGrid } from 'devextreme/pdf_exporter';

import { customers } from './data.js';

const exportFormats = ['pdf'];

export default function App() {
  const onExporting = React.useCallback((e) => {
    // eslint-disable-next-line new-cap
    const doc = new jsPDF();

    exportDataGrid({
      jsPDFDocument: doc,
      component: e.component,
      indent: 5,
    }).then(() => {
      doc.save('Companies.pdf');
    });
  });

  return (
    // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
    <DataGrid
      dataSource={customers}
      keyExpr="ID"
      allowColumnReordering={true}
      showBorders={true}
      onExporting={onExporting}
    >
      // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
      <Selection mode="multiple" />
      // @ts-expect-error TS(2786): 'Grouping' cannot be used as a JSX component.
      <Grouping autoExpandAll={true} />
      // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
      <Paging defaultPageSize={10} />
      // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
      <Export enabled={true} formats={exportFormats} allowExportSelectedData={true} />

      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="CompanyName" dataType="string" />
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="Phone" dataType="string" />
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="Fax" dataType="string" />
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="City" dataType="string" />
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="State" dataType="string" groupIndex={0} />
    </DataGrid>
  );
}
