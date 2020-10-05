import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CVComponent } from './cv/cv.component';
import {HttpClientModule} from '@angular/common/http';
import { GithubreposService } from './githubrepos.service';
import { CommonModule } from '@angular/common';  
import { GithubreposComponent } from './githubrepos/githubrepos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    CVComponent,
    GithubreposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    GithubreposService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
