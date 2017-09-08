import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {ArticleService} from './article.service';
import { SingleArticleComponent } from './single-article/single-article.component'

@NgModule({
  declarations: [
    AppComponent,
    SingleArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
