import { BaseResponse } from './../Interface/BaseResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from '../AppSetting';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }
    getProductByCategory(category: string): Observable<BaseResponse> {
        return this.http.get<BaseResponse>(AppSetting.url + 'GetProductByCategory?category=' + category);
    }
}
