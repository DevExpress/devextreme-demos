import React from 'react';

type AppointmentMenuTemplateProps = {
  data: {
    color: string;
    text: string;
  }
};

const AppointmentMenuTemplate: React.FunctionComponent<AppointmentMenuTemplateProps> = ({ data }) => (
  <div>
    {data.color && <div className="item-badge" style={{ backgroundColor: data.color }} />}
    {data.text}
  </div>
);

export default AppointmentMenuTemplate;
