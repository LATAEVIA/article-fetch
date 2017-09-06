import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ListingService {
  constructor(private http:HTTP) {

  }
  private url:string = "https://submissions.scholasticahq.com/api/v1/articles.json?per_page=10";
  getListing() {
    return this.http.get(this.url)map((response:Response) => response.json());
  }
}
