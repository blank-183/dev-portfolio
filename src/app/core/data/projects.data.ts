import { Project } from '../models/project.model';

export const PROJECTS: readonly Project[] = [
  {
    id: 'ai-chatbot-api',
    title: 'AI Chatbot API',
    description:
      'Developed a proof-of-concept chatbot API that provides domain-grounded responses and evaluates AI-assisted access to specialized knowledge.',
    shortDescription:
      'Built a proof-of-concept API to explore AI-assisted access to specialized knowledge.',
    technologies: ['REST API', 'RAG', 'LLM'],
    associatedWith: 'Confidential Professional Work',
    confidential: true,
    featured: true,
    displayOrder: 1,
  },
  {
    id: 'event-driven-indexing-workflow',
    title: 'Event-Driven Indexing Workflow',
    shortTitle: 'Event-Driven Indexing Workflow',
    description:
      'Implemented an event-driven workflow that detects newly added content and automatically refreshes a search index, improving processing reliability and reducing manual intervention.',
    shortDescription:
      'Built an event-driven backend workflow that automates data-processing updates and improves operational reliability.',
    technologies: ['AWS', 'Event-Driven', 'Serverless', 'Automation'],
    associatedWith: 'Confidential Professional Work',
    confidential: true,
    featured: true,
    displayOrder: 2,
  },
  {
    id: 'medical-prescription-recognition',
    title:
      'Handwritten Text Recognition of Medical Prescription Using Convolutional Recurrent Neural Network',
    shortTitle: 'Handwritten Medical Prescription Recognition',
    description:
      'An ML-based WebView application that extracts handwritten text from medical prescriptions and converts it into readable digital text.',
    technologies: ['TensorFlow', 'Keras', 'Machine Learning', 'WebView'],
    dateRange: 'August 2021 - April 2022',
    associatedWith: 'Bicol University',
    featured: false,
    displayOrder: 3,
  },
  {
    id: 'buceils-online-voting-system',
    title: 'BUCEILS HS Online Voting System',
    description:
      'A web application developed to temporarily replace the traditional paper-based election process of the BUCEILS HS Supreme Student Government.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    dateRange: 'August 2020 - May 2021',
    associatedWith: 'Bicol University',
    featured: false,
    displayOrder: 4,
  },
  {
    id: 'answer-sheet-checker',
    title: 'Answer Sheet Checker',
    description:
      "A Python computer vision application that reads marked answer sheets, identifies the student's name, and automatically calculates the number of correct answers.",
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing'],
    associatedWith: 'Bicol University',
    featured: false,
    displayOrder: 5,
  },
  {
    id: 'coin-counter',
    title: 'Coin Counter',
    description:
      'A Python and OpenCV application that detects coins in an image, counts each denomination, and calculates their total monetary value.',
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Object Detection'],
    associatedWith: 'Bicol University',
    featured: false,
    displayOrder: 6,
  },
  {
    id: 'inventory-management-system',
    title: 'Inventory Management System',
    description:
      'A Java application for monitoring stock, maintaining product records, and recording inventory and sales transactions.',
    technologies: ['Java', 'Inventory Management', 'CRUD'],
    associatedWith: 'Bicol University',
    featured: false,
    displayOrder: 7,
  },
];
