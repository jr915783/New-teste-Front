import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './shared/container/container.component';
import { FooterComponent } from './shared/footer/footer.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VagasComponent } from './pages/vagas/vagas.component';

@NgModule({
  declarations: [
    AppComponent,   
    BannerComponent,    
    ContainerComponent,    
    FooterComponent,        
    VagasComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    HttpClientModule,   
    FormsModule,    
       
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
