import React, { useState, useRef } from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import ContextMenu from 'devextreme-react/context-menu';

import { data, resourcesData } from './data.js';

import { AppointmentMenuTemplate } from './AppointmentTemplate.js';

const views = ['day', 'month'];

const appointmentClassName = '.dx-scheduler-appointment';
const cellClassName = '.dx-scheduler-date-table-cell';

const App = () => {
  const scheduler = useRef(null);
  const [currentDate, setCurrentDate] = useState(new Date(2020, 10, 25));
  const [contextMenuItems, setContextMenuItems] = useState([]);
  const [target, setTarget] = useState(appointmentClassName);
  const [disabled, setDisabled] = useState(true);
  const [groups, setGroups] = useState(null);
  const [crossScrollingEnabled, setCrossScrollingEnabled] = useState(false);

  const onAppointmentContextMenu = ({ appointmentData, targetedAppointmentData }) => {
    const schedulerInstance = scheduler.current.instance;
    const resourceItems = resourcesData.map((item) => ({
      ...item,
      onItemClick: ({ itemData }) => schedulerInstance.updateAppointment(appointmentData, {
        ...appointmentData,
        ...{ roomId: [itemData.id] },
      }),
    }));
    setTarget(appointmentClassName);
    setDisabled(false);
    setContextMenuItems([
      {
        text: 'Open',
        onItemClick: () => schedulerInstance.showAppointmentPopup(appointmentData),
      },
      {
        text: 'Delete',
        onItemClick: () => schedulerInstance.deleteAppointment(appointmentData),
      },
      {
        text: 'Repeat Weekly',
        beginGroup: true,
        onItemClick: () => schedulerInstance.updateAppointment(appointmentData, {
          startDate: targetedAppointmentData.startDate,
          recurrenceRule: 'FREQ=WEEKLY',
        }),
      },
      { text: 'Set Room', beginGroup: true, disabled: true },
      ...resourceItems,
    ]);
  };

  const onContextMenuItemClick = (e) => {
    e.itemData.onItemClick(e);
  };

  const onCellContextMenu = ({ cellData }) => {
    const schedulerInstance = scheduler.current.instance;
    setTarget(cellClassName);
    setDisabled(false);
    setContextMenuItems([
      {
        text: 'New Appointment',
        onItemClick: () => schedulerInstance.showAppointmentPopup(
          { startDate: cellData.startDate },
          true,
        ),
      },
      {
        text: 'New Recurring Appointment',
        onItemClick: () => schedulerInstance.showAppointmentPopup(
          {
            startDate: cellData.startDate,
            recurrenceRule: 'FREQ=DAILY',
          },
          true,
        ),
      },
      {
        text: 'Group by Room/Ungroup',
        beginGroup: true,
        onItemClick: () => {
          if (groups) {
            setCrossScrollingEnabled(false);
            setGroups(null);
          } else {
            setCrossScrollingEnabled(true);
            setGroups(['roomId']);
          }
        },
      },
      {
        text: 'Go to Today',
        onItemClick: () => {
          setCurrentDate(new Date());
        },
      },
    ]);
  };

  return (
    <>
      <Scheduler
        ref={scheduler}
        timeZone="America/Los_Angeles"
        dataSource={data}
        views={views}
        groups={groups}
        crossScrollingEnabled={crossScrollingEnabled}
        defaultCurrentView="month"
        currentDate={currentDate}
        startDayHour={9}
        recurrenceEditMode="series"
        onAppointmentContextMenu={onAppointmentContextMenu}
        onCellContextMenu={onCellContextMenu}
        height={600}
      >
        <Resource
          dataSource={resourcesData}
          fieldExpr="roomId"
          label="Room"
        />
      </Scheduler>
      <ContextMenu
        dataSource={contextMenuItems}
        width={200}
        target={target}
        disabled={disabled}
        onItemClick={onContextMenuItemClick}
        itemRender={AppointmentMenuTemplate}
      />
    </>
  );
};

export default App;