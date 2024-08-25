import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { ActivityListComponent } from './components/activity-list.component';
import { ActivityFormComponent } from './components/activity-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'activities', component: ActivityListComponent },
  { path: 'add-activity', component: ActivityFormComponent },
];