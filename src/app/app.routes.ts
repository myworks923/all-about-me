import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { HomeComponent } from './components/home/home';
import { ProfileComponent } from './components/profile/profile';
import { ContactComponent } from './components/contact/contact';
import { ProjectsComponent } from './components/projects/projects';
import { CertificationsComponent } from './components/certifications/certifications';
import { ExperienceComponent } from './components/experience/experience';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
  { path: 'projects', component: ProjectsComponent, canActivate: [authGuard] },
  { path: 'certifications', component: CertificationsComponent, canActivate: [authGuard] },
  { path: 'experience', component: ExperienceComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '/login' }
];
