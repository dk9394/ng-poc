import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { AgGridSampleService } from './ag-grid-sample.service';

// import { customers } from './../../assets/data/ag-grid/data.json';

@Component({
  selector: 'app-ag-grid-sample',
  templateUrl: './ag-grid-sample.component.html',
  styleUrls: ['./ag-grid-sample.component.scss'],
})
export class AgGridSampleComponent implements OnInit {
  public rowData: any[] = [];
  public columnDefs: ColDef[] = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' },
  ];
  public defaultColDef: ColDef = {
    sortable: true,
  };

  constructor(private agGridSampleService: AgGridSampleService) {}

  ngOnInit(): void {
    this.agGridSampleService.getGridData().subscribe((data) => {
      console.log(data);
    });
    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxster', price: 72000 },
    ];
  }
}
