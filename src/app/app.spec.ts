import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should navigate to every portfolio route', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    const routeHeadings = [
      ['/about', 'Ivee Jintalan'],
      ['/experience', 'Experience'],
      ['/certifications', 'Certifications'],
      ['/projects', 'Projects'],
      ['/training', 'Completed Training'],
      ['/education', 'Education'],
    ] as const;

    for (const [route, expectedHeading] of routeHeadings) {
      await router.navigateByUrl(route);
      await fixture.whenStable();
      fixture.detectChanges();

      const heading = (fixture.nativeElement as HTMLElement).querySelector('h1');
      expect(heading?.textContent).toContain(expectedHeading);
    }
  });

  it('should open and close the mobile Explorer drawer', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/about');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const menuButton = compiled.querySelector<HTMLButtonElement>('.mobile-menu-button');
    expect(menuButton?.getAttribute('aria-expanded')).toBe('false');

    menuButton?.click();
    fixture.detectChanges();

    expect(compiled.querySelector('app-explorer-sidebar')?.classList).toContain('is-open');
    expect(menuButton?.getAttribute('aria-expanded')).toBe('true');

    compiled.querySelector<HTMLButtonElement>('.drawer-backdrop')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('app-explorer-sidebar')?.classList).not.toContain('is-open');
    expect(menuButton?.getAttribute('aria-expanded')).toBe('false');
  });

  it('should render the supplied portrait and certification badges', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/about');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const portrait = compiled.querySelector<HTMLImageElement>('.profile-photo img');
    const badges = compiled.querySelectorAll<HTMLImageElement>('.hero-certification-badges img');

    expect(portrait?.getAttribute('src')).toBe('/images/me.JPG');
    expect(portrait?.getAttribute('alt')).toContain('Ivee Jintalan');
    expect(badges).toHaveLength(2);
    expect(compiled.querySelector('.hero-role')?.textContent).toContain('.NET Developer');
    expect(compiled.querySelector('.quick-facts-panel')?.textContent).toContain(
      'Backend Development',
    );
    expect(compiled.querySelector('.quick-facts-panel')?.textContent).not.toContain(
      'Cloud & AI Solutions',
    );
    expect(compiled.querySelectorAll('.course-preview-item')).toHaveLength(6);
    expect(compiled.querySelector('.awards-panel')?.textContent).toContain(
      'Top 1 Developer Trainee',
    );
  });

  it('should expose verifiable credentials and completed training', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/certifications');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.certifications-page')?.textContent).toContain(
      'SQL (Advanced) Certificate',
    );
    expect(
      compiled.querySelector<HTMLAnchorElement>(
        'a[href="https://www.hackerrank.com/certificates/c63081cc69d6"]',
      ),
    ).toBeTruthy();

    await router.navigateByUrl('/training');
    await fixture.whenStable();
    fixture.detectChanges();

    expect(compiled.querySelectorAll('.training-card')).toHaveLength(6);
    expect(compiled.querySelector('.training-page')?.textContent).toContain(
      'Python for Everybody Specialization',
    );
  });

  it('should reserve the fixed dashboard mode for the About route', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/about');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.editor-route-view')?.classList).toContain('about-route');

    await router.navigateByUrl('/experience');
    await fixture.whenStable();
    fixture.detectChanges();

    expect(compiled.querySelector('.editor-route-view')?.classList).not.toContain('about-route');
  });

  it('should page through awards without scrolling the information rail', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/about');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const awardsPanel = compiled.querySelector<HTMLElement>('.awards-panel');
    expect(awardsPanel?.textContent).toContain('Creative Solver');
    expect(awardsPanel?.textContent).not.toContain('Cum Laude');

    awardsPanel?.querySelector<HTMLButtonElement>('.award-carousel__arrow--next')?.click();
    fixture.detectChanges();

    expect(awardsPanel?.textContent).not.toContain('Creative Solver');
  });
});
