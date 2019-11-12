
import { Cart } from '../../Model/Cart';
import { CartService } from '../../appSerives/cartservice';
import { BaseResponse } from '../../Interface/BaseResponse';
import { ProductService } from '../../appSerives/productservice';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';



@Component({
  selector: 'app-mainlayout',
  templateUrl: './ProductShopping.component.html',
  styleUrls: ['./ProductShopping.component.css']
})
export class ProductShoppingComponent implements OnInit {
  products = [];

  constructor(
    private prodService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      let category = paramMap.get('category');
      this.LoadProductByCategory(category);
    });
  }
  getCartCount(): number {
    var total = 0;
    if (this.products != null && this.products.length > 0) {
      this.products.forEach(x => total += x.Quantity);
    }
    return total;
  }
  onAddCart(cart: Cart) {

    let cartId = localStorage.getItem('cartId');
    if (cartId != "null") {
      cart.CartId = cartId;
    } else {
      cart.CartId = null;
    }
    cart.Quantity = 1;
    this.cartService.addToCart(cart).subscribe(
      (resp: BaseResponse) => {
        console.log(resp);
        if (resp.status = true) {
          if (resp.data != null) {
            localStorage.setItem('cartId', resp.data);
          }
          this.cartService.getCount(resp.Total);
        } else {
          console.log(resp.message);
        }

      }
    );


  }

  LoadProductByCategory(category: string) {
    this.prodService.getProductByCategory(category).subscribe(
      (resp: BaseResponse) => {
        if (resp.status == true) {
          this.products = resp.data;
        }
      }
    );
  }
}
