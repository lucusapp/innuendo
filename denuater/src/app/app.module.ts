import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD

import {FormsModule} from '@angular/forms';

=======
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
>>>>>>> deniuater1.0

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

<<<<<<< HEAD
//servicios
=======


>>>>>>> deniuater1.0
import {ScrapeService} from './service/scrape.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductoComponent,
    NavbarComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule
  ],
  providers: [
    ScrapeService
  ],
=======
    FormsModule,
    ReactiveFormsModule,
  
    
    
  ],
  providers: [ScrapeService],
>>>>>>> deniuater1.0
  bootstrap: [AppComponent]
})
export class AppModule { }
