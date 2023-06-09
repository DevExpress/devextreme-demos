import React from 'react';

export function AppointmentMenuTemplate(itemData: { color: any; text: any; }) {
  return (<div>
    {itemData.color ? <div className="item-badge" style={{ backgroundColor: itemData.color }} /> : ''}
    {itemData.text}
  </div>);
}
