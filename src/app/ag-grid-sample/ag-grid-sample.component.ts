import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import {
  IAgGridProduct,
  IAgGridSampleData,
} from './ag-grid-sample-data.interface';
import { AgGridSampleService } from './ag-grid-sample.service';

@Component({
  selector: 'app-ag-grid-sample',
  templateUrl: './ag-grid-sample.component.html',
  styleUrls: ['./ag-grid-sample.component.scss'],
})
export class AgGridSampleComponent implements OnInit {
  private sampleData: IAgGridSampleData;

  public rowData: IAgGridProduct[] = [];

  public columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'price' },
    { field: 'details' },
    { field: 'color' },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  constructor(private agGridSampleService: AgGridSampleService) {}

  ngOnInit(): void {
    this.sampleData = this.agGridSampleService.getGridData();
    this.rowData = this.sampleData.products;
  }
}
