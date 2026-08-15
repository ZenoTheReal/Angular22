import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
    },
    {
        path: '',
        canActivate: [],
        loadChildren: () => import('./pages/auth/auth.routes').then(m => m.PORTAL_ROUTES)
    },
    {
        path: '',
        canActivate: [],
        loadChildren: () => import('./pages/portal/portal.routes').then(m => m.PORTAL_ROUTES)
    },
    { path: '**', redirectTo: '' }
];
