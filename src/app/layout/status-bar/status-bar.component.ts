import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { PORTFOLIO_NAV_ITEMS } from '../../shared/constants/navigation.constants';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBarComponent {
  private readonly router = inject(Router);

  readonly profile = inject(PortfolioDataService).profile;
  readonly currentFile = signal(this.fileForUrl(this.router.url));

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => this.currentFile.set(this.fileForUrl(event.urlAfterRedirects)));
  }

  private fileForUrl(url: string): string {
    return (
      PORTFOLIO_NAV_ITEMS.find((item) => url === item.route || url.startsWith(`${item.route}/`)) ??
      PORTFOLIO_NAV_ITEMS[0]
    ).fileName;
  }
}
