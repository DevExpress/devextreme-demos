import React, { useState } from 'react';
import Scheduler, { Editing } from 'devextreme-react/scheduler';
import SelectBox from 'devextreme-react/select-box';

import timeZoneUtils from 'devextreme/time_zone_utils';
import { data, locations, timeZoneLabel } from './data.js';

const currentDate = new Date(2021, 3, 27);
const views = ['workWeek'];

function getLocations(date) {
  const timeZones = timeZoneUtils.getTimeZones(date);
  return timeZones.filter((timeZone) => locations.indexOf(timeZone.id) !== -1);
}

const demoLocations = getLocations(currentDate);

const App = () => {
  const [timeZone, setTimeZone] = useState(demoLocations[0].id);
  const [demoLocationsState, setDemoLocationsState] = useState(demoLocations);

  const onValueChanged = (e) => {
    setTimeZone(e.value);
  };

  const onAppointmentFormOpening = (e) => {
    const { form } = e;

    const startDateTimezoneEditor = form.getEditor('startDateTimeZone');
    const endDateTimezoneEditor = form.getEditor('endDateTimeZone');
    const startDateDataSource = startDateTimezoneEditor.option('dataSource');
    const endDateDataSource = endDateTimezoneEditor.option('dataSource');

    startDateDataSource.filter(['id', 'contains', 'Europe']);
    endDateDataSource.filter(['id', 'contains', 'Europe']);

    startDateDataSource.load();
    endDateDataSource.load();
  };

  const onOptionChanged = (e) => {
    if (e.name === 'currentDate') {
      setDemoLocationsState(getLocations(e.value));
    }
  };

  return (
    <React.Fragment>
      <div className="option">
        <span>Office Time Zone</span>
        <SelectBox
          items={demoLocationsState}
          displayExpr="title"
          valueExpr="id"
          inputAttr={timeZoneLabel}
          width={240}
          value={timeZone}
          onValueChanged={onValueChanged}
        />
      </div>
      <Scheduler
        dataSource={data}
        views={views}
        defaultCurrentView="workWeek"
        startDayHour={8}
        defaultCurrentDate={currentDate}
        timeZone={timeZone}
        height={600}
        onAppointmentFormOpening={onAppointmentFormOpening}
        onOptionChanged={onOptionChanged}
      >
        <Editing
          allowTimeZoneEditing={true}
        />
      </Scheduler>
    </React.Fragment>
  );
};

export default App;
