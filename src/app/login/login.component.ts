import { AuthenticationService } from './../appSerives/AuthenticationService';
import { User } from './../Model/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  returnUrl: string;
  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authenticationService.login(this.user)
      .pipe(first())
      .subscribe(
          data => {
           
            this.router.navigate([this.returnUrl]);
          },
          error => {
             
          });

    }


  }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
