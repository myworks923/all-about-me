export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  startDate: Date;
  endDate?: Date;
  status: 'completed' | 'in-progress' | 'planned';
  category: string;
  highlights: string[];
}