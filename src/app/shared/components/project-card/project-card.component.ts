import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
  readonly compact = input(false);

  readonly icon = computed(() => {
    switch (this.project().id) {
      case 'ai-chatbot-api':
        return 'bi-robot';

      case 'event-driven-indexing-workflow':
        return 'bi-arrow-repeat';

      case 'enterprise-financial-procurement-integration':
        return 'bi-arrow-left-right';

      case 'automated-financial-reconciliation-system':
        return 'bi-calculator';

      case 'administrative-workflow-automation':
        return 'bi-gear-wide-connected';

      case 'centralized-user-access-management':
        return 'bi-person-lock';

      case 'enterprise-transaction':
        return 'bi-file-earmark-text';

      case 'medical-prescription-recognition':
        return 'bi-file-medical';

      case 'buceils-online-voting-system':
        return 'bi-check2-square';

      case 'answer-sheet-checker':
        return 'bi-card-checklist';

      case 'coin-counter':
        return 'bi-coin';

      case 'inventory-management-system':
        return 'bi-box-seam';

      default:
        return 'bi-folder';
    }
  });
}