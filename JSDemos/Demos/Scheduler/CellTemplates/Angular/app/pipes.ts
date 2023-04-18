import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from './app.service';

@Pipe({ name: 'isDinner' })
export class DinnerPipe implements PipeTransform {
  dinnerTime;

  constructor(private service: DataService) {
    this.dinnerTime = this.service.getDinnerTime();
  }

  transform(date: Date): boolean {
    const hours = date.getHours();

    return hours >= this.dinnerTime.from && hours < this.dinnerTime.to;
  }
}

@Pipe({ name: 'isDisableDate' })
export class DisableDatePipe implements PipeTransform {
  holidays;

  constructor(private service: DataService) {
    this.holidays = this.service.getHolidays();
  }

  isHoliday(date: Date) {
    const localeDate = date.toLocaleDateString();
    return this.holidays.filter((holiday) => holiday.toLocaleDateString() === localeDate).length > 0;
  }

  isWeekend(date: Date) {
    const day = date.getDay();
    return day === 0 || day === 6;
  }

  transform(date: Date): boolean {
    return this.isHoliday(date) || this.isWeekend(date);
  }
}

@Pipe({ name: 'hasCoffeeCupIcon' })
export class CoffeePipe implements PipeTransform {
  dinnerTime;

  constructor(private service: DataService) {
    this.dinnerTime = this.service.getDinnerTime();
  }

  transform(date: Date): boolean {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return hours === this.dinnerTime.from && minutes === 0;
  }
}

@Pipe({ name: 'isWeekend' })
export class WeekendPipe implements PipeTransform {
  transform(date: Date): boolean {
    const day = date.getDay();
    return day === 0 || day === 6;
  }
}
