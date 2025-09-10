import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  currentUser: User | null = null;

  navigationCards = [
    {
      title: 'Profile',
      description: 'View and edit your personal information',
      icon: 'person',
      route: '/profile',
      color: 'primary'
    },
    {
      title: 'Projects',
      description: 'Showcase your project portfolio',
      icon: 'work',
      route: '/projects',
      color: 'accent'
    },
    {
      title: 'Experience',
      description: 'Display your work experience',
      icon: 'timeline',
      route: '/experience',
      color: 'primary'
    },
    {
      title: 'Certifications',
      description: 'Show your professional certifications',
      icon: 'school',
      route: '/certifications',
      color: 'accent'
    },
    {
      title: 'Contact',
      description: 'Manage contact information and messages',
      icon: 'contact_mail',
      route: '/contact',
      color: 'primary'
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  navigateToSection(route: string): void {
    this.router.navigate([route]);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
