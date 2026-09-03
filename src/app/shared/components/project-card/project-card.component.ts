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
        return 'bi-chat-dots';
      case 'event-driven-indexing-workflow':
        return 'bi-diagram-3';
      case 'medical-prescription-recognition':
        return 'bi-file-medical';
      case 'answer-sheet-checker':
        return 'bi-card-checklist';
      case 'coin-counter':
        return 'bi-coin';
      case 'inventory-management-system':
        return 'bi-box-seam';
      default:
        return 'bi-check2-square';
    }
  });
}
