import { Injectable } from '@angular/core';

@Injectable()
export class RegistryService {

  cells: any;

  constructor() {
    this.cells = [];
  }

  addCell(cell) {
    this.cells.push(cell);
  }

  searchAllCells() {
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].cellClicked();
    }
  }

}
