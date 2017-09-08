import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'app/article.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent implements OnInit {
  // title = 'Article Fetch';
  constructor(private articleService:ArticleService) {}

  limit = 10;
  articles = [];
  singleArticles: any[]=null;
  // moreArticles = [];
  ngOnInit(){
    this.articleService.getArticles().subscribe(responseArticles => this.articles = responseArticles);
    // this.articleService.getMoreArticles().subscribe(responseArticles => this.articles = responseArticles);
  }
  getSingleAtricle(id: string) {
    this.articleService.getAtricleById(id).subscribe(response => {
        this.singleArticles = response.json();
    });
  }
}
