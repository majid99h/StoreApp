
import { CartService } from '../../appSerives/cartservice';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  cartCount :number=0;
  
  constructor(private cartServie: CartService , private router :Router) { }

  ngOnInit() {
    this.LoadCartCount();
    this.getCartNumber();
    
  }
  getCartNumber(){
    this.cartServie.cartCount$.subscribe(resp=>{
      this.cartCount = resp;
    });
  }
  onCartChange(){
    this.router.navigateByUrl('/CheckCart');
  }
  LoadCartCount() {
    let cartId = localStorage.getItem('cartId');
    if (cartId != null) {
      this.cartServie.getCartCount(cartId).subscribe(
        (res: any) => {
          this.cartCount = res;
          
        }
      );
    }
  }
}
