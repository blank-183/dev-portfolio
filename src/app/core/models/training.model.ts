export type TrainingStatus = 'completed';

export type TrainingType = 'Course' | 'Bootcamp' | 'Specialization';

export interface Training {
  readonly id: string;
  readonly title: string;
  readonly provider: string;
  readonly type: TrainingType;
  readonly status: TrainingStatus;
  readonly completedDate: string;
  readonly credentialId?: string;
  readonly credentialUrl?: string;
  readonly description?: string;
  readonly skills: readonly string[];
  readonly badgeImageUrl?: string;
  readonly issuerIcon: string;
  readonly displayOrder: number;
}
