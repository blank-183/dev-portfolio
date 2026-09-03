import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-training-page',
  templateUrl: './training-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingPageComponent {
  private readonly data = inject(PortfolioDataService);

  readonly completedTraining = this.data.trainingByStatus('completed');
  readonly providerCount = new Set(this.completedTraining.map((item) => item.provider)).size;
}
