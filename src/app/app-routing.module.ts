import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductViewComponent } from './product-view/product-view.component';
const routes: Routes = [
  {path:'',component:ProductlistComponent},
  {path:'single/:id',component: ProductViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
