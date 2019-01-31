import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ScrapeService {

  constructor(private http:HttpClient) {


    
   }
getScrape(){
  this.http.get('http://localhost:3000')
      .subscribe(data=>{
        console.log(data);
      })
}



  }