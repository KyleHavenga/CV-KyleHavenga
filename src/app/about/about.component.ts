import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <section class="hero is-dark is-bold is-medium">
   <div class="hero-body">
    <div class="container">
      <h1 class="title ">
        Curriculum Vitae
      </h1>
      <h2 class="subtitle">
        Here is an overview of what lies within the downloadable CV
      </h2>
    </div>
   </div>
  </section>
  <br>
  <div class="title-CV-all" > 
    <u>Personal details</u> 
  </div> 
  <div class="tile is-parent">
  
    <table style="width:100%">
      <tr>
        <th>Name</th>
        <td>Kyle</td>

      </tr>
      <tr>
        <th>Surname</th>
        <td>Havenga</td>

      </tr>
      <tr>
        <th>DOB</th>
        <td>01 February 1999</td>
      </tr>
      <tr>
        <th>Gender</th>
        <td>Male</td>
      </tr>
      <tr>
        <th>Nationality</th>
        <td>South African</td>
      </tr>
      <tr>
        <th>Current location</th>
        <td>Vereeniging Gauteng</td>
      </tr>
      <tr>
        <th>Drivers License</th>
        <td>Code 08 (South African Drivers License)</td>
      </tr>
      <tr>
        <th>Language preference</th>
        <td>English, Afrikaans</td>
      </tr>
    </table> 
  </div>
  <br> 
  <div class="title-CV-all" > 
    <u>Experience</u> 
  </div> 
  <div class="tile is-parent">
  
    <table style="width:100%">
      <tr>
        <th>Job</th>
        <th>Job-Title</th>
        <th>Duration</th>
      </tr>
      <tr>
        <td>Lions Creek</td>
        <td>Waiter/Bartender</td>
        <td>2018 - 2020</td>
      </tr>
      <tr>
        <td>Vaal slaghuis</td>
        <td>Assistent butcher</td>
        <td>2016 Vacations</td>
      </tr>
      <tr>
        <td>SMarketing.il</td>
        <td>Freelancer</td>
        <td>2018 - Still employed</td>
      </tr>
    </table> 
  </div>
  <br>
  <div class="title-CV-all" > 
    <u>Education</u> 
  </div> 
  <div class="tile is-parent">
  
    <table style="width:100%">
    <tr>
    <th>Formal education</th>
    <td>Bachelors degree in IT (Bsc IT) at North-West University Vereeniging</td>
    <td>Currently studying - Last year - commensed in 2018</td>
    </tr>
    <tr>
    <th>School education</th>
    <td>Grade 12 (Matric)</td>
    <td>Graduated in 2017 - subjects(Maths, English, Afrkinaans, Information Technology, Technical Drawings, Physics)</td>
    </tr>


    </table> 
  </div>
  <br> 

  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
