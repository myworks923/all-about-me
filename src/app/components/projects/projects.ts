import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { ProjectsService } from '../../services/projects.service';
import { Project, ProjectCategory } from '../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTabsModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  categories: ProjectCategory[] = [];
  filteredProjects: Project[] = [];
  selectedCategory: string = 'all';

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.loadProjects();
    this.loadCategories();
  }

  private loadProjects(): void {
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
  }

  private loadCategories(): void {
    this.projectsService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  filterByCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
    
    if (categoryId === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === categoryId);
    }
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'completed': '#4caf50',
      'in-progress': '#ff9800',
      'planned': '#9e9e9e'
    };
    return colors[status] || '#9e9e9e';
  }

  getStatusIcon(status: string): string {
    const icons: { [key: string]: string } = {
      'completed': 'check_circle',
      'in-progress': 'schedule',
      'planned': 'radio_button_unchecked'
    };
    return icons[status] || 'radio_button_unchecked';
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  }

  openProject(url?: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  openGithub(url?: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
