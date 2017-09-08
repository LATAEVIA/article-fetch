import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'app/article.service';
import { SlicePipe } from '@angular/common';
// import { Listing } from 'app/listing.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  // title = 'Article Fetch';
  constructor(private articleService:ArticleService, private router: Router) {}

  limit = 10;
  articles = [];
  singleArticles: any[]=null;
  // albums: Album[] = [
  //  ...
  // ];
  // moreArticles = [];
  ngOnInit(){
    this.articleService.getArticles().subscribe(responseArticles => this.articles = responseArticles);
    // this.articleService.getMoreArticles().subscribe(responseArticles => this.articles = responseArticles);
  }
  getSingleAtricle(id: string) {
    this.articleService.getAtricleById(id).subscribe(response => {
        this.singleArticles = response.json();
        console.log(this.singleArticles);
        this.router.navigate(['article', id]);
    });

  }
}
