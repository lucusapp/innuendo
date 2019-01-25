import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';






@Injectable({
  providedIn: 'root'
})
export class ScrapeService {

  CallUrl:string ="localhost:3000/producto"

  constructor(private http:HttpClient) {


    }


  }





