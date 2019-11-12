import { AuthInterceptor } from './helper/AuthInterceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './Shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShoppingModule } from './Shop/shopping.module';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    
    
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    FormsModule,
    ShoppingModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    HttpClientModule,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
