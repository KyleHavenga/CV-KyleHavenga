import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <div class="navbar is-black">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="assets/IMG/AngularLogo.PNG"> 
          </a> 

          <a class="navbar-burger burger" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            
          </a>
        </div>

        <div class="navbar-menu" id="navbar-menu">
          <div class="navbar-start"> 
          <a class="navbar-item" routerLink="/">Home</a>
          <a class="navbar-item" routerLink="/contact">Contact</a>
          <a class="navbar-item" routerLink="/about">About me</a>
          <a class="navbar-item" routerLink="/CV">Download CV</a>
          <a class="navbar-item" routerLink="/githubrepos">Github repos</a>
          </div>
         </div>
      </div>
    </header>
    
    
  `,

  
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
  
}


