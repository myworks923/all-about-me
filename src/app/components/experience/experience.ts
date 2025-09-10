import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { DataService } from '../../services/data.service';
import { Experience } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-experience',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getExperience().subscribe(experiences => {
      this.experiences = experiences.sort((a, b) => 
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      );
    });
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  }

  getDuration(startDate: Date, endDate?: Date): string {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                   (end.getMonth() - start.getMonth());
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    } else if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`;
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    }
  }
}
