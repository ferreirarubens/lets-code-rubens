import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services';

@Injectable({providedIn: 'root'})
export class LCGuard implements CanActivate {
    constructor(private _userService: UserService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this._userService.isLoggedIn()) {
            return true;
        }

        this._router.navigate(['/login']);
        return false;
    }
}