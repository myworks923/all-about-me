export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  profileImage?: string;
  bio?: string;
  title: string;
  location: string;
  phone?: string;
  website?: string;
  skills: string[];
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}