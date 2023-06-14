import React, { useState } from 'react';
import Scheduler, { Editing, Resource } from 'devextreme-react/scheduler';
import Query from 'devextreme/data/query';

import Appointment from './Appointment.js';
import AppointmentTooltip from './AppointmentTooltip.js';
import { data, moviesData, theatreData } from './data.js';

const currentDate = new Date(2021, 3, 27);
const views = ['day', 'week', 'timelineDay'];
const groups = ['theatreId'];

function App() {
  const [movieInfo, setMovieInfo] = useState({});

  const onAppointmentFormOpening = (e) => {
    const { form } = e;
    let { startDate } = e.appointmentData;

    setMovieInfo(getMovieById(e.appointmentData.movieId) || {});

    form.option('items', [{
      label: {
        text: 'Movie',
      },
      editorType: 'dxSelectBox',
      dataField: 'movieId',
      editorOptions: {
        items: moviesData,
        displayExpr: 'text',
        valueExpr: 'id',
        onValueChanged(args) {
          setMovieInfo(getMovieById(args.value));

          form.updateData('director', movieInfo.director);
          form.updateData('endDate', new Date(startDate.getTime() + 60 * 1000 * movieInfo.duration));
        },
      },
    }, {
      label: {
        text: 'Director',
      },
      name: 'director',
      editorType: 'dxTextBox',
      editorOptions: {
        value: movieInfo.director,
        readOnly: true,
      },
    }, {
      dataField: 'startDate',
      editorType: 'dxDateBox',
      editorOptions: {
        width: '100%',
        type: 'datetime',
        onValueChanged(args) {
          startDate = args.value;
          form.updateData('endDate', new Date(startDate.getTime() + 60 * 1000 * movieInfo.duration));
        },
      },
    }, {
      name: 'endDate',
      dataField: 'endDate',
      editorType: 'dxDateBox',
      editorOptions: {
        width: '100%',
        type: 'datetime',
        readOnly: true,
      },
    }, {
      dataField: 'price',
      editorType: 'dxRadioGroup',
      editorOptions: {
        dataSource: [5, 10, 15, 20],
        itemTemplate(itemData) {
          return `$${itemData}`;
        },
      },
    },
    ]);
  };

  return (
    <Scheduler
      timeZone="America/Los_Angeles"
      dataSource={data}
      views={views}
      defaultCurrentView="day"
      defaultCurrentDate={currentDate}
      groups={groups}
      height={600}
      firstDayOfWeek={0}
      startDayHour={9}
      endDayHour={23}
      showAllDayPanel={false}
      crossScrollingEnabled={true}
      cellDuration={20}
      appointmentComponent={Appointment}
      appointmentTooltipComponent={AppointmentTooltip}
      onAppointmentFormOpening={onAppointmentFormOpening}
    >
      <Editing allowAdding={false} />
      <Resource
        dataSource={moviesData}
        fieldExpr="movieId"
        useColorAsDefault={true}
      />
      <Resource
        dataSource={theatreData}
        fieldExpr="theatreId"
      />
    </Scheduler>
  );
}

function getMovieById(id) {
  return Query(moviesData).filter(['id', id]).toArray()[0];
}

export default App;
