import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { Topic } from '../topic';
import { TOPICS } from '../data';
import { TopicList } from './topic-list/topic-list.component';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  constructor() { }
  realTopics: Topic[] = TOPICS;
  list(page: number = 1, limit: number = 10): Observable<TopicList<Topic>> {
    let topicPage = this.realTopics.slice((page - 1) * limit, page * limit);
    return of({total: this.realTopics.length, items: topicPage});
  }


  getTopics(): Observable<Topic[]> {
    const topics = of(TOPICS);
    return topics;
  }

}
