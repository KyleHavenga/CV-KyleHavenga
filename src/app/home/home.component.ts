import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: 
  `
  <section class="hero is-dark is-bold is-medium">
   <div class="hero-body">
    <div class="container">
      <h1 class="title ">
        Curriculum Vitae
      </h1>
      <h2 class="subtitle">
        Kyle Havenga
      </h2>
    </div>
   </div>
  </section>
  <br>
  
  <div class="tile is-parent">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-dark">
          <p class="subtitle">A little bit about me</p>
          <p class="body">lol</p>
        </article>
        
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-black">
          <p class="title">Im not Photogenic 😢   </p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png">
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-black">
        <p class="title">Wide tile</p>
        <p class="subtitle">Aligned with the right tile</p>
        <div class="content">
          <!-- Content -->
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-dark">
      <div class="content">
        <p class="title">Tall tile</p>
        <p class="subtitle">With even more content</p>
        <div class="content">
          <!-- Content -->
        </div>
      </div>
    </article>
  </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-parent">
    
      <article class="tile is-child notification is-dark " >
        <p class="title">Skills</p>    
        <p class="subtitle">These bars indicate how confident I am in these fields!</p>  
        
        
        <p class="heading is-size-4">C#</p>
        <div class="progress-wrapper">
        <progress class="progress is-warning is-medium" value="77" max="100">15%</progress>
        <p class="progress-value has-text-black">77%</p>
        </div>
        
        
        <p class="heading is-size-4">Delphi</p>
        <div class="progress-wrapper">
        <progress class="progress is-success is-medium" value="45" max="100">15%</progress>
        <p class="progress-value has-text-black">45%</p>
        </div>
        
        
        <p class="heading is-size-4">Java</p>
        <div class="progress-wrapper">
        <progress class="progress is-primary is-medium" value="61" max="100">15%</progress>
        <p class="progress-value has-text-black">61%</p>
        </div>

        
        <p class="heading is-size-4">Angular</p>
        <div class="progress-wrapper">
        <progress class="progress is-link is-medium" value="67" max="100">15%</progress>
        <p class="progress-value has-text-black">67%</p>
        </div>

        
        <p class="heading is-size-4">Python</p>
        <div class="progress-wrapper">
        <progress class="progress is-danger is-medium" value="43" max="100">15%</progress>
        <p class="progress-value has-text-black">43%</p>
        </div>

        
        <p class="heading is-size-4">SQL</p>
        <div class="progress-wrapper">
        <progress class="progress is-info is-medium" value="80" max="100">15%</progress>
        <p class="progress-value has-text-black">80%</p>
        </div>

        
        <p class="heading is-size-4">CSS</p>
        <div class="progress-wrapper">
        <progress class="progress is-black is-medium" value="55" max="100">15%</progress>
        <p class="progress-value has-text-black">55%</p>
        </div>

        <p class="heading is-size-4">HTML</p>
        <div class="progress-wrapper">
        <progress class="progress is-warning is-medium" value="33" max="100">15%</progress>
        <p class="progress-value has-text-black">33%</p>
        </div>
        


        
      </article>
    </div>
  </div>




  `
  ,
  styles: [ `
  .hero  {
    background-image: url('/assets/IMG/BackGMain.jpg') !important;
    background-size: cover; 
    background-position: center center;
  }`

  
    
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
