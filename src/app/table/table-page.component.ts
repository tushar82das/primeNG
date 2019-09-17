import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {

  cars: any[];

  cols: any[];

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.cars = [
      { vin: '001', year: '1990', brand: 'bmw', color: 'red' },
      { vin: '002', year: '1991', brand: 'audi', color: 'green' },
      { vin: '003', year: '1992', brand: 'bmw', color: 'red' },
      { vin: '004', year: '1993', brand: 'audi', color: 'green' },
      { vin: '005', year: '1994', brand: 'audi', color: 'red' },
      { vin: '006', year: '1995', brand: 'bmw', color: 'red' },
      { vin: '007', year: '1996', brand: 'bmw', color: 'green' },
      { vin: '008', year: '1997', brand: 'audi', color: 'red' },
      { vin: '009', year: '1998', brand: 'bmw', color: 'green' },
      { vin: '010', year: '1999', brand: 'audi', color: 'red' }
    ]

  }

}
