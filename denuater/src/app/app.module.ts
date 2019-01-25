import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//servicios
import {ScrapeService} from './service/scrape.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ScrapeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
