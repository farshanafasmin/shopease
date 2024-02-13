import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent  implements OnInit{
  id:any=""
  singleProduct:any={}
            constructor(private service:ApiServiceService, private route:ActivatedRoute){
              
            }
ngOnInit(): void {
  
  this.route.params.subscribe((data:any)=>{
    this.id=data.id
    console.log(this.id);
    
    this.service.getProducts().subscribe((response:any)=>{
console.log(response);

      this.singleProduct=response.find((i:any)=>i.id==this.id)
      console.log(this.singleProduct);
      
    })

  })
}
}
