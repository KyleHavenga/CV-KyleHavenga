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
  <div class="cards-2" >
    <div class="card">
      <div class="titles-pic"> <U> A photo of myself </U> </div> 
      <div class="image is-4by3"> 
        <img src="assets/IMG/Profile-pick.jpg ">
      </div>
    </div>
    <div class="card">
      <div class="titles" > 
        <u>Where to find me</u>
      </div>
      <div class="subtitle-2" > 
        <u>Links: </u>
      </div>
      <div class="link"> 
      <a class="link" href="https://www.facebook.com/kyle.havenga.5/"> - Facebook</a>
      </div>
      <div class="link"> 
      <a class="link" href="https://twitter.com/Kyle41870170/"> - Twitter</a>
      </div>
      <div class="link"> 
      <a class="link" href="https://www.instagram.com/kyle_havenga_/?hl=en"> - Instagram</a>
      </div>
       
      <div class="github-link" > 
         <div class="titles" > 
            <u>Github account:</u>
         </div>
      </div>
      <div class="subtitle-2" > 
        <div class="link"> 
          <a class="link" href="https://github.com/KyleHavenga/"> - Github</a>
        </div>
      </div>
      
      


    </div>

    <div class="card ">
      <div class="github-link" > 
        <div class="titles" > 
          <u>Who am I?</u>
        </div>
        <div class="text-body" > 
          I am a young aspiring programmer who is always looking for new 
          adventures when it comes to what i love. I have a great passion 
          for programming and all that it entails as well as all the fields 
          that is accompanies.
        </div>
      </div>
    </div>
  </div>
  <br> 
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

 

  `
  ,
  styles: [ `

  }`

  
    
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
}
