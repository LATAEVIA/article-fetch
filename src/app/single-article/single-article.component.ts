import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from '../app.component';
import { Listing } from 'app/listing.model';


@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: [],
  inputs: ['childSingleArticles']
})
export class SingleArticleComponent implements OnInit{
  @Input() childSingleArticles;
  articleId: number = null;
  // @Input('singleArticles');
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    // var singleArticles = this.childSingleArticles;
    // console.log(this.childSingleArticles)
    // console.log(singleArticles)
    this.route.params.forEach((urlParameters) => {
      this.articleId = parseInt(urlParameters['id']);
    });
  }
}
