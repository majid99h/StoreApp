import { AuthenticationService } from './appSerives/AuthenticationService';
import { BaseResponse } from './Interface/BaseResponse';
import { CategoryService } from './appSerives/categoryservice';
import { Component, OnInit } from '@angular/core';
import { User } from './Model/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Klick';
  allCategory: [];
  errorMessage: any;
  
  user: User = new User();
  constructor(private categoryService: CategoryService, private authenticationService: AuthenticationService) {
  }
  ngOnInit() {
    this.LoadCategory();
    this.getUser();
    
  }
  getUser() {
    this.authenticationService.currentUser.subscribe(
      (currentUser) => {
        this.user = currentUser;
      }
    )


  }
  LoadCategory() {
    this.categoryService.getAllCategory().subscribe(
      (response: BaseResponse) => {
        if (response.status == true) {
          this.allCategory = response.data;
        } else {
          this.errorMessage == response.message;
        }
      }
    );

  }
}
