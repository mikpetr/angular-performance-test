import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RegistryService } from '../registry.service';

function randomMilliseconds () {
  return Math.floor(Math.random() * 500);
}

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

  constructor(private registryService: RegistryService, private ref: ChangeDetectorRef) { }

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
    this.ref.markForCheck();

    if (!alreadySearching) {
      // Simulate an AJAX request:

      this.status.isSearching = true;

      setTimeout(() => {
        this.status.isSearching = false;
        this.status.searchResults.options = Math.floor(Math.random() * 5);
        this.ref.markForCheck();
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
