import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login';
import { HomeComponent } from './components/home/home';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { 
    path: 'profile', 
    loadComponent: () => import('./components/profile/profile').then(c => c.ProfileComponent),
    canActivate: [AuthGuard] 
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./components/contact/contact').then(c => c.ContactComponent),
    canActivate: [AuthGuard] 
  },
  { 
    path: 'projects', 
    loadComponent: () => import('./components/projects/projects').then(c => c.ProjectsComponent),
    canActivate: [AuthGuard] 
  },
  { path: '**', redirectTo: '/home' }
];
