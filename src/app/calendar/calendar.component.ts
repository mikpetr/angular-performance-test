import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegistryService } from '../registry.service';
import { CalendarCellComponent } from '../calendar-cell/calendar-cell.component';

import _ from 'lodash';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {

  private hours: any;
  private days: any;
  public isLoaded: Boolean;

  constructor(private registryService: RegistryService) { }

  ngOnInit() {
    this.hours = _.range(24);
    this.days = _.range(1, 32).map((day) => ("Oct " + day));
    this.isLoaded = false;
  }

  load() {
    this.isLoaded = true;
  }

  searchAll() {
    this.registryService.searchAllCells();
  }

  dayHeaderClicked() {
    alert('dayHeaderClicked()');
  }

  daysHeaderTrackFn(index) {
    return 'day-head' + index;
  }

  daysTrackFn(index) {
    return 'day' + index;
  }

  hoursTrackFn(index) {
    return 'hour' + index;
  }

}
