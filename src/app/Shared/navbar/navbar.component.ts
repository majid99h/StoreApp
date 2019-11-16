import { User } from './../../Model/user';
import { AuthenticationService } from './../../appSerives/AuthenticationService';

import { CartService } from '../../appSerives/cartservice';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartCount: number = 0;
  IsUser: boolean = false;
  user: User = new User();
  constructor(private cartServie: CartService, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {


    this.LoadCartCount();
    this.getCartNumber();
    this.getUser();

  }
  onLogOut() {


    this.authenticationService.logout();

    this.router.navigate(['']);

  }
  
  getUser() {
    this.authenticationService.currentUser.subscribe(
      (currentUser) => {
        if (currentUser != null) {
          this.IsUser = true;
          this.user = currentUser;
        } else {
          this.IsUser = false;
          this.user = currentUser;
        }
      }
    )


  }
  getCartNumber() {
    this.cartServie.cartCount$.subscribe(resp => {
      this.cartCount = resp;
    });
  }
  onCartChange() {
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
