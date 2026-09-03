export interface Education {
  readonly id: string;
  readonly level: string;
  readonly degree?: string;
  readonly strand?: string;
  readonly school: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly location?: string;
  readonly grade?: string;
  readonly honors?: readonly string[];
  readonly skills?: readonly string[];
  readonly thesis?: {
    readonly title: string;
    readonly description: string;
    readonly technologies: readonly string[];
  };
  readonly displayOrder: number;
}
