import React, { useState } from 'react';
import Scheduler, { AppointmentDragging } from 'devextreme-react/scheduler';
import Draggable from 'devextreme-react/draggable';
import ScrollView from 'devextreme-react/scroll-view';
import { appointments, tasks } from './data.js';

const currentDate = new Date(2021, 3, 26);
const views = [{ type: 'day', intervalCount: 3 }];
const draggingGroupName = 'appointmentsGroup';

const App = () => {
  const [state, setState] = useState({ tasks, appointments });

  const onAppointmentRemove = (e) => {
    const index = state.appointments.indexOf(e.itemData);

    if (index >= 0) {
      state.appointments.splice(index, 1);
      state.tasks.push(e.itemData);

      setState({
        tasks: [...state.tasks],
        appointments: [...state.appointments],
      });
    }
  };

  const onAppointmentAdd = (e) => {
    const index = state.tasks.indexOf(e.fromData);

    if (index >= 0) {
      state.tasks.splice(index, 1);
      state.appointments.push(e.itemData);

      setState({
        tasks: [...state.tasks],
        appointments: [...state.appointments],
      });
    }
  };

  const onListDragStart = (e) => {
    e.cancel = true;
  };

  const onItemDragStart = (e) => {
    e.itemData = e.fromData;
  };

  const onItemDragEnd = (e) => {
    if (e.toData) {
      e.cancel = true;
    }
  };

  return (
    <React.Fragment>
      <ScrollView id="scroll">
        <Draggable
          id="list"
          data="dropArea"
          group={draggingGroupName}
          onDragStart={onListDragStart}>
          {state.tasks.map((task) => (
            <Draggable
              key={task.text}
              className="item dx-card dx-theme-text-color dx-theme-background-color"
              clone={true}
              group={draggingGroupName}
              data={task}
              onDragStart={onItemDragStart}
              onDragEnd={onItemDragEnd}>
              {task.text}
            </Draggable>
          ))}
        </Draggable>
      </ScrollView>
      <Scheduler
        timeZone="America/Los_Angeles"
        id="scheduler"
        dataSource={state.appointments}
        views={views}
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9}
        editing={true}>
        <AppointmentDragging
          group={draggingGroupName}
          onRemove={onAppointmentRemove}
          onAdd={onAppointmentAdd}
        />
      </Scheduler>
    </React.Fragment>
  );
};

export default App;
