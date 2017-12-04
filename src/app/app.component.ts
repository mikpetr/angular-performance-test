import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent { }
