import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  getRepos () {
    return this.http.get('https://favqs.com/api/qotd');
  }

  getlocation () {
    return this.http.get('https://api.wheretheiss.at/v1/satellites/25544');
  }
}
