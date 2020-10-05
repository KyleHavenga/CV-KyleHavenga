import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <br>
  <div class="tile is-parent">
    <div class="tile is-parent">
      <article class="tile is-child notification is-dark " >
        <div class="container content has-text-centered">
           <p> Please feel free to contact me! </p>
           <br>
           <p> Email: Kyle.Havenga888@gmail.com </p>
           <p> Cell: 0842299685 </p>
        </div>
      </article>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
