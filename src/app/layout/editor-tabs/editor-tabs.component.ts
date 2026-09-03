import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PORTFOLIO_NAV_ITEMS } from '../../shared/constants/navigation.constants';

@Component({
  selector: 'app-editor-tabs',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './editor-tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorTabsComponent {
  readonly navItems = PORTFOLIO_NAV_ITEMS;
}
