export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePhoto?: string;
  bio: string;
  skills: string[];
  socialMedia: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  contactInfo: {
    phone?: string;
    email: string;
    location: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}