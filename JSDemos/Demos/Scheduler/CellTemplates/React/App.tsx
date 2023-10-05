/* eslint-disable func-style */
import React from 'react';

import Scheduler, { SchedulerTypes } from 'devextreme-react/scheduler';
import notify from 'devextreme/ui/notify';

import { data, holidays } from './data.ts';
import Utils from './utils.ts';
import DataCell from './DataCell.tsx';
import DataCellMonth from './DataCellMonth.tsx';
import DateCell from './DateCell.tsx';
import TimeCell from './TimeCell.tsx';

const currentDate = new Date(2021, 3, 27);
const views: SchedulerTypes.Properties['currentView'][] = ['workWeek', 'month'];

const notifyDisableDate = () => {
  notify('Cannot create or move an appointment/event to disabled time/date regions.', 'warning', 1000);
};

const applyDisableDatesToDateEditors = (form: SchedulerTypes.AppointmentFormOpeningEvent['form']) => {
  const startDateEditor = form.getEditor('startDate');
  startDateEditor.option('disabledDates', holidays);

  const endDateEditor = form.getEditor('endDate');
  endDateEditor.option('disabledDates', holidays);
};

const onAppointmentFormOpening = (e: SchedulerTypes.AppointmentFormOpeningEvent) => {
  const startDate = new Date(e.appointmentData.startDate);
  if (!Utils.isValidAppointmentDate(startDate)) {
    e.cancel = true;
    notifyDisableDate();
  }
  applyDisableDatesToDateEditors(e.form);
};

const onAppointmentAdding = (e: SchedulerTypes.AppointmentAddingEvent) => {
  const isValidAppointment = Utils.isValidAppointment(e.component, e.appointmentData);
  if (!isValidAppointment) {
    e.cancel = true;
    notifyDisableDate();
  }
};

const onAppointmentUpdating = (e: SchedulerTypes.AppointmentUpdatingEvent) => {
  const isValidAppointment = Utils.isValidAppointment(e.component, e.newData);
  if (!isValidAppointment) {
    e.cancel = true;
    notifyDisableDate();
  }
};

const App = () => {
  const [currentView, setCurrentView] = React.useState<SchedulerTypes.Properties['currentView']>(views[0]);

  const DataCellComponent = React.useMemo(() => (
    currentView === 'month' ? DataCellMonth : DataCell
  ), [currentView]);

  const onCurrentViewChange = React.useCallback((value) => setCurrentView(value), []);

  const renderDateCell = React.useCallback((itemData) => (
    <DateCell itemData={itemData} currentView={currentView} />
  ), [currentView]);

  return (
    <Scheduler
      dataSource={data}
      views={views}
      defaultCurrentDate={currentDate}
      currentView={currentView}
      onCurrentViewChange={onCurrentViewChange}
      height={730}
      showAllDayPanel={false}
      firstDayOfWeek={0}
      startDayHour={9}
      endDayHour={19}
      dataCellComponent={DataCellComponent}
      dateCellRender={renderDateCell}
      timeCellComponent={TimeCell}
      onAppointmentFormOpening={onAppointmentFormOpening}
      onAppointmentAdding={onAppointmentAdding}
      onAppointmentUpdating={onAppointmentUpdating}
    />
  );
};

export default App;
