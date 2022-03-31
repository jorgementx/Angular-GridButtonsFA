import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent} from './icons/icons-grid'
import {EventThumbnailComponent} from './icons/icon-tile'


@NgModule({
  declarations: [
    AppComponent,
    EventThumbnailComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
