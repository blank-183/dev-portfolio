import { Experience } from '../models/experience.model';

export const EXPERIENCE: readonly Experience[] = [
  {
    id: 'developer-ii',
    position: 'Developer II',
    company: 'Land Registration Systems, Inc.',
    startDate: 'April 2026',
    current: true,
    location: 'Philippines',
    summary:
      'Developing and maintaining enterprise web applications and backend services, delivering scalable enhancements, cloud-assisted workflows, reliable database changes, and production fixes with cross-functional teams.',
    responsibilities: [
      'Develop and maintain enterprise web applications and backend services, delivering scalable solutions and supporting continuous application enhancements.',
      'Developed a proof-of-concept chatbot API using domain-specific references to evaluate AI-assisted knowledge integration.',
      'Implemented an AWS-based event-driven workflow to automate backend processing tasks and improve operational reliability.',
      'Review and validate database changes for compliance with technical standards and deployment practices, including rollback procedures.',
      'Collaborate with Business Analysts and cross-functional teams to clarify requirements, identify edge cases, and deliver features and production fixes.',
    ],
    technologies: ['C#', 'ASP.NET Core', 'AWS', 'SQL Server', 'Angular', 'Python'],
    displayOrder: 1,
  },
  {
    id: 'developer-i',
    position: 'Developer I',
    company: 'Land Registration Systems, Inc.',
    startDate: 'September 2023',
    endDate: 'March 2026',
    current: false,
    location: 'Philippines',
    summary:
      'Modernized legacy applications and delivered reusable frontend and backend services for internal enterprise systems.',
    responsibilities: [
      'Modernized legacy applications with scalable, microservices-based ASP.NET Core RESTful APIs and reusable Angular components.',
      'Developed backend services that integrated internal systems and databases, improving data exchange and process efficiency.',
      'Contributed to an internal web application that automated previously manual administrative tasks.',
      'Collaborated with QA Analysts, Business Analysts, and Project Managers to deliver stable releases and reduce post-release issues.',
    ],
    technologies: ['C#', 'ASP.NET Core', 'REST APIs', 'Angular', 'SQL Server'],
    displayOrder: 2,
  },
  {
    id: 'software-developer-trainee',
    position: 'Developer Trainee',
    company: 'Land Registration Systems, Inc.',
    startDate: 'March 2023',
    endDate: 'September 2023',
    current: false,
    location: 'Philippines',
    summary:
      'Completed an intensive .NET development training program focused on enterprise application fundamentals.',
    responsibilities: [
      'Completed hands-on training in C#, ASP.NET Core MVC, and Microsoft SQL Server.',
      'Applied application development concepts through practical exercises and team-based delivery.',
    ],
    technologies: ['C#', 'ASP.NET Core MVC', 'SQL Server'],
    displayOrder: 3,
  },
  {
    id: 'backend-developer-intern',
    position: 'Backend Developer Intern',
    company: 'Bicol University ICT Office',
    startDate: 'June 2021',
    endDate: 'July 2021',
    current: false,
    location: 'Philippines',
    summary:
      'Supported the backend development of a web application during an internship with the university ICT office.',
    responsibilities: [
      'Assisted teammates in setting up the development environment.',
      'Designed and built a database to store the provided employer data.',
      'Developed backend functionality that enabled the web application to access and retrieve data from the database.',
    ],
    technologies: ['OpenPyXL', 'Pandas', 'Python'],
    displayOrder: 4,
  },
];
