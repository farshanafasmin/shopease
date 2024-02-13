import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  serviceData:number=1000

  serviceMethod(){
    alert("service method worked")
  }

  // api call
  // access all restaurants data

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
}
