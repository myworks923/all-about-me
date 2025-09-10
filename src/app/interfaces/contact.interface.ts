export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: Date;
  status?: 'pending' | 'read' | 'replied';
}