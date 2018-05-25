import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';
import { RegistryService } from '../registry.service';
import { share } from 'rxjs/operators';
import { timer } from 'rxjs/observable/timer';

function randomMilliseconds () {
  return Math.floor(Math.random() * 500);
}
const performanceOptimizer = timer(0).pipe(
  share(),
);
@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarCellComponent implements OnInit {
  @Input() hour: number;
  @Input() day: number;

  public status: any;

  constructor(private registryService: RegistryService,
              private ref: ChangeDetectorRef, private zone: NgZone) { }

  ngOnInit() {
    this.status = {
      isSearching: false,
      searchResults: {
        options: null
      }
    };

    this.registryService.addCell(this);
  }

  cellClicked() {
    let alreadySearching = this.status.isSearching;
    this.status.searchResults.options = null;
    this.status.isSearching = !alreadySearching;
    this.zone.run(() => performanceOptimizer.subscribe(() => this.ref.detectChanges()));
    // mark for check will check all component tree in next iteration, detectChanges will do it
    // immediately only for this component and children
    // this.ref.markForCheck();

    if (!alreadySearching) {
      // Simulate an AJAX request:

      this.status.isSearching = true;

      setTimeout(() => {
        this.status.isSearching = false;
        this.status.searchResults.options = Math.floor(Math.random() * 5);
        this.ref.detectChanges();
      }, randomMilliseconds());
    }
  }

  showSpinner() {
    return this.status.isSearching;
  }

  hideSpinner() {
    return !this.status.isSearching;
  }

  showTime() {
    return !this.status.isSearching && this.status.searchResults.options === null;
  }

  showSearchResults() {
    return !this.status.isSearching && this.status.searchResults.options !== null;
  }

}
