import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { PORTFOLIO_NAV_ITEMS } from '../../shared/constants/navigation.constants';

@Component({
  selector: 'app-explorer-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './explorer-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExplorerSidebarComponent {
  private readonly data = inject(PortfolioDataService);

  readonly navigationSelected = output<void>();
  readonly dismiss = output<void>();
  readonly navItems = PORTFOLIO_NAV_ITEMS;
  readonly socialLinks = this.data.socialLinks;
}
