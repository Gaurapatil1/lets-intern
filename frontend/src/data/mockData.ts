import { Internship, Notification } from '../types';

export const mockInternships: Internship[] = [
  {
    id: 1,
    title: 'AI Research Intern',
    company: 'AICTE',
    location: 'Delhi',
    stipend: '₹10,000',
    duration: '2 Months',
    domain: 'AI/ML',
    type: 'government',
    description: 'Work on cutting-edge AI research projects under AICTE supervision.'
  },
  {
    id: 2,
    title: 'Web Development Intern',
    company: 'PrivateTech Solutions',
    location: 'Pune',
    stipend: '₹8,000',
    duration: '3 Months',
    domain: 'Web Development',
    type: 'private',
    description: 'Build modern web applications using React, Node.js and MongoDB.'
  },
  {
    id: 3,
    title: 'Data Science Intern',
    company: 'AICTE',
    location: 'Mumbai',
    stipend: '₹12,000',
    duration: '2 Months',
    domain: 'Data Science',
    type: 'government',
    description: 'Analyze large datasets and build predictive models for government initiatives.'
  },
  {
    id: 4,
    title: 'Cybersecurity Intern',
    company: 'SecureNet Industries',
    location: 'Bangalore',
    stipend: '₹7,500',
    duration: '1 Month',
    domain: 'Cybersecurity',
    type: 'private',
    description: 'Learn about network security, ethical hacking, and security auditing.'
  },
  {
    id: 5,
    title: 'Machine Learning Intern',
    company: 'AICTE',
    location: 'Hyderabad',
    stipend: '₹11,000',
    duration: '3 Months',
    domain: 'AI/ML',
    type: 'government',
    description: 'Implement ML algorithms for smart city initiatives under government guidance.'
  },
  {
    id: 6,
    title: 'Mobile App Development Intern',
    company: 'InnovateTech',
    location: 'Chennai',
    stipend: '₹9,500',
    duration: '4 Months',
    domain: 'Mobile Development',
    type: 'private',
    description: 'Develop cross-platform mobile applications using React Native and Flutter.'
  },
  {
    id: 7,
    title: 'IoT Research Intern',
    company: 'AICTE',
    location: 'Delhi',
    stipend: '₹10,500',
    duration: '2 Months',
    domain: 'IoT',
    type: 'government',
    description: 'Research and develop IoT solutions for smart infrastructure projects.'
  },
  {
    id: 8,
    title: 'Digital Marketing Intern',
    company: 'Creative Agency',
    location: 'Mumbai',
    stipend: '₹6,000',
    duration: '3 Months',
    domain: 'Marketing',
    type: 'private',
    description: 'Create digital marketing campaigns and analyze social media performance.'
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 1,
    userId: 1,
    message: '🎉 New AI/ML internship matching your skills posted by AICTE!',
    createdAt: '2 hours ago',
    read: false
  },
  {
    id: 2,
    userId: 1,
    message: '📝 Your application for Web Development Intern has been received.',
    createdAt: '1 day ago',
    read: false
  },
  {
    id: 3,
    userId: 1,
    message: '🔔 Reminder: Data Science Intern application deadline in 3 days.',
    createdAt: '2 days ago',
    read: true
  },
  {
    id: 4,
    userId: 1,
    message: '✨ Resume analysis complete! Check your new recommendations.',
    createdAt: '3 days ago',
    read: true
  }
];