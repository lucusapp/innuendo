import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ScrapeService {



readonly UrlApi = 'http://localhost:3000/api/scrape'


  constructor(private http:HttpClient) {
  }


getScrape(){
  return this.http.get(this.UrlApi)
  .pipe(map(data=>{
    return data['producto']
  }))
}
  
  
postScrape(url){
  return this.http.post(this.UrlApi,url) 
 
}
}