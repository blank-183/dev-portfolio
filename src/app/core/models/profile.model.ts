export interface Profile {
  readonly name: string;
  readonly initials: string;
  readonly role: string;
  readonly subtitle: string;
  readonly summary: string;
  readonly email: string;
  readonly focus: readonly string[];
  readonly experience: string;
  readonly location: string;
  readonly availability: string;
  readonly lastUpdated: string;
  readonly photoUrl?: string;
}
