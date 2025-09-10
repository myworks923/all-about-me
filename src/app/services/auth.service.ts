import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { LoginCredentials, User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Mock user data
  private mockUser: User = {
    id: '1',
    email: 'john.developer@portfolio.com',
    firstName: 'John',
    lastName: 'Developer',
    fullName: 'John Developer',
    profileImage: 'assets/images/profile.jpg',
    bio: 'Full-stack developer passionate about creating innovative web applications with modern technologies.',
    title: 'Senior Full Stack Developer',
    location: 'San Francisco, CA',
    phone: '+1 (555) 123-4567',
    website: 'https://johndeveloper.dev',
    skills: ['Angular', 'React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'MongoDB'],
    socialLinks: [
      { platform: 'GitHub', url: 'https://github.com/johndeveloper', icon: 'fab fa-github' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/johndeveloper', icon: 'fab fa-linkedin' },
      { platform: 'Twitter', url: 'https://twitter.com/johndeveloper', icon: 'fab fa-twitter' }
    ]
  };

  constructor() {
    // Check if user is already logged in (from localStorage)
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(credentials: LoginCredentials): Observable<User> {
    // Mock authentication - in real app, this would call an API
    if (credentials.email === 'admin@portfolio.com' && credentials.password === 'password') {
      return of(this.mockUser).pipe(
        delay(1000), // Simulate API delay
        tap(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.isAuthenticatedSubject.next(true);
        })
      );
    }
    
    return throwError(() => new Error('Invalid credentials')).pipe(delay(1000));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}