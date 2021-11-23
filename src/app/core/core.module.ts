import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JWTIntercept, AuthService, UserService, ErrorInterceptor } from './services';
import { LCGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [],
  providers: [],
})
export class LCCoreModule {
  static forRoot(): ModuleWithProviders<LCCoreModule> {
    return {
      ngModule: LCCoreModule,
      providers: [
        AuthService,
        UserService,
        LCGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JWTIntercept,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true,
        },
      ],
    };
  }
}
