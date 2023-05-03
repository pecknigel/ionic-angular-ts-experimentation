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
  {
    path: 'transport-modes-one',
    loadComponent: () => import('./transport-modes-one/transport-modes-one.page').then(m => m.TransportModesOnePage)
  },
  {
    path: 'transport-modes-two',
    loadComponent: () => import('./transport-modes-two/transport-modes-two.page').then( m => m.TransportModesTwoPage)
  },
];
