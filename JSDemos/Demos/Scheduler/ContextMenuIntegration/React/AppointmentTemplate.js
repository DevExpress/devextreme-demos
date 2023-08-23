import React from 'react';

const AppointmentMenuTemplate = ({ data: itemData}) => (
  <div>
    {itemData.color ? <div className="item-badge" style={{ backgroundColor: itemData.color }} /> : ''}
    {itemData.text}
  </div>
);

export default AppointmentMenuTemplate;
