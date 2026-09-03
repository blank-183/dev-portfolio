import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { LineNumberGutterComponent } from '../../shared/components/line-number-gutter/line-number-gutter.component';
import { EditorTabsComponent } from '../editor-tabs/editor-tabs.component';
import { EditorToolbarComponent } from '../editor-toolbar/editor-toolbar.component';
import { ExplorerSidebarComponent } from '../explorer-sidebar/explorer-sidebar.component';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';
import { StatusBarComponent } from '../status-bar/status-bar.component';
import { TopHeaderComponent } from '../top-header/top-header.component';

@Component({
  selector: 'app-portfolio-shell',
  imports: [
    RouterOutlet,
    EditorTabsComponent,
    EditorToolbarComponent,
    ExplorerSidebarComponent,
    LineNumberGutterComponent,
    RightSidebarComponent,
    StatusBarComponent,
    TopHeaderComponent,
  ],
  templateUrl: './portfolio-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioShellComponent {
  private readonly router = inject(Router);

  @ViewChild('routeView') private routeView?: ElementRef<HTMLElement>;

  readonly explorerOpen = signal(false);
  readonly isAboutRoute = signal(this.isAboutUrl(this.router.url));

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => {
        this.isAboutRoute.set(this.isAboutUrl(event.urlAfterRedirects));

        queueMicrotask(() => {
          if (this.routeView) {
            this.routeView.nativeElement.scrollTop = 0;
          }
        });
      });
  }

  toggleExplorer(): void {
    this.explorerOpen.update((open) => !open);
  }

  closeExplorer(): void {
    this.explorerOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeExplorer();
  }

  private isAboutUrl(url: string): boolean {
    return url === '/' || url.startsWith('/about');
  }
}
