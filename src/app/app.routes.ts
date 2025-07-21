import { Routes } from '@angular/router';
import { Login } from './auth/login';
import { authGuard } from './auth/auth-guard'; // ✅ Guard import

export const routes: Routes = [
  // Default redirect to auth
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  // Auth login route
  { path: 'auth', component: Login },

  // ✅ Protect admin route
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },

  // ✅ Protect customer route
  {
    path: 'customer',
    canActivate: [authGuard],
    loadComponent: () => import('./customer/customer-dashboard').then(m => m.CustomerDashboardComponent)
  }
];