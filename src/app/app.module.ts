import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarCellComponent } from './calendar-cell/calendar-cell.component';
import { CalendarComponent } from './calendar/calendar.component';

import { RegistryService } from './registry.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarCellComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RegistryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
