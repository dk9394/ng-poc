import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TopicComponent } from './components/topics/topic/topic.component';
import { TopicsComponent } from './components/topics/topics.component';
import { CharLimitPipe } from './pipes/char-limit.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopicsComponent,
    TopicComponent,
    CharLimitPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, TopicsComponent, CharLimitPipe],
})
export class CoreModule {}
