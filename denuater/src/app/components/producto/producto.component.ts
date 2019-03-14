import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ScrapeService } from '../../service/scrape.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {


  url:FormGroup

  constructor(private scrape:ScrapeService) {

    
    this.url= new FormGroup({
      'valor': new FormControl()
    })
    console.log(this.url);
    
    // this.scrape.postScrape(this.url.value).subscribe(res=>{
      //   console.log(res);
      // })
    }
    enviarUrl(){
    console.log(this.url.value);

  }
  }




