import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightSidebarComponent {
  private readonly data = inject(PortfolioDataService);

  readonly profile = this.data.profile;
  readonly techStack = this.data.techStack;
  readonly awards = this.data.awards;
  readonly awardsPerPage = 2;
  readonly awardPage = signal(0);
  readonly awardPageCount = Math.max(1, Math.ceil(this.awards.length / this.awardsPerPage));
  readonly awardPageIndexes = Array.from({ length: this.awardPageCount }, (_, index) => index);
  readonly visibleAwards = computed(() => {
    const start = this.awardPage() * this.awardsPerPage;
    return this.awards.slice(start, start + this.awardsPerPage);
  });

  previousAwards(): void {
    this.awardPage.update((page) => (page - 1 + this.awardPageCount) % this.awardPageCount);
  }

  nextAwards(): void {
    this.awardPage.update((page) => (page + 1) % this.awardPageCount);
  }

  showAwardPage(page: number): void {
    this.awardPage.set(page);
  }
}
