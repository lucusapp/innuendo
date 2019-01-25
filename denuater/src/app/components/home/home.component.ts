import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
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


}
