import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-about-page',
  imports: [RouterLink, ProjectCardComponent],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {
  private readonly data = inject(PortfolioDataService);

  readonly profile = this.data.profile;
  readonly currentExperience = this.data.experience[0];
  readonly certifications = this.data.certifications
    .filter((item) => item.type !== 'Professional Eligibility')
    .slice(0, 4);
  readonly heroCertificationBadges = this.data.certifications.filter((item) => item.badgeImageUrl);
  readonly completedTraining = this.data.trainingByStatus('completed');
  readonly featuredProjects = this.data.featuredProjects;
  readonly highestEducation = this.data.education[0];
}
