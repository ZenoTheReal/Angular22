import { Routes } from '@angular/router';

export const PORTAL_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./auth').then(c => c.Auth),
        children: [
            {
                path: 'login',
                loadComponent: () => import('./login/login').then(c => c.Login)
            },
            {
                path: 'register',
                loadComponent: () => import('./register/register').then(c => c.Register)
            },
            {
                path: 'forgot-password',
                loadComponent: () => import('./forgot-password/forgot-password').then(c => c.ForgotPassword)
            },
        ]
    }
];