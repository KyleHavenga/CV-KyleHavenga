import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>

    ​<div class="tile-grid">
    <div class="tile tile-colomn 12 is-parent">
    <div class="tile tile-grid-item tile-column-3 ">
      <div class="tile-inner-padded tile-grid-item-inner">
        Tile
      </div>
    </div>
    
    <div class="tile tile-grid-item tile-column-3">
      <div class="tile-inner-padded tile-grid-item-inner">
        Tile
      </div>
    </div>
    
    <div class="tile tile-grid-item tile-column-3 ">
      <div class="tile-inner-padded tile-grid-item-inner">
        Tile
      </div>
    </div>
    
    <div class="tile tile-grid-item tile-column-3">
      <div class="tile-inner-padded tile-grid-item-inner">
        Tile
      </div>
    </div>
    </div>
    </div>










    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'CV-KyleHavenga';
}
