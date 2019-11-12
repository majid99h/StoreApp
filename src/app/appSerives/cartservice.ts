import { BaseResponse } from './../Interface/BaseResponse';
import { Cart } from './../Model/Cart';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSetting } from '../AppSetting';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private _cartCountSource = new Subject<number>();
    cartCount$ = this._cartCountSource.asObservable();

    constructor(private http: HttpClient) { }

    getCartCount(cartId: string): Observable<number> {
        return this.http.get<number>(AppSetting.url + 'GetCartCount?cartId=' + cartId);

    }
    getCount(count: number) {
        this._cartCountSource.next(count);
    }
    addToCart(cart: Cart): Observable<BaseResponse> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<BaseResponse>(AppSetting.url + 'AddToCart', cart, httpOptions);
    }
    removeCartItem(cart: Cart): Observable<BaseResponse> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<BaseResponse>(AppSetting.url + 'RemoveCartItem', cart, httpOptions);
    }
   getCartDetail(cartId: string):Observable<any>{
    return this.http.get<any>(AppSetting.url + 'GetCartDetail?cartId=' + cartId);
   }
}
