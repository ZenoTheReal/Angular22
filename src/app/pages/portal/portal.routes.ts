import { Routes } from '@angular/router';

export const PORTAL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./portal').then(c => c.Portal),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then(c => c.Dashboard)
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings').then(c=> c.Settings)
      }
    ]
  }
];