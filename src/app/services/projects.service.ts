import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, ProjectCategory } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private mockProjects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Angular, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      shortDescription: 'Full-stack e-commerce solution with modern web technologies',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      imageUrl: 'assets/images/projects/ecommerce.jpg',
      projectUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/johndeveloper/ecommerce-platform',
      startDate: new Date('2023-01-15'),
      endDate: new Date('2023-06-30'),
      status: 'completed',
      featured: true,
      category: 'web'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
      shortDescription: 'Collaborative task management with real-time features',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      imageUrl: 'assets/images/projects/taskmanager.jpg',
      projectUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/johndeveloper/task-manager',
      startDate: new Date('2023-07-01'),
      endDate: new Date('2023-10-15'),
      status: 'completed',
      featured: true,
      category: 'web'
    },
    {
      id: '3',
      title: 'Mobile Weather App',
      description: 'A cross-platform mobile weather application with location services, weather forecasts, and interactive maps.',
      shortDescription: 'Cross-platform weather app with advanced features',
      technologies: ['React Native', 'TypeScript', 'Weather API', 'Google Maps'],
      imageUrl: 'assets/images/projects/weather.jpg',
      githubUrl: 'https://github.com/johndeveloper/weather-app',
      startDate: new Date('2023-11-01'),
      status: 'in-progress',
      featured: false,
      category: 'mobile'
    }
  ];

  private mockCategories: ProjectCategory[] = [
    { id: 'web', name: 'Web Applications', description: 'Full-stack web applications', icon: 'web' },
    { id: 'mobile', name: 'Mobile Apps', description: 'Cross-platform mobile applications', icon: 'phone_android' },
    { id: 'api', name: 'APIs & Backend', description: 'Backend services and APIs', icon: 'api' },
    { id: 'tools', name: 'Tools & Utilities', description: 'Development tools and utilities', icon: 'build' }
  ];

  getProjects(): Observable<Project[]> {
    return of(this.mockProjects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    const featured = this.mockProjects.filter(project => project.featured);
    return of(featured);
  }

  getProjectsByCategory(categoryId: string): Observable<Project[]> {
    const filtered = this.mockProjects.filter(project => project.category === categoryId);
    return of(filtered);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    const project = this.mockProjects.find(p => p.id === id);
    return of(project);
  }

  getCategories(): Observable<ProjectCategory[]> {
    return of(this.mockCategories);
  }
}