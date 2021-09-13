import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-topic-pagination',
  templateUrl: './topic-pagination.component.html',
  styleUrls: ['./topic-pagination.component.scss']
})
export class TopicPaginationComponent implements OnInit {
  @Input() total: number = 0;
  @Input() page: number = 1;
  @Input() pageSize: number = 10
  @Output() goTo: EventEmitter<number> = new EventEmitter<number>();

  totalPages() {
    return Math.ceil(this.total / this.pageSize);
  }
  pagesRange() {
    return this.range(1, this.totalPages() + 1);
  }

  prevPage() {
    return Math.max(1, this.page - 1);
  }

  nextPage() {
    return Math.min(this.totalPages(), this.page + 1);
  }

  pageClicked(page: number) {
    this.goTo.next(page);
  }

  range(start: number, stop: number, step = 1){
    if (!stop) { start = 0; stop = start; }
    return Array.from(new Array(Number((stop - start) / step)), (x, i) => start + i * step)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
