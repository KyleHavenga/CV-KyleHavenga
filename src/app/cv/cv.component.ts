import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  template: `
  <br>
  <div class="card" >
  <iframe class="iframe1" src="assets/CV/CV-KyleHavenga.pdf"></iframe>
  </div>

  `,
  styles: [
  ]
})
export class CVComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
