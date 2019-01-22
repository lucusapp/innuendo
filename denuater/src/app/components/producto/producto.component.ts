import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {


  constructor(private http:HttpClient) {

    this.http.get('http://localhost:3000/producto')
            .subscribe(data=>{
              console.log(data)
            })



 }

}
