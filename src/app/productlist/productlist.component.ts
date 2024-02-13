import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productName:string=""
  productList:any=[]
  constructor(private ds:ApiServiceService) { }
ngOnInit(): void {
  
  this.ds.getProducts().subscribe((data:any)=>{
    this.productList=data
    console.log(this.productList);
    
  })
}
}
