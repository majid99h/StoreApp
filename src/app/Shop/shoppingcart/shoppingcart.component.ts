import { BaseResponse } from './../../Interface/BaseResponse';
import { CartService } from './../../appSerives/cartservice';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Model/Cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  ProductDetail = [];
  grandTotal: number = 0;
  constructor(private cartService: CartService,private router : Router) { }

  ngOnInit() {
    this.LoadCartDetail();
  }
  public getTotalWeight(): number {
    var total = 0;
    if (this.ProductDetail != null && this.ProductDetail.length > 0) {
      this.ProductDetail.forEach(x => total += (x.Price * x.Quantity));
    }
    return total;
  }
  onAddItem(cart: Cart) {

    let cartId = localStorage.getItem('cartId');
    if (cartId != null) {
      cart.CartId = cartId;
      cart.Quantity = 1;
      this.cartService.addToCart(cart).subscribe(
        (resp: BaseResponse) => {
          if (resp.status = true) {
            this.cartService.getCount(resp.Total);
            this.LoadCartDetail();
          } else {
            console.log(resp.message);
          }

        }
      );
    }

  }
  onRemoveItem(cart: Cart) {

    let cartId = localStorage.getItem('cartId');
    if (cartId != null) {
      cart.CartId = cartId;
      if (cart.Quantity !=1) {
        cart.Quantity = -1;
        this.cartService.addToCart(cart).subscribe(
          (resp: BaseResponse) => {
            if (resp.status = true) {
              this.cartService.getCount(resp.Total);
              this.LoadCartDetail();
            } else {
              console.log(resp.message);
            }

          }
        );
      }
      else {
        this.onRemoveCartItem(cart);
      }
    }
    
  }
  onRemoveCartItem(cart: Cart) {
    this.cartService.removeCartItem(cart).subscribe(
      (resp: BaseResponse) => {
        if (resp.status = true) {
          
          this.LoadCartDetail();
        } else {
          console.log(resp.message);
        }

      }
    );
  }
  LoadCartDetail() {
    let cartId = localStorage.getItem('cartId');
    this.cartService.getCartDetail(cartId).subscribe(
      (resp: any) => {
        this.ProductDetail = resp;
        this.grandTotal = this.getTotalWeight();


      });
  }
  CheckOut(){
    this.router.navigateByUrl('/OrderSummary');
  }
}
