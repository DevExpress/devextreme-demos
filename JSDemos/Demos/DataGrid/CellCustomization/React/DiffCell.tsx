import React from 'react';
import 'devextreme/localization/globalize/currency';
import { formatNumber } from 'devextreme/localization';

function gridCellData(gridData: { data: { [x: string]: any; }; column: { caption: string; }; }) {
  return gridData.data[gridData.column.caption.toLowerCase()];
}

export default function DiffCell(cellData: { data: { [x: string]: any; }; column: { caption: string; }; }) {
  return (
    <div className={gridCellData(cellData).diff > 0 ? 'inc' : 'dec'}>
      <div className="current-value">{formatNumber(gridCellData(cellData).value, { type: 'currency', currency: 'USD', precision: 2 })}</div>
      <div className="diff">{Math.abs(gridCellData(cellData).diff).toFixed(2)}</div>
    </div>
  );
}
