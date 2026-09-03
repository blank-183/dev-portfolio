export type CertificationType =
  'Professional Certification' | 'Skills Certification' | 'Professional Eligibility';

export interface Certification {
  readonly id: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly code?: string;
  readonly issuer: string;
  readonly type: CertificationType;
  readonly issuedDate?: string;
  readonly expiresDate?: string;
  readonly credentialId?: string;
  readonly credentialUrl?: string;
  readonly description: string;
  readonly skills: readonly string[];
  readonly badgeImageUrl?: string;
  readonly issuerIcon: string;
  readonly displayOrder: number;
}
