import { Component, Input, OnInit } from '@angular/core';
import { ITopic } from '../../models/topics.interface';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
})
export class TopicsComponent implements OnInit {
  @Input() public topics: ITopic[] = [];

  constructor() {}

  ngOnInit(): void {}
}
