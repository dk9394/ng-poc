import { Component, Input } from '@angular/core';
import { ITopic } from 'src/app/core/models/topics.interface';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent {
  @Input() public topic: ITopic;
}
