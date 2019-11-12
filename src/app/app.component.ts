import { BaseResponse } from './Interface/BaseResponse';
import { CategoryService } from './appSerives/categoryservice';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Klick';
  allCategory: [];
  errorMessage: any;
  constructor(private categoryService: CategoryService) {
  }
  ngOnInit() {
    this.LoadCategory();
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
