import { TestBed } from '@angular/core/testing';

import { AgGridSampleService } from './ag-grid-sample.service';

describe('AgGridSampleService', () => {
  let service: AgGridSampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgGridSampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
