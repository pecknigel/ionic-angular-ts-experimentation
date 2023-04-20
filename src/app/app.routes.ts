import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'datepicker',
    loadComponent: () => import('./datepicker/datepicker.page').then( m => m.DatepickerPage)
  },
];
