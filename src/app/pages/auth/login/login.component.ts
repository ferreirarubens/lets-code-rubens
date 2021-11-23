import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup,
  Validators
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'app/core/models';
import { AuthService, UserService } from 'app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _userService: UserService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm = this._formBuilder.group({
      login: ['letscode', Validators.required],
      senha: ['lets@123', [Validators.required]],
    });
  }

  ngOnInit() {
    if (this._userService.isLoggedIn()) {
      this._router.navigate(['/']);
    }
  }

  onSubmit() {
    this._authService
      .login(this.loginForm.value)
      .toPromise()
      .then((resp) => {
        if (resp) {
          this._userService.login({ jwtToken: resp } as User);
          this._router.navigate(['/']);
        } else {
          this._snackBar.open('Usuário ou senha inválidos', 'Fechar', {
            duration: 1000,
            panelClass: ['mat-color-red'],
          });
        }
      })
  }
}
