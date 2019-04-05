import { Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import { ScrapeService } from '../../service/scrape.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { productos } from '../../models/termino';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  
  imagenes:string[]=[]
  
  
  
  forma:FormGroup;
  url:FormGroup;
  productos:productos;
  
  constructor(private scrape:ScrapeService) {
    
    // console.log(this.imagenes);
    
    this.url= new FormGroup({
      'valor': new FormControl('')
    })
    console.log(this.url.value);
    this.forma=new FormGroup({
      '_id': new FormControl(''),
      'titulo': new FormControl(''),
      'precio': new FormControl(''),
      'caracteristicas': new FormControl('')
    })     
    console.log(this.forma.value);
  }
  
  
  ngOnInit(){
    
  }
  
  cargar(){
    this.scrape.getScrape()
    .subscribe((data)=>{
     this.productos=(data);
      // this.imagenes=(data.imagenes).split(',')
    console.log(this.productos);
    this.forma.setValue(this.productos)
  });
  }
  
  enviarUrl(){
          this.scrape.postScrape(this.url.value).subscribe(res=>{
            console.log(res);
          })
          
        this.forma.reset()
          console.log(this.url.value); 
        }

   enviarForm(){
    console.log(this.forma.value);
    this.scrape.postCsv(this.forma.value).subscribe(res=>{
      console.log(res);
    })
  }
        
        
        
        // this.forma=new FormGroup({
          //  // 'id': new FormControl(this.productos._id),
          //   'titulo': new FormControl(this.productos.titulo),
          //   'precio': new FormControl(this.productos.precio),
          //   'caracteristicas': new FormControl(this.productos.caracteristicas)
          // })
          
          // console.log(this.forma.value);
          
          
          
          // this.scrape.getScrape()
          // .subscribe((data:any)=>{
            //     this.productos=(data);
            //     // this.imagenes=(data.imagenes).split(',')
            //     console.log(this.productos)
            //     // console.log(this.imagenes);
            //     console.log(data.titulo);
            
            //   })
            
        //   console.log(this.forma.value);
        // }
        
      }
        
      
      
      
   