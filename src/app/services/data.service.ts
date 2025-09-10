import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience, Certification } from '../interfaces/experience.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mockExperience: Experience[] = [
    {
      id: '1',
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      startDate: new Date('2022-03-01'),
      current: true,
      description: 'Lead development of scalable web applications using Angular and Node.js. Mentor junior developers and collaborate with cross-functional teams.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on major product redesign',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['Angular', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      companyLogo: 'assets/images/companies/techcorp.jpg',
      companyWebsite: 'https://techcorp.com'
    },
    {
      id: '2',
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      location: 'San Jose, CA',
      startDate: new Date('2020-06-15'),
      endDate: new Date('2022-02-28'),
      current: false,
      description: 'Developed and maintained multiple client projects using React and Python. Worked in agile environment with rapid iteration cycles.',
      achievements: [
        'Built 3 major client applications from scratch',
        'Reduced bug reports by 50% through improved testing',
        'Mentored 2 junior developers'
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'Redux', 'Jest'],
      companyLogo: 'assets/images/companies/startupxyz.jpg',
      companyWebsite: 'https://startupxyz.com'
    }
  ];

  private mockCertifications: Certification[] = [
    {
      id: '1',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: new Date('2023-05-15'),
      expiryDate: new Date('2026-05-15'),
      credentialId: 'AWS-SA-2023-001',
      credentialUrl: 'https://aws.amazon.com/verification',
      imageUrl: 'assets/images/certs/aws-sa.png',
      description: 'Validates expertise in designing distributed systems on AWS',
      skills: ['AWS', 'Cloud Architecture', 'System Design', 'Security']
    },
    {
      id: '2',
      title: 'Google Professional Cloud Developer',
      issuer: 'Google Cloud',
      issueDate: new Date('2023-02-20'),
      expiryDate: new Date('2025-02-20'),
      credentialId: 'GCP-CD-2023-002',
      credentialUrl: 'https://cloud.google.com/certification',
      imageUrl: 'assets/images/certs/gcp-dev.png',
      description: 'Demonstrates skills in developing scalable applications on Google Cloud',
      skills: ['Google Cloud', 'Kubernetes', 'Container Orchestration']
    },
    {
      id: '3',
      title: 'Angular Certified Developer',
      issuer: 'Angular',
      issueDate: new Date('2022-11-10'),
      credentialId: 'ANG-DEV-2022-003',
      credentialUrl: 'https://angular.io/certification',
      imageUrl: 'assets/images/certs/angular.png',
      description: 'Certification in advanced Angular development practices',
      skills: ['Angular', 'TypeScript', 'RxJS', 'Testing']
    }
  ];

  getExperience(): Observable<Experience[]> {
    return of(this.mockExperience);
  }

  getCertifications(): Observable<Certification[]> {
    return of(this.mockCertifications);
  }

  getCurrentExperience(): Observable<Experience[]> {
    const current = this.mockExperience.filter(exp => exp.current);
    return of(current);
  }

  getActiveCertifications(): Observable<Certification[]> {
    const now = new Date();
    const active = this.mockCertifications.filter(cert => 
      !cert.expiryDate || cert.expiryDate > now
    );
    return of(active);
  }
}