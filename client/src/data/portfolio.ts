import { Project, Skill, Experience, Education, ContactInfo } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Chess Game Analyzer",
    description: "An AI-powered chess analysis tool that evaluates games, suggests improvements, and identifies patterns in player strategies.",
    longDescription: "Advanced machine learning model that analyzes chess games using computer vision and strategic pattern recognition.",
    image: "https://images.unsplash.com/photo-1518933165971-611dbc9c412d?auto=format&fit=crop&q=80&w=600&h=400",
    technologies: ["Python", "TensorFlow", "Computer Vision"],
    demoLink: "https://chess-analyzer.demo.com",
    githubLink: "https://github.com/YassineEr/chess-analyzer"
  },
  {
    id: 2,
    title: "Fraud Detection System",
    description: "A machine learning-based fraud detection system for financial transactions with real-time monitoring capabilities.",
    longDescription: "Advanced anomaly detection algorithms that identify suspicious patterns in financial data with 97% accuracy.",
    image: "https://images.unsplash.com/photo-1614377284368-a6bf7e10a0f3?auto=format&fit=crop&q=80&w=600&h=400",
    technologies: ["Python", "Scikit-learn", "Data Mining"],
    demoLink: "https://fraud-detection.demo.com",
    githubLink: "https://github.com/YassineEr/fraud-detection"
  },
  {
    id: 3,
    title: "Medical Image Analysis",
    description: "Deep learning model for automatic diagnosis of diseases from medical imaging, including X-rays and MRIs.",
    longDescription: "Convolutional neural networks that assist healthcare professionals in disease diagnosis with 92% diagnostic accuracy.",
    image: "https://images.unsplash.com/photo-1584291527963-7c1852dced2d?auto=format&fit=crop&q=80&w=600&h=400",
    technologies: ["Python", "PyTorch", "CNN"],
    demoLink: "https://medical-image-analysis.demo.com",
    githubLink: "https://github.com/YassineEr/medical-image-analysis"
  }
];

export const skills: Skill[] = [
  { name: "Data Science & ML", level: 95 },
  { name: "Python", level: 90 },
  { name: "Data Visualization", level: 85 },
  { name: "Deep Learning", level: 80 },
  { name: "SQL & Databases", level: 75 }
];

export const technologies: string[] = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "SQL",
  "Pandas",
  "Git",
  "AWS",
  "Scikit-learn"
];

export const experiences: Experience[] = [
  {
    title: "Data Science Intern",
    company: "TechInnovate Solutions",
    period: "2022 - Present",
    description: "Developing machine learning models for fraud detection and customer segmentation. Collaborating with cross-functional teams to implement data-driven solutions."
  },
  {
    title: "Research Assistant",
    company: "University Research Lab",
    period: "2020 - 2022",
    description: "Assisted in research projects involving natural language processing and computer vision. Published two papers in academic journals."
  }
];

export const education: Education[] = [
  {
    degree: "BSc in Data Science",
    institution: "University of Technology",
    period: "2020 - 2023",
    description: "Specialized in machine learning and statistical analysis. Graduated with honors and completed a capstone project on predictive analytics."
  },
  {
    degree: "Data Science Certification",
    institution: "Data Academy",
    period: "2019 - 2020",
    description: "Intensive program covering Python programming, statistical analysis, and machine learning algorithms."
  }
];

export const contactInfo: ContactInfo = {
  email: "yassine.erradouani@example.com",
  location: "Casablanca, Morocco",
  social: {
    github: "https://github.com/YassineEr",
    linkedin: "https://linkedin.com/in/yassine-erradouani",
    twitter: "https://twitter.com/YassineErradouani",
    kaggle: "https://kaggle.com/yassineerradouani"
  },
  calendly: "https://calendly.com/yassine-erradouani"
};
