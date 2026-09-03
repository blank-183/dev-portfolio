export interface Award {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly organization?: string;
  readonly issuedDate?: string;
  readonly icon: string;
  readonly displayOrder: number;
}
