export interface User {
  id: number;
  name: string;
  email: string;
  college: string;
  university: string;
  marks: number;
  skills: string[];
  location: string;
  stipendPreference: string;
}

export interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  stipend: string;
  duration: string;
  domain: string;
  type: 'government' | 'private';
  description?: string;
}

export interface Notification {
  id: number;
  userId: number;
  message: string;
  createdAt: string;
  read: boolean;
}