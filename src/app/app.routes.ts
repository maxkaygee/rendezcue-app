import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { RegistrationComponent } from './components/registration.component';
import { ActivityListComponent } from './components/activity-list.component';
import { ActivityFormComponent } from './components/activity-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'activities', component: ActivityListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'add-activity', component: ActivityFormComponent }
];