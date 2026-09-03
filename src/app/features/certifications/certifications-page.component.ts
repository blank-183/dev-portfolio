import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-certifications-page',
  templateUrl: './certifications-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsPageComponent {
  readonly certifications = inject(PortfolioDataService).certifications;
  readonly issuerCount = new Set(this.certifications.map((item) => item.issuer)).size;
  readonly domains = ['Cloud', 'Security', 'Database'];
}
