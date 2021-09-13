import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicItemComponent } from './topic-item/topic-item.component';
import { TopicPaginationComponent } from './topic-pagination/topic-pagination.component';
import { TopicSortComponent } from './topic-sort/topic-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    TopicItemComponent,
    TopicPaginationComponent,
    TopicSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
