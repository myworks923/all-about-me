import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class ProfileComponent implements OnInit {
  currentUser: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  openSocialLink(url: string): void {
    window.open(url, '_blank');
  }

  downloadResume(): void {
    // Mock resume download
    const link = document.createElement('a');
    link.href = 'assets/documents/resume.pdf';
    link.download = 'John_Developer_Resume.pdf';
    link.click();
  }

  editProfile(): void {
    // Mock edit functionality
    console.log('Edit profile functionality would be implemented here');
  }
}
