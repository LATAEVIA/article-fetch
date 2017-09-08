import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ArticleService {
  data: Object;

  constructor(private http:Http) {


  }
  private someArticlesUrl:string = "https://submissions.scholasticahq.com/api/v1/articles.json?per_page=10";
  getArticles() {
    return this.http.get(this.someArticlesUrl).map((response:Response) => this.data = response.json()['articles']);
    // return this.http
    // .get(this.someArticlesUrl)
    // .subscribe(resp => {console.log(resp)});
  }

  private moreArticlesUrl:string = "https://submissions.scholasticahq.com/api/v1/articles.json?per_page=10&offset=10";
  getMoreArticles() {
    // return this.http.get(this.moreArticlesUrl).map((response:Response) => this.data = response.json()['articles']);
    return this.http
    .get(this.moreArticlesUrl)
    .map((response:Response) => this.data = response.json()['articles'])
    // .push(articles);

    // return this.http
    // .get(this.moreArticlesUrl)
    // .subscribe(resp => {console.log(resp)});

  }
}
