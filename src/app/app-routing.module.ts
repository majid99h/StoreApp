import { ProductlistComponent } from './Admin/productlist/productlist.component';
import { OrdersummaryComponent } from './Shop/ordersummary/ordersummary.component';
import { ShoppingcartComponent } from './Shop/shoppingcart/shoppingcart.component';
import { ProductShoppingComponent } from './Shop/shopping/ProductShoping.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './Auth/auth.guard';
import { Role } from './Model/Role';


const routes: Routes = [
  {
    path: '',
    component: ProductShoppingComponent
  },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'ProductByCategory/:category', component: ProductShoppingComponent },
  { path: 'CheckCart', component: ShoppingcartComponent },
  {
    path: 'OrderSummary', component: OrdersummaryComponent, canActivate: [AuthGuard],
    data: { roles: [Role.User] }
  },
  {
    path: 'ManageOrder',
    component: ProductlistComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
