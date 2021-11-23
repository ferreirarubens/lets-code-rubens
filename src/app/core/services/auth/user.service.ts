import { Injectable } from '@angular/core';
import { User } from '../../models';
import { AUTH_USER_KEY } from '../../const';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private _router: Router) { }
    
    getUser(): User {
        return JSON.parse(sessionStorage.getItem(AUTH_USER_KEY)) as User;
    }

    isLoggedIn() {
        return !!this.getUser();
    }

    logout() {
        sessionStorage.removeItem(AUTH_USER_KEY);
        this._router.navigate(['/login']);
    }

    login(user: User) {
        sessionStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    }

    getUserToken() {
        return this.getUser().jwtToken;
    }
}