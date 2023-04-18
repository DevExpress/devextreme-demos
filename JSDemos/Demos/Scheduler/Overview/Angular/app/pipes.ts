import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getWeekEndMark' })
export class MarkWeekEndPipe implements PipeTransform {
  transform(cellData: any): any {
    function isWeekEnd(date) {
      const day = date.getDay();
      return day === 0 || day === 6;
    }
    const classObject = {};
    classObject[`employee-${cellData.groups.employeeID}`] = true;
    classObject[`employee-weekend-${cellData.groups.employeeID}`] = isWeekEnd(
      cellData.startDate,
    );
    return classObject;
  }
}

@Pipe({ name: 'getTrainingMark' })
export class MarkTrainingPipe implements PipeTransform {
  transform(cellData: any): any {
    const classObject = {
      'day-cell': true,
    };
    classObject[
      MarkTrainingPipe.getCurrentTraining(
        cellData.startDate.getDate(),
        cellData.groups.employeeID,
      )
    ] = true;
    return classObject;
  }

  static getCurrentTraining(date, employeeID) {
    const result = (date + employeeID) % 3;
    const currentTraining = `training-background-${result}`;

    return currentTraining;
  }
}
