export type SocialPlatform = 'email' | 'github' | 'linkedin' | 'leetcode';

export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly label: string;
  readonly url: string;
  readonly icon: string;
  readonly external: boolean;
}
