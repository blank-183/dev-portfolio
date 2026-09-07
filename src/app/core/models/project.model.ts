export interface Project {
  readonly id: string;
  readonly title: string;
  readonly shortTitle?: string;
  readonly description: string;
  readonly shortDescription?: string;
  readonly contributions?: string;
  readonly technologies: readonly string[];
  readonly dateRange?: string;
  readonly associatedWith?: string;
  readonly confidential?: boolean;
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly featured: boolean;
  readonly displayOrder: number;
}
