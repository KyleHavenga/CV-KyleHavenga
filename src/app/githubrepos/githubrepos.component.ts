import { Component, OnInit } from '@angular/core';
import { GithubreposService } from '../githubrepos.service';

@Component({
  selector: 'app-githubrepos',
  template: `
  <div class="title-3">
    <u> All of my github repos </u>
  </div>
  <section class="section" > 
    <div class="container">
      <div class="cards" *ngIf="repos">
        <div class="card" *ngFor="let repos of repos" > 
          <a class="link2" href="{{repos.html_url}}"> - {{repos.name}}</a>
        </div>      
      </div>
    </div>
  </section>
  `,
  styles: [
  ]
})
export class GithubreposComponent implements OnInit {
  repos;
  constructor(private githubservice: GithubreposService) { }

  ngOnInit() { 
    this.githubservice.getRepos()
    .subscribe(repos => {
      console.log(repos);
      this.repos = repos ;
    });
  }
  

}
