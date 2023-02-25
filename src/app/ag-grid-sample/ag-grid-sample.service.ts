import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgGridSampleService {
  constructor(private httpClient: HttpClient) {}

  public getGridData(): Observable<any> {
    return this.httpClient.get('./data.json');
  }
}
