import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
<<<<<<< HEAD


=======
import {map} from 'rxjs/operators';
>>>>>>> deniuater1.0




@Injectable({
  providedIn: 'root'
})
export class ScrapeService {

<<<<<<< HEAD
  CallUrl:string ="localhost:3000/producto"

  constructor(private http:HttpClient) {


    }


  }





=======


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
>>>>>>> deniuater1.0
