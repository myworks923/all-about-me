import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { DataService } from '../../services/data.service';
import { Certification } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-certifications',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss'
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCertifications().subscribe(certifications => {
      this.certifications = certifications.sort((a, b) => 
        new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
      );
    });
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  }

  isExpired(cert: Certification): boolean {
    return cert.expiryDate ? new Date(cert.expiryDate) < new Date() : false;
  }

  openCredential(url?: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
