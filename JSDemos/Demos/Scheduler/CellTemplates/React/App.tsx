/* eslint-disable func-style */
import React from 'react';

import Scheduler from 'devextreme-react/scheduler';
import notify from 'devextreme/ui/notify';

import { data, holidays } from './data.js';
import Utils from './utils.js';
import DataCell from './DataCell.js';
import DataCellMonth from './DataCellMonth.js';
import DateCell from './DateCell.js';
import TimeCell from './TimeCell.js';

const currentDate = new Date(2021, 3, 27);
const views = ['workWeek', 'month'];

const notifyDisableDate = () => {
  notify('Cannot create or move an appointment/event to disabled time/date regions.', 'warning', 1000);
};

const applyDisableDatesToDateEditors = (form: { getEditor: (arg0: string) => any; }) => {
  const startDateEditor = form.getEditor('startDate');
  startDateEditor.option('disabledDates', holidays);

  const endDateEditor = form.getEditor('endDate');
  endDateEditor.option('disabledDates', holidays);
};

const onAppointmentFormOpening = (e: { appointmentData: { startDate: VarDate; }; cancel: boolean; form: any; }) => {
  const startDate = new Date(e.appointmentData.startDate);
  if (!Utils.isValidAppointmentDate(startDate)) {
    e.cancel = true;
    notifyDisableDate();
  }
  applyDisableDatesToDateEditors(e.form);
};

const onAppointmentAdding = (e: { component: any; appointmentData: any; cancel: boolean; }) => {
  const isValidAppointment = Utils.isValidAppointment(e.component, e.appointmentData);
  if (!isValidAppointment) {
    e.cancel = true;
    notifyDisableDate();
  }
};

const onAppointmentUpdating = (e: { component: any; newData: any; cancel: boolean; }) => {
  const isValidAppointment = Utils.isValidAppointment(e.component, e.newData);
  if (!isValidAppointment) {
    e.cancel = true;
    notifyDisableDate();
  }
};

const App = () => {
  const [currentView, setCurrentView] = React.useState(views[0]);

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
