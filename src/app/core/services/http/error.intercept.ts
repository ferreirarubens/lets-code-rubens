import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../auth/user.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _userService: UserService, private _router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const error = {
          message: err.error?.detail ?? err.error?.message,
          title: err.error?.title ?? '',
          path: err.error?.path ?? err.url,
          status: err.status,
          showAlert: true,
        };

        switch (err.status) {
          case 0:
            error.title = 'Servidor não disponível';
            error.message =
              'Não foi possível estabelecer uma conexão com o servidor';
            break;
          case 401:
            error.title = 'Usuário não autenticado!';
            error.message = 'Redirecionando para login';
            error.showAlert = true;
            this._userService.logout();
            setTimeout(() => {
              this._router.navigate(['/login']);
            }, 1000);
            break;
          case 404:
            break;
          case 500:
            // eslint-disable-next-line no-console
            console.log(err);
            error.message = 'Desculpe o inconveniente, favor contatar suporte';
            error.title = 'Erro interno no servidor!';
            break;
          default:
            // this.eventManager.broadcast(new JhiEventWithContent('portalApp.httpError', err));
            break;
        }
        if (error.message !== undefined && error.showAlert) {
          /* this._alertService.dialog({
            message: error.message,
            title: error.title,
            type: AlertType.ERROR,
          }); */
          console.log(error);
        }
        return throwError(err);
      })
    );
  }
}
