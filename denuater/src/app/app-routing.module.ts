import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductoComponent} from './components/producto/producto.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'producto', component: ProductoComponent},
  {path : '', component: HomeComponent},
  {path : '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
