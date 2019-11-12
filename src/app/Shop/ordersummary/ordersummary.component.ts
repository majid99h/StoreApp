import { AuthenticationService } from './../../appSerives/AuthenticationService';
import { BaseResponse } from './../../Interface/BaseResponse';
import { OrderService } from './../../appSerives/orderservice';
import { CartService } from './../../appSerives/cartservice';
import { Component, OnInit } from '@angular/core';
import { Shipment } from '../../Model/Shipment';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {
  cartDetail = [];
  grandTotal: number = 0;
  model :Shipment =new Shipment();
  constructor
    (
      private cartService: CartService,
      private orderService: OrderService,
      private authenticationService:AuthenticationService
    ) { }

  ngOnInit() {
    this.getOrderSummary();
  }
  public getTotalWeight(): number {
    var total = 0;
    if (this.cartDetail != null && this.cartDetail.length > 0) {
      this.cartDetail.forEach(x => total += (x.Price * x.Quantity));
    }
    return total;
  }
  SaveOrder() {
    let currentUser = this.authenticationService.currentUserValue;
    let cartid = localStorage.getItem('cartId');
    this.model.CartId = cartid;
    this.model.UserName=currentUser.UserName;
    this.orderService.SaveOrder(this.model).subscribe((resp: BaseResponse) => {
      if (resp.status == true) {
        console.log('sucess');
        localStorage.removeItem('cartId');
        console.log('Order Complete');
      }else{

      }
    });
  }
  getOrderSummary() {
    let cartId = localStorage.getItem('cartId');
    this.cartService.getCartDetail(cartId).subscribe((resp: any) => {
      console.log(resp);
      this.cartDetail = resp;
      this.grandTotal = this.getTotalWeight();
    });
  }
}
