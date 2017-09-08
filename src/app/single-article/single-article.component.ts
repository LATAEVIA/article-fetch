import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: [],
  inputs: ['childSingleArticles']
})
export class SingleArticleComponent{
  @Input() childSingleArticles;
  // @Input('singleArticles');
  constructor() { }

  ngOnInit() {
    var singleArticles = this.childSingleArticles;
    console.log(this.childSingleArticles)
    console.log(singleArticles)
  }
}
