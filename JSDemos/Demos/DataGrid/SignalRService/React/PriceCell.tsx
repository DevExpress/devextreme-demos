import React from 'react';

export default function DiscountCell(cell: { data: { change: number; }; text: any; }) {
  return (
    <div className={cell.data.change > 0 ? 'inc' : 'dec' }>
      <span>{cell.text}</span>
    </div>
  );
}
