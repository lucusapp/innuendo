import { Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import { ScrapeService } from '../../service/scrape.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


productos:any[] =[];
imagenes:string[]=[]



  forma:FormGroup;

  constructor(private scrape:ScrapeService) {



    this.scrape.getScrape()
      .subscribe((data:any)=>{
        this.productos=(data);
        this.imagenes=(data.imagenes).split(',')
        console.log(this.productos)
        console.log(this.imagenes);
      })
   

      this.forma=new FormGroup({
        'url': new FormControl('')
            })
   }
   

   OnInit(){
   }

postUrl(){
  this.scrape.postScrape
  console.log(this.forma.value);
  this.forma.reset()
}




}
