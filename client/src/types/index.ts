export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  kaggle: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  social: SocialLinks;
  calendly: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
