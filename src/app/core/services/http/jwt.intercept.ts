import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../auth/user.service';

@Injectable({ providedIn: 'root' })
export class JWTIntercept implements HttpInterceptor {
  constructor(private _userService: UserService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this._userService.isLoggedIn()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this._userService.getUserToken()}`,
        },
      });
    }
    return next.handle(req);
  }
}
