import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthService } from '../../services/auth.service';
import { ProjectsService } from '../../services/projects.service';
import { User } from '../../interfaces/user.interface';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule,
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
  featuredProjects: Project[] = [];

  navigationCards = [
    { 
      title: 'My Profile', 
      description: 'View and manage personal information', 
      icon: 'person', 
      route: '/profile', 
      color: '#3f51b5' 
    },
    { 
      title: 'Projects', 
      description: 'Browse my project portfolio', 
      icon: 'work', 
      route: '/projects', 
      color: '#4caf50' 
    },
    { 
      title: 'Experience', 
      description: 'Professional work history', 
      icon: 'business_center', 
      route: '/experience', 
      color: '#ff9800' 
    },
    { 
      title: 'Certifications', 
      description: 'Professional certifications and achievements', 
      icon: 'verified', 
      route: '/certifications', 
      color: '#9c27b0' 
    },
    { 
      title: 'Contact Me', 
      description: 'Get in touch for opportunities', 
      icon: 'contact_mail', 
      route: '/contact', 
      color: '#f44336' 
    }
  ];

  constructor(
    private authService: AuthService,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    this.projectsService.getFeaturedProjects().subscribe(projects => {
      this.featuredProjects = projects;
    });
  }
}
