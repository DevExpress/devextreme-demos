import React from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import SpeedDialAction from 'devextreme-react/speed-dial-action';
import { data, priorities } from './data.js';

const views = ['week', 'month'];
const cellDuration = 30;

const App = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date(2021, 2, 25));
  const schedulerRef = React.useRef(null);

  const onOptionChanged = React.useCallback((e) => {
    if (e.name === 'currentDate') {
      setCurrentDate(e.value);
    }
  }, []);

  const showAppointmentPopup = React.useCallback(() => {
    schedulerRef.current.instance.showAppointmentPopup();
  }, []);

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
        <Resource
          dataSource={priorities}
          fieldExpr="priorityId"
          label="Priority"
        />
      </Scheduler>
      <SpeedDialAction
        icon="plus"
        onClick={showAppointmentPopup}
      />
    </React.Fragment>
  );
};

export default App;
