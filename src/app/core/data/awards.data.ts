import { Award } from '../models/award.model';

export const AWARDS: readonly Award[] = [
  {
    id: 'creative-solver',
    title: 'Creative Solver',
    description: 'Recognized for creative problem-solving and contributions to delivery.',
    organization: 'Land Registration Systems, Inc.',
    issuedDate: 'December 2024',
    icon: 'bi-lightbulb',
    displayOrder: 1,
  },
  {
    id: 'top-developer-trainee',
    title: 'Top 1 Developer Trainee',
    description: 'Top performer among 11 trainees in the .NET development bootcamp.',
    organization: 'Land Registration Systems, Inc.',
    issuedDate: 'September 2023',
    icon: 'bi-award',
    displayOrder: 2,
  },
  {
    id: 'cum-laude',
    title: 'Cum Laude',
    description: 'Graduated with Academic Honors from the BS Computer Science program.',
    organization: 'Bicol University',
    issuedDate: 'July 2022',
    icon: 'bi-mortarboard',
    displayOrder: 3,
  },
];
