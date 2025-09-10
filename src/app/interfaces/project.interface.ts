export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  startDate: Date;
  endDate?: Date;
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  category: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}