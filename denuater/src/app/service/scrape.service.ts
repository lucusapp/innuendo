import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Termino } from '../models/termino';
import {map} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ScrapeService {





  selecTermino:Termino

readonly UrlApi = 'http://localhost:3000/api/scrape'




  constructor(private http:HttpClient) {

   
  }


getScrape(){
  return this.http.get(this.UrlApi)
  .pipe(map(data=>{
    return data['producto']
  }))
}
  
postScrape(termino){
  this.http.post(this.UrlApi,termino)
      .subscribe((data:any)=>{
        console.log(data);
      })
}




  }