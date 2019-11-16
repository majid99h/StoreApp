import { AuthenticationService } from './AuthenticationService';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private authenticationService:AuthenticationService) { }
    private _userSource = new Subject<any>();
    currentusers$ = this._userSource.asObservable();
    getUser(user: any) {
        this._userSource.next(user);
    }

}
