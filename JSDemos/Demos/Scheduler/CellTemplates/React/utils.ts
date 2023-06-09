import { dinnerTime, holidays } from './data.js';

export default class Utils {
  static isHoliday(date: { toLocaleDateString: () => any; }) {
    const localeDate = date.toLocaleDateString();
    return holidays.filter((holiday) => holiday.toLocaleDateString() === localeDate).length > 0;
  }

  static isWeekend(date: { getDay: () => any; }) {
    const day = date.getDay();
    return day === 0 || day === 6;
  }

  static isDisableDate(date: { toLocaleDateString?: () => any; getDay?: () => any; }) {
    return Utils.isHoliday(date) || Utils.isWeekend(date);
  }

  static isDinner(date: { getHours: () => any; }) {
    const hours = date.getHours();
    return hours >= dinnerTime.from && hours < dinnerTime.to;
  }

  static hasCoffeeCupIcon(date: { getHours: () => any; getMinutes: () => any; }) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return hours === dinnerTime.from && minutes === 0;
  }

  static isValidAppointment(component: { option: (arg0: string) => any; }, appointmentData: { startDate: VarDate; endDate: VarDate; }) {
    const startDate = new Date(appointmentData.startDate);
    const endDate = new Date(appointmentData.endDate);
    const cellDuration = component.option('cellDuration');
    return Utils.isValidAppointmentInterval(startDate, endDate, cellDuration);
  }

  static isValidAppointmentInterval(startDate: Date, endDate: number | Date, cellDuration: number) {
    const edgeEndDate = new Date(endDate.getTime() - 1);

    if (!Utils.isValidAppointmentDate(edgeEndDate)) {
      return false;
    }

    const durationInMs = cellDuration * 60 * 1000;
    const date = startDate;
    while (date <= endDate) {
      if (!Utils.isValidAppointmentDate(date)) {
        return false;
      }
      const newDateTime = date.getTime() + durationInMs - 1;
      date.setTime(newDateTime);
    }

    return true;
  }

  static isValidAppointmentDate(date: Date) {
    return !Utils.isHoliday(date) && !Utils.isDinner(date) && !Utils.isWeekend(date);
  }
}
