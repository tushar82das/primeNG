import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent implements OnInit {

  constructor() { }
  cars: any[];

  cols: any[];
  brands: SelectItem[];
  colors: SelectItem[];
  yearFilter: number;
  yearTimeout: any;

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    this.brands = [
      { label: 'All Brands', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];
    this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
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

  onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'year', 'gt');
    }, 250);
  }

}
