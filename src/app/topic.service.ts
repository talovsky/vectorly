import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Topic } from '../topic';
import { TOPICS } from '../data';

@Injectable({
  providedIn: 'root' })

  export class TopicService {
  constructor() { }

  getTopics(): Observable<Topic[]> {
    const topics = of(TOPICS);
    return topics }

  calcPages(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage: number, endPage: number;

    if (currentPage < 3) {
      startPage = 1;
      endPage = 3;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 1;
    }
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    return {
      currentPage: currentPage,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex}}};
