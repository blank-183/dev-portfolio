import { Project } from '../models/project.model';

export const PROJECTS: readonly Project[] = [
  {
    id: 'ai-chatbot-api',
    title: 'AI Chatbot API',
    description:
      'Developed a proof-of-concept chatbot API that provides domain-grounded responses and evaluates AI-assisted access to specialized knowledge.',
    shortDescription:
      'Built a proof-of-concept API to explore AI-assisted access to specialized knowledge.',
    technologies: ['Python', 'REST API', 'RAG', 'LLM'],
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
    technologies: ['Python', 'AWS', 'Event-Driven', 'Serverless'],
    associatedWith: 'Confidential Professional Work',
    confidential: true,
    featured: true,
    displayOrder: 2,
  },
  {
    id: 'enterprise-financial-procurement-integration',
    title: 'Enterprise Financial & Procurement Integration',
    shortTitle: 'Enterprise Financial & Procurement Integration',
    description:
      'Integration of two enterprise systems to automate the exchange of procurement and financial transaction data, reducing the need for manual transaction creation.',
    shortDescription:
      'Integration of two enterprise systems to automate the exchange of procurement and financial transaction data.',
    contributions:
      'Developed APIs for receiving and updating financial transactions and integrated an external API for status synchronization. Implemented service health checks before API calls.',
    technologies: ['ASP.NET Core', 'Dapper', 'REST API', 'SQL Server'],
    associatedWith: 'Confidential Professional Work',
    confidential: true,
    featured: false,
    displayOrder: 3,
  },
  {
    id: 'automated-financial-reconciliation-system',
    title: 'Automated Financial Reconciliation System',
    shortTitle: 'Automated Financial Reconciliation System',
    description:
      'An automated reconciliation system that compares collection records from multiple internal data sources against external financial reports and provides consolidated reconciliation results.',
    shortDescription:
      'An automated reconciliation system that compares collection records from multiple internal data sources against external financial reports.',
    contributions:
      'Took ownership of the application during testing and reworked major parts of its reconciliation logic. Implemented backend and UI changes and maintained scheduled data-processing tasks.',
    technologies: ['ASP.NET MVC', 'Entity Framework', 'HangFire', 'Windows Task Scheduler', 'GCP Gmail API', 'SQL Server', 'Vue.js', 'Bootstrap'],
    associatedWith: 'Confidential Professional Work',
    confidential: true,
    featured: false,
    displayOrder: 4,
  },
  {
    id: 'administrative-workflow-automation',
    title: 'Administrative Workflow Automation System',
    shortTitle: 'Administrative Workflow Automation System',
    description:
      'A web application that automates administrative processes previously performed through manual special instructions.',
    shortDescription:
      'A web application that automates administrative processes previously performed through manual special instructions.',
    contributions:
      'Developed backend functionality for adding and removing records through both single and bulk operations, including Excel file processing and validation.',
    technologies: ['ASP.NET Core', 'Dapper', 'REST API', 'SQL Server'],
    associatedWith: 'Confidential Professional Work',
    confidential: true,
    featured: false,
    displayOrder: 5,
  },
  {
    id: 'centralized-user-access-management',
    title: 'Centralized User Access Management System',
    shortTitle: 'Centralized User Access Management System',
    description:
      'A centralized web application for managing user access, roles, permissions, and system activities across multiple enterprise applications',
    shortDescription:
      'A centralized web application for managing user access, roles, permissions, and system activities across multiple enterprise applications.',
    contributions:
      'Worked full-stack on login integration, dashboard, and system maintenance modules. Integrated Angular components with backend APIs and implemented role and access-management features.',
    technologies: ['ASP.NET Core', 'Dapper', 'REST API', 'SQL Server', 'Angular', 'Bootstrap'],
    associatedWith: 'Confidential Professional Work',
    confidential: true,
    featured: false,
    displayOrder: 6,
  },
  {
    id: 'enterprise-transaction',
    title: 'Enterprise Transaction & Document Services',
    shortTitle: 'Enterprise Transaction & Document Services',
    description:
      'A system that streamlines the process of requesting title information from different Registries of Deeds for partner institutions.',
    shortDescription:
      'A system that streamlines the process of requesting title information from different Registries of Deeds for partner institutions.',
    contributions:
      'Developed APIs for retrieving transactions and master data, saving transaction records, and generating title-related reports.',
    technologies: ['ASP.NET Core', 'Dapper', 'REST API', 'SQL Server'],
    associatedWith: 'Confidential Professional Work',
    confidential: true,
    featured: false,
    displayOrder: 7,
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
    displayOrder: 8,
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
    displayOrder: 9,
  },
  {
    id: 'answer-sheet-checker',
    title: 'Answer Sheet Checker',
    description:
      "A Python computer vision application that reads marked answer sheets, identifies the student's name, and automatically calculates the number of correct answers.",
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing'],
    associatedWith: 'Bicol University',
    featured: false,
    displayOrder: 10,
  },
  {
    id: 'coin-counter',
    title: 'Coin Counter',
    description:
      'A Python and OpenCV application that detects coins in an image, counts each denomination, and calculates their total monetary value.',
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Object Detection'],
    associatedWith: 'Bicol University',
    featured: false,
    displayOrder: 11,
  },
  {
    id: 'inventory-management-system',
    title: 'Inventory Management System',
    description:
      'A Java application for monitoring stock, maintaining product records, and recording inventory and sales transactions.',
    technologies: ['Java', 'Inventory Management', 'CRUD'],
    associatedWith: 'Bicol University',
    featured: false,
    displayOrder: 12,
  },
];
