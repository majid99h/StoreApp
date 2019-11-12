import { FormsModule } from '@angular/forms';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductShoppingComponent } from './shopping/ProductShoping.component';
import { ProductlistComponent } from '../Admin/productlist/productlist.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';



@NgModule({
  declarations: [
    ProductShoppingComponent,
    ShoppingcartComponent,
    ProductlistComponent,
    OrdersummaryComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ProductShoppingComponent,
    ShoppingcartComponent,
    ProductlistComponent,
    OrdersummaryComponent
  ]
})
export class ShoppingModule { }
