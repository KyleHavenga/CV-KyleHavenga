import { Component, OnInit } from '@angular/core';
import { GithubreposService } from '../githubrepos.service';

@Component({
  selector: 'app-githubrepos',
  template: `
    <div *ngIf="repos" > 
       <div *ngFor="let repos of repos" > 
          {{repos.name}}
       </div>
    </div>
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
