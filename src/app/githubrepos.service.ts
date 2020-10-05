import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubreposService {

  constructor(private http: HttpClient) { }

  getRepos () {
    return this.http.get('https://api.github.com/users/KyleHavenga/repos');
  }
}
