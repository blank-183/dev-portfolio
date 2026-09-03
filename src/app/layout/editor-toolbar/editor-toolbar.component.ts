import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { PORTFOLIO_NAV_ITEMS } from '../../shared/constants/navigation.constants';

@Component({
  selector: 'app-editor-toolbar',
  imports: [RouterLink],
  templateUrl: './editor-toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorToolbarComponent {
  private readonly location = inject(Location);
  private readonly router = inject(Router);

  readonly currentSection = signal(this.sectionForUrl(this.router.url));

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => this.currentSection.set(this.sectionForUrl(event.urlAfterRedirects)));
  }

  back(): void {
    this.location.back();
  }

  forward(): void {
    this.location.forward();
  }

  private sectionForUrl(url: string) {
    return (
      PORTFOLIO_NAV_ITEMS.find((item) => url === item.route || url.startsWith(`${item.route}/`)) ??
      PORTFOLIO_NAV_ITEMS[0]
    );
  }
}
