import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { AgGridSampleComponent } from './ag-grid-sample.component';

@NgModule({
  declarations: [AgGridSampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AgGridSampleComponent, pathMatch: 'full' },
    ]),
    AgGridModule,
    HttpClientModule,
  ],
})
export class AgGridSampleModule {}
