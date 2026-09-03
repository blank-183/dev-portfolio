import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopHeaderComponent {
  private readonly data = inject(PortfolioDataService);

  readonly menuToggle = output<void>();
  readonly explorerOpen = input.required<boolean>();
  readonly profile = this.data.profile;
  readonly socialLinks = this.data.socialLinks.filter((link) => link.platform !== 'email');
  readonly menuLabels = ['File', 'Edit', 'View', 'Navigate', 'Tools', 'Help'];
}
