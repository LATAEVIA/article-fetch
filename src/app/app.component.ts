import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'app/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent implements OnInit {
  // title = 'Article Fetch';
  constructor(private articleService:ArticleService) {

  }
  articles = [];
  ngOnInit(){
    this.articleService.getArticles().subscribe(responseArticles => this.articles = responseArticles);
  }
  // title = this.articles[1];
}
