import { Injectable } from '@angular/core';
import { AWARDS } from '../data/awards.data';
import { CERTIFICATIONS } from '../data/certifications.data';
import { EDUCATION } from '../data/education.data';
import { EXPERIENCE } from '../data/experience.data';
import { PROFILE } from '../data/profile.data';
import { PROJECTS } from '../data/projects.data';
import { SOCIAL_LINKS } from '../data/social-links.data';
import { TECH_STACK } from '../data/tech-stack.data';
import { TRAINING } from '../data/training.data';
import { TrainingStatus } from '../models/training.model';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly profile = PROFILE;
  readonly projects = [...PROJECTS].sort((a, b) => a.displayOrder - b.displayOrder);
  readonly featuredProjects = this.projects.filter((project) => project.featured).slice(0, 2);
  readonly experience = [...EXPERIENCE].sort((a, b) => a.displayOrder - b.displayOrder);
  readonly certifications = [...CERTIFICATIONS].sort((a, b) => a.displayOrder - b.displayOrder);
  readonly training = [...TRAINING].sort((a, b) => a.displayOrder - b.displayOrder);
  readonly education = [...EDUCATION].sort((a, b) => a.displayOrder - b.displayOrder);
  readonly awards = [...AWARDS].sort((a, b) => a.displayOrder - b.displayOrder);
  readonly techStack = TECH_STACK;
  readonly socialLinks = SOCIAL_LINKS;

  trainingByStatus(status: TrainingStatus) {
    return this.training.filter((item) => item.status === status);
  }
}
