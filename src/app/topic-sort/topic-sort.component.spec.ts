import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSortComponent } from './topic-sort.component';

describe('TopicSortComponent', () => {
  let component: TopicSortComponent;
  let fixture: ComponentFixture<TopicSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
