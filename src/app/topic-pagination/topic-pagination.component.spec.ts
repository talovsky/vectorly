import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPaginationComponent } from './topic-pagination.component';

describe('TopicPaginationComponent', () => {
  let component: TopicPaginationComponent;
  let fixture: ComponentFixture<TopicPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
