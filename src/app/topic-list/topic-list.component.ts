import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { Topic } from 'src/topic';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  constructor(private topicService: TopicService) { }
  topics: Topic[] = [];

  getTopics(): void {
    this.topicService.getTopics()
        .subscribe(topics => this.topics = topics)
  }
  ngOnInit(): void {
    this.getTopics()
  }

}
