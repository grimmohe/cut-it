import { Component, OnInit } from '@angular/core';
import { Part, Stock } from '../app.model';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  stock: Stock[];
  parts: Part[];

  constructor(storage: StorageService) {
    this.parts = storage.parts;
    this.stock = storage.stock;
  }

  ngOnInit() {
  }

  addPartItem() {
    this.parts.push({description: '', height: 0, width: 0, followGrain: false, count: 1, stock: null});
  }

  copyPartItem(item: Part) {
    this.parts.splice(this.parts.indexOf(item) + 1, 0, Object.assign({}, item));
  }

  deletePartItem(item: Part) {
    this.parts.splice(this.parts.indexOf(item), 1);
  }

}