import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/portfolio-shell/portfolio-shell.component').then(
        (component) => component.PortfolioShellComponent,
      ),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'about' },
      {
        path: 'about',
        title: 'About | Ivee Jintalan',
        loadComponent: () =>
          import('./features/about/about-page.component').then(
            (component) => component.AboutPageComponent,
          ),
      },
      {
        path: 'experience',
        title: 'Experience | Ivee Jintalan',
        loadComponent: () =>
          import('./features/experience/experience-page.component').then(
            (component) => component.ExperiencePageComponent,
          ),
      },
      {
        path: 'certifications',
        title: 'Certifications | Ivee Jintalan',
        loadComponent: () =>
          import('./features/certifications/certifications-page.component').then(
            (component) => component.CertificationsPageComponent,
          ),
      },
      {
        path: 'projects',
        title: 'Projects | Ivee Jintalan',
        loadComponent: () =>
          import('./features/projects/projects-page.component').then(
            (component) => component.ProjectsPageComponent,
          ),
      },
      {
        path: 'training',
        title: 'Training | Ivee Jintalan',
        loadComponent: () =>
          import('./features/training/training-page.component').then(
            (component) => component.TrainingPageComponent,
          ),
      },
      { path: 'courses', pathMatch: 'full', redirectTo: 'training' },
      {
        path: 'education',
        title: 'Education | Ivee Jintalan',
        loadComponent: () =>
          import('./features/education/education-page.component').then(
            (component) => component.EducationPageComponent,
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'about' },
];
