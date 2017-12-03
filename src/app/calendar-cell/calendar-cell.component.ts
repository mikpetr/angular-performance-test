import { Component, OnInit } from '@angular/core';
import { RegistryService } from '../registry.service';

function randomMilliseconds () {
  return Math.floor(Math.random() * 500);
}

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css'],
  inputs: ['day', 'hour']
})
export class CalendarCellComponent implements OnInit {
  public status: any;
  private registryService: RegistryService;

  constructor(registryService: RegistryService) {

    this.status = {
      isSearching: false,
      searchResults: {
        options: null
      }
    };

    registryService.addCell(this);
  }

  ngOnInit() {
  }

  cellClicked() {
    let alreadySearching = this.status.isSearching;
    this.status.searchResults.options = null;
    this.status.isSearching = !alreadySearching;

    if (!alreadySearching) {
      // Simulate an AJAX request:

      this.status.isSearching = true;

      setTimeout(() => {
        this.status.isSearching = false;
        this.status.searchResults.options = Math.floor(Math.random() * 5);
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
