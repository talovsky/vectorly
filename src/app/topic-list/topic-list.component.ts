import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { Topic } from 'src/topic';
import { TOPICS } from 'src/data';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface TopicList<T> {
  items: T[]
  total: number
}

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
  total$!: Observable<number>;
  items$!: Observable<Topic[]>;
  page: number = 1;
  private pageStream = new Subject<number>();


  constructor(private topicService: TopicService) { }
  topics: Topic[] = [];

  getTopics(): void {
    this.topicService.getTopics()
        .subscribe(topics => this.topics = topics)
  }
  ngOnInit(): void {
    this.getTopics()
    const pageSource = this.pageStream.pipe(map(pageNumber => {
      this.page = pageNumber;
      return { page: pageNumber }
    }))


  }
  goToPage(page: number) {
    this.pageStream.next(page)
  }


}
