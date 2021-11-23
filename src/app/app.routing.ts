import { Routes } from '@angular/router';
import { LCGuard } from './core';
import { LoginComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      pageId: 'login',
    },
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main-pages.module').then((m) => m.MainPagesModule),
    canActivate: [LCGuard],
    data: {
      pageId: 'main',
    },
  },
  {
    path: '**',
    redirectTo: 'tasks',
  }
];
