export interface PortfolioNavItem {
  readonly label: string;
  readonly fileName: string;
  readonly route: string;
  readonly icon: string;
}

export const PORTFOLIO_NAV_ITEMS: readonly PortfolioNavItem[] = [
  { label: 'About', fileName: 'About.cs', route: '/about', icon: 'bi-file-earmark-person' },
  {
    label: 'Experience',
    fileName: 'Experience.cs',
    route: '/experience',
    icon: 'bi-file-earmark-code',
  },
  {
    label: 'Certifications',
    fileName: 'Certifications.cs',
    route: '/certifications',
    icon: 'bi-file-earmark-check',
  },
  { label: 'Projects', fileName: 'Projects.cs', route: '/projects', icon: 'bi-file-earmark-code' },
  { label: 'Training', fileName: 'Training.cs', route: '/training', icon: 'bi-file-earmark-text' },
  {
    label: 'Education',
    fileName: 'Education.cs',
    route: '/education',
    icon: 'bi-file-earmark-richtext',
  },
];
