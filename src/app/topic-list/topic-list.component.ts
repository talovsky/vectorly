import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { Topic } from 'src/topic';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'

export interface TopicList<T> {
  items: T[]
  total: number }

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']})

export class TopicListComponent implements OnInit {
  constructor(private topicService: TopicService) { }
  topics: Topic[] = [];

  private pageStream = new Subject<number>()

  getTopics(): void {
    this.topicService.getTopics()
      .subscribe(topics => {
        this.topics = topics})};

  ngOnInit(): void {
    this.getTopics()}}
