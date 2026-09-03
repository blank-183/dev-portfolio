import { TechStackGroup } from '../models/tech-stack.model';

export const TECH_STACK: readonly TechStackGroup[] = [
  { category: 'Languages', technologies: ['C#', 'Python', 'Typescript'] },
  { category: 'Frontend', technologies: ['Angular', 'Bootstrap'] },
  {
    category: 'Backend',
    technologies: [
      '.NET',
      'ASP.NET Core',
      'LINQ',
      'Dapper',
      'EF Core'
    ],
  },
  { category: 'Cloud & AI', technologies: ['AWS', 'Event-Driven Workflows', 'RAG', 'LLM'] },
  {
    category: 'Database',
    technologies: ['SQL Server', 'Sybase', 'T-SQL'],
  },
  { category: 'Tools', technologies: ['Postman', 'IIS', 'Git', 'GitLab/GitHub'] },
];
