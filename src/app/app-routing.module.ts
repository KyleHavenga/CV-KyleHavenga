import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CVComponent } from './cv/cv.component';
import { GithubreposComponent } from './githubrepos/githubrepos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }, 
  {
    path: 'about', 
    component: AboutComponent
  }, 
  {
    path: 'CV',
    component: CVComponent
  }, 
  {
    path: 'githubrepos', 
    component: GithubreposComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
