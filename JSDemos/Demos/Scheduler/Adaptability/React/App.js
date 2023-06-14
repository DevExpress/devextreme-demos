import React, { useState, useRef } from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import SpeedDialAction from 'devextreme-react/speed-dial-action';
import { data, priorities } from './data.js';

const views = ['week', 'month'];

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2021, 2, 25));
  const [cellDuration, setCellDuration] = useState(30);

  const schedulerRef = useRef();

  const onOptionChanged = (e) => {
    if (e.name === 'currentDate') {
      setCurrentDate(e.value);
    }
  };

  const showAppointmentPopup = () => {
    schedulerRef.current.instance.showAppointmentPopup();
  };

  return (
    <React.Fragment>
      <Scheduler
        ref={schedulerRef}
        timeZone="America/Los_Angeles"
        dataSource={data}
        views={views}
        adaptivityEnabled={true}
        onOptionChanged={onOptionChanged}
        defaultCurrentView="month"
        currentDate={currentDate}
        cellDuration={cellDuration}
        height={590}
        startDayHour={9}
      >
        <Resource dataSource={priorities} fieldExpr="priorityId" label="Priority" />
      </Scheduler>
      <SpeedDialAction icon="plus" onClick={showAppointmentPopup} />
    </React.Fragment>
  );
};

export default App;
