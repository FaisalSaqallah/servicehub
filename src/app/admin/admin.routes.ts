import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard';
import { ServicesComponent } from './services/services';
import { CustomersComponent } from './customers/customers';
import { AppointmentsComponent } from './appointments/appointments';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'services', pathMatch: 'full' },
      { path: 'services', component: ServicesComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'appointments', component: AppointmentsComponent },
    ]
  }
];