import {
  Injectable,
} from '@angular/core';
import { DxCalendarTypes } from 'devextreme-angular/ui/calendar';

@Injectable()
export class Service {
  getZoomLevel(): DxCalendarTypes.CalendarZoomLevel {
    const zoomLevel: DxCalendarTypes.CalendarZoomLevel = 'month';
    return zoomLevel;
  }
}
