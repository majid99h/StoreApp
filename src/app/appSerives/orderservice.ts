import { BaseResponse } from './../Interface/BaseResponse';
import { Cart } from './../Model/Cart';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSetting } from '../AppSetting';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderService {


    constructor(private http: HttpClient) { }


    SaveOrder(ship: any): Observable<BaseResponse> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<BaseResponse>(AppSetting.url + 'SaveOrder', ship, httpOptions);
    }

}
