import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';


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
    <div class="image is-4by4"> 
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
          I am a young aspiring programmer with great ambitions. I have working experience 
          within a team and alone as a freelancer. Attached in the CV download page you will 
          find a .pdf copy of my cv and on the github repos page you can access all of my repositories 
          directly. Enjoy!
      </div>
    </div>

    
</div>
</div>

<br>
<div class="card" > 
  <div class="titles" >
    <u> Quote of the day! </u>
  </div>
  <div class="text-body"> 
   {{quote.quote.body}} 
  </div>
  <div class="text-body"> 
    - {{quote.quote.author}} 
  </div>
</div>
<br> 

  <div class="tile is-parent">
      <article class="tile is-child notification is-dark " >
        <p class="titles">Skills</p>    
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
 
  <div class="cards" >
  <div class="card" > 
    <div class="titles" > 
      <u> My Hobbies </u>
    </div>
    <div class="text-body"> 
  I have always been fascinated with field's that are not my own but i will 
  never leave what i love, atrology is one of the topics that i enjoy the most 
  second to IT. In my off time i like playing games and 
  watching the occational anime or even taking my dogs for a walk.
    </div>
  </div>
  <div class="card" > 
    <div class="titles" > 
      <u> My Strenghts</u>
    </div>
    <div class="text-body"> 
  I am a very friendly person with a broad outlook on life, im quiet 
  but interactive when it it required of me. I have no problem working 
  in a group and get along with everyone. I am very curious and eager to learn 
  but above all I strive to be successfull in everything that I do. I am also very 
  punctual and respective.
    </div>
  </div>
  <div class="card" > 
    <div class="titles" > 
      <u> My Weaknesses</u>
  </div>
  <div class="text-body"> 
   I have a tendency to be over eager and impatient, but i would say that 
   is mostly due to exitement in most cases. I do not have alot of patience and 
   will get erritated if people whom i work with dont adhere to work etiquette. 
  </div>
</div>
<div class="card" > 
    <div class="titles" > 
      <u> Where is the ISS right now?</u>
  </div>
  <div class="text-body"> 
    <p>Altitude: {{isslocation.altitude}}</p>
    <p>Latitude: {{isslocation.latitude}}</p> 
    <p>Longitude:{{isslocation.longitude}} </p>
    
  </div>
  <div class="text-body">
    you can use this link to find the <a class="link-ISS" href="https://www.latlong.net/lat-long-dms.html"> - Location</a> where the ISS passed 
    over.
  </div>
  
</div>
</div>

  `
  ,
  styles: [ `

  }`

  
    
  ]
})
export class HomeComponent implements OnInit {
  quote;
  isslocation;
  constructor(private quotes : QuotesService) { }

  ngOnInit() { 
    this.quotes.getRepos()
    .subscribe(quote => {
      console.log(quote);
      this.quote = quote ;
    });

    this.quotes.getlocation()
    .subscribe(ISS => {
      console.log(ISS);
      this.isslocation = ISS ;
    });
  }
}
