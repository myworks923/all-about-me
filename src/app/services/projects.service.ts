import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  private mockProjects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Angular and Node.js',
      longDescription: 'A comprehensive e-commerce platform built with Angular frontend and Node.js backend. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
      image: 'assets/images/projects/ecommerce.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubUrl: 'https://github.com/johndoe/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.johndoe.dev',
      startDate: new Date('2023-01-15'),
      endDate: new Date('2023-06-30'),
      status: 'completed',
      category: 'Web Development',
      highlights: [
        'Implemented secure payment processing',
        'Built responsive design for mobile and desktop',
        'Integrated real-time inventory management'
      ]
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      longDescription: 'A productivity app for teams to manage tasks, projects, and deadlines. Features real-time collaboration, file sharing, and progress tracking.',
      image: 'assets/images/projects/taskmanager.jpg',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      githubUrl: 'https://github.com/johndoe/task-manager',
      liveUrl: 'https://taskmanager.johndoe.dev',
      startDate: new Date('2023-07-01'),
      endDate: new Date('2023-09-15'),
      status: 'completed',
      category: 'Web Development',
      highlights: [
        'Real-time collaboration features',
        'Drag-and-drop task organization',
        'Advanced filtering and search'
      ]
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with data visualization',
      longDescription: 'A comprehensive weather dashboard that provides current conditions, forecasts, and historical data with interactive charts and maps.',
      image: 'assets/images/projects/weather.jpg',
      technologies: ['Vue.js', 'D3.js', 'OpenWeather API', 'Chart.js'],
      githubUrl: 'https://github.com/johndoe/weather-dashboard',
      liveUrl: 'https://weather.johndoe.dev',
      startDate: new Date('2023-10-01'),
      status: 'in-progress',
      category: 'Data Visualization',
      highlights: [
        'Interactive weather maps',
        'Historical data analysis',
        'Mobile-responsive design'
      ]
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with Angular and Material Design',
      longDescription: 'This very portfolio website showcasing projects, skills, and experience with a modern, responsive design.',
      image: 'assets/images/projects/portfolio.jpg',
      technologies: ['Angular', 'Material Design', 'TypeScript', 'SCSS'],
      githubUrl: 'https://github.com/johndoe/portfolio',
      liveUrl: 'https://johndoe.dev',
      startDate: new Date('2023-11-01'),
      status: 'in-progress',
      category: 'Web Development',
      highlights: [
        'Modern Material Design interface',
        'Fully responsive layout',
        'Clean, professional design'
      ]
    }
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.mockProjects);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    const project = this.mockProjects.find(p => p.id === id);
    return of(project);
  }

  getProjectsByCategory(category: string): Observable<Project[]> {
    const projects = this.mockProjects.filter(p => p.category === category);
    return of(projects);
  }

  getProjectsByTechnology(technology: string): Observable<Project[]> {
    const projects = this.mockProjects.filter(p => 
      p.technologies.some(t => t.toLowerCase().includes(technology.toLowerCase()))
    );
    return of(projects);
  }

  searchProjects(query: string): Observable<Project[]> {
    const lowerQuery = query.toLowerCase();
    const projects = this.mockProjects.filter(p => 
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.technologies.some(t => t.toLowerCase().includes(lowerQuery))
    );
    return of(projects);
  }
}