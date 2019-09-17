import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sales: any[];
  rowGroupMetadata: any;
  cols: any[];
  cars1: any;

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'brand', header: 'Brand' },
      { field: 'lastYearSale', header: 'Last YearSale' },
      { field: 'thisYearSale', header: 'This Year Sale' },
      { field: 'lastYearProfit', header: 'Last Year Profit' },
      { field: 'thisYearProfit', header: 'This Year Profit' }
    ];
    this.cars1 = [
      { brand: 'Apple', lastYearSale: '51', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
      { brand: 'Samsung', lastYearSale: '83', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
      { brand: 'Microsoft', lastYearSale: '38', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
      { brand: 'Philips', lastYearSale: '49', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
      { brand: 'Song', lastYearSale: '17', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
      { brand: 'LG', lastYearSale: '52', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
      { brand: 'Sharp', lastYearSale: '82', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
      { brand: 'Panasonic', lastYearSale: '44', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
      { brand: 'HTC', lastYearSale: '90', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
      { brand: 'Toshiba', lastYearSale: '75', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
    ];
  }

  onSort() {
    console.log('Sort Working');
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.sales) {
      for (let i = 0; i < this.sales.length; i++) {
        let rowData = this.sales[i];
        let brand = rowData.brand;
        if (i == 0) {
          this.rowGroupMetadata[brand] = { index: 0, size: 1 };
        }
        else {
          let previousRowData = this.sales[i - 1];
          let previousRowGroup = previousRowData.brand;
          if (brand === previousRowGroup)
            this.rowGroupMetadata[brand].size++;
          else
            this.rowGroupMetadata[brand] = { index: i, size: 1 };
        }
      }
    }
  }
}
