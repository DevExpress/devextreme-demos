import React from 'react';
import 'devextreme/localization/globalize/currency';
import { formatNumber } from 'devextreme/localization';

const getGridCellData = (gridData: { data: { [x: string]: any; }; column: { caption: string; }; }) => gridData.data[gridData.column.caption.toLowerCase()];

const DiffCell = (cellData: { data: { [x: string]: any; }; column: { caption: string; }; }) => {
  const gridCellData = getGridCellData(cellData);

  return (
    <div className={gridCellData.diff > 0 ? 'inc' : 'dec'}>
      <div className="current-value">{formatNumber(gridCellData.value, { type: 'currency', currency: 'USD', precision: 2 })}</div>
      <div className="diff">{Math.abs(gridCellData.diff).toFixed(2)}</div>
    </div>
  );
};

export default DiffCell;
