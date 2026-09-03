import { SocialLink } from '../models/social-link.model';

// Replace profile URLs below with your verified public accounts.
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    platform: 'email',
    label: 'Email',
    url: 'mailto:iveelozano.jintalan@gmail.com',
    icon: 'bi-envelope',
    external: false,
  },
  {
    platform: 'github',
    label: 'GitHub',
    url: 'https://github.com/blank-183',
    icon: 'bi-github',
    external: true,
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ivee-jintalan/',
    icon: 'bi-linkedin',
    external: true,
  },
  // {
  //   platform: 'leetcode',
  //   label: 'LeetCode',
  //   url: 'https://leetcode.com/iveejintalan',
  //   icon: 'bi-code-slash',
  //   external: true,
  // },
];
