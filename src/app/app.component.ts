
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <app-header></app-header>
    <router-outlet></router-outlet>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {

  
}
