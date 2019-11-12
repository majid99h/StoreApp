import { OrdersummaryComponent } from './Shop/ordersummary/ordersummary.component';
import { ShoppingcartComponent } from './Shop/shoppingcart/shoppingcart.component';
import { ProductShoppingComponent } from './Shop/shopping/ProductShoping.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './Auth/auth.guard';




const routes: Routes = [
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'ProductByCategory/:category', component: ProductShoppingComponent },
  { path: 'CheckCart', component: ShoppingcartComponent },
  { path: 'OrderSummary', component: OrdersummaryComponent,canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
