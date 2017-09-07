import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class ArticleService {
//   constructor(private http:Http) {
//
//   }
//   private url:string = "https://submissions.scholasticahq.com/api/v1/articles.json?per_page=10";
//   getArticles() {
//     return this.http.get(this.url).map((response:Response) => response.json());
//   }
// }


// data: Object;
//
// constructor(public http: Http) {
// }
// getArticles() {
//     return this.http.get('https://submissions.scholasticahq.com/api/v1/articles.json?per_page=10')
//     .map((res: Response) => {
//       this.data = res.json()['articles'];
//     });
//   }

  data: Object;
  constructor(private http:Http) {

  }
  private url:string = "https://submissions.scholasticahq.com/api/v1/articles.json?per_page=10";
  getArticles() {
    return this.http.get(this.url).map((response:Response) => this.data = response.json()['articles']);
  }

}
