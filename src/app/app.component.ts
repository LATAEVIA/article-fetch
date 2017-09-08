import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'app/article.service';
import { SlicePipe } from '@angular/common';
import { Listing } from 'app/listing.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})

export class AppComponent implements OnInit {
  constructor(private articleService:ArticleService, private router: Router) {}

  limit = 10;
  articles = [];
  singleArticles: any[]=null;
  article: Listing[] = [new Listing("title", "author_info", "abstract", "published_at", "cover_large", 16)];

  ngOnInit(){
    this.articleService.getArticles().subscribe(responseArticles => this.articles = responseArticles);
  }

  // getSingleAtricle(id: string) {
  //   this.articleService.getAtricleById(id).subscribe(response => {
  //       this.singleArticles = response.json();
  //       console.log(this.singleArticles);
  //       this.router.navigate(['article', id]);
  //   });
  // }

  goToSingleArticlePage(clickedArticle: Listing) {
    this.router.navigate(['article', clickedArticle.id]);
  };
}
