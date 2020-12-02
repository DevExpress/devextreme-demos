import React from 'react';

function gridCellData(gridData) {
  return gridData.data[gridData.column.caption.toLowerCase()];
}

export default function DiffCell(cellData) {
  return (
    <div className={gridCellData(cellData).diff > 0 ? 'inc' : 'dec'}>
      <div className="current-value">{`$${gridCellData(cellData).value}`}</div>
      <div className="diff">{Math.abs(gridCellData(cellData).diff).toFixed(2)}</div>
    </div>
  );
}
