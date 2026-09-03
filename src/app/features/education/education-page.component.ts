import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationPageComponent {
  readonly education = inject(PortfolioDataService).education;
}
