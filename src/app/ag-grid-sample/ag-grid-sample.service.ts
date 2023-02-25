import { Injectable } from '@angular/core';
import { IAgGridSampleData } from './ag-grid-sample-data.interface';

import * as data from './data';

@Injectable({
  providedIn: 'root',
})
export class AgGridSampleService {
  public getGridData(): IAgGridSampleData {
    return data.GRID_DATA;
  }
}
