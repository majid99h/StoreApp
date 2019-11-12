import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsermenuDirective } from '../usermenu.directive';


@NgModule({
 declarations :[NavbarComponent,UsermenuDirective],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports : [
    NavbarComponent,
    UsermenuDirective
    
  ]
})
export class SharedModule { }
