import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-line-number-gutter',
  template: '<pre class="line-number-gutter" aria-hidden="true">{{ numbers }}</pre>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineNumberGutterComponent {
  readonly numbers = Array.from({ length: 56 }, (_, index) => index + 1).join('\n');
}
