import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Topic } from '../topic';
import { TOPICS } from '../data';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }
  
  getTopics(): Observable<Topic[]> {
    const topics = of(TOPICS);
    return topics;
  }

}
