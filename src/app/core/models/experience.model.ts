export interface Experience {
  readonly id: string;
  readonly position: string;
  readonly company: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly current: boolean;
  readonly location?: string;
  readonly summary?: string;
  readonly responsibilities: readonly string[];
  readonly technologies: readonly string[];
  readonly displayOrder: number;
}
