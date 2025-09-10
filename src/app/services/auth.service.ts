import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User, LoginCredentials, AuthResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Mock user for demo purposes
  private mockUser: User = {
    id: '1',
    email: 'demo@portfolio.com',
    firstName: 'John',
    lastName: 'Doe',
    profilePhoto: 'assets/images/profile.jpg',
    bio: 'Full-stack developer with 5+ years of experience in Angular, React, and Node.js. Passionate about creating scalable web applications and learning new technologies.',
    skills: ['Angular', 'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'],
    socialMedia: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      website: 'https://johndoe.dev'
    },
    contactInfo: {
      phone: '+1 (555) 123-4567',
      email: 'demo@portfolio.com',
      location: 'San Francisco, CA'
    }
  };

  constructor() {
    // Check if user is already logged in
    const token = localStorage.getItem('authToken');
    if (token) {
      this.currentUserSubject.next(this.mockUser);
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(credentials: LoginCredentials): Observable<AuthResponse> {
    // Mock authentication - in real app, this would call an API
    if (credentials.email === 'demo@portfolio.com' && credentials.password === 'demo123') {
      const token = 'mock-jwt-token-' + Date.now();
      const authResponse: AuthResponse = {
        token,
        user: this.mockUser
      };

      localStorage.setItem('authToken', token);
      this.currentUserSubject.next(this.mockUser);
      this.isAuthenticatedSubject.next(true);

      return of(authResponse).pipe(delay(1000)); // Simulate network delay
    } else {
      return throwError(() => new Error('Invalid email or password'));
    }
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}