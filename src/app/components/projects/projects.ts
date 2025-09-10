import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  searchQuery = '';
  selectedCategory = 'All';
  categories = ['All', 'Web Development', 'Data Visualization', 'Mobile App'];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
  }

  onSearch(): void {
    this.filterProjects();
  }

  onCategoryChange(): void {
    this.filterProjects();
  }

  private filterProjects(): void {
    let filtered = this.projects;

    // Filter by category
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === this.selectedCategory);
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }

    this.filteredProjects = filtered;
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'completed': return 'check_circle';
      case 'in-progress': return 'pending';
      case 'planned': return 'schedule';
      default: return 'help';
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'completed': return 'primary';
      case 'in-progress': return 'accent';
      case 'planned': return 'warn';
      default: return '';
    }
  }

  openLink(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
