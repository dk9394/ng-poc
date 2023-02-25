import { Component, OnInit } from '@angular/core';
import { ITopic } from '../core/models/topics.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public topics: ITopic[] = [];

  constructor() {}

  public ngOnInit(): void {
    this.topics = [
      {
        name: 'AG Grid',
        link: 'ag-grid',
        description:
          'AG Grid is a fully-featured and highly customizable JavaScript data grid. It integrates smoothly with all major JavaScript frameworks like Angular, React, Vue etc.',
        active: true,
      },
    ];
  }
}
