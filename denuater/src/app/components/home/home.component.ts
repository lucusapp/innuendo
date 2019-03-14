<<<<<<< HEAD
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
=======
import { Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import { ScrapeService } from '../../service/scrape.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { productos } from '../../models/termino';


>>>>>>> deniuater1.0



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
<<<<<<< HEAD
export class HomeComponent {

  constructor(private http:HttpClient) {

   

      this.http.get('/')
              .subscribe(data=>{
                console.log(data)
              })



   
  }
   buscar(termino:String){
    console.log(termino);
  }

=======
export class HomeComponent implements OnInit{
  
  
  imagenes:string[]=[]
  
  
  
  forma:FormGroup;
  url:FormGroup;
  productos:productos;
  
  constructor(private scrape:ScrapeService) {
>>>>>>> deniuater1.0

      this.scrape.getScrape()
      .subscribe((data)=>{
       this.productos=(data);
        // this.imagenes=(data.imagenes).split(',')
      console.log(data);
      console.log(this.productos)
      });
        // console.log(this.imagenes);
      
         this.url= new FormGroup({
           'valor': new FormControl('')
          })
          console.log(this.url.value);
        }
        
        
        ngOnInit(){
          
          this.forma=new FormGroup({
            '_id': new FormControl(''),
            'titulo': new FormControl(''),
            'precio': new FormControl(''),
            'caracteristicas': new FormControl('')
            
          })     
        }
        
        
        enviarUrl(){
          this.scrape.postScrape(this.url.value).subscribe(res=>{
            console.log(res);
          }) 
          console.log(this.url.value); 
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
            
            cargar(){
              console.log(this.productos);
              this.forma.setValue(this.productos)
        }
        //   console.log(this.forma.value);
        // }
        
      }
        
      
      
      
   