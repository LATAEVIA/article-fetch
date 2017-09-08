import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SingleArticleComponent } from './single-article/single-article.component'

import {ArticleService} from './article.service';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SingleArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
