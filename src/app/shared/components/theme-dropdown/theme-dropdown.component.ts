import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-dropdown',
  imports: [],
  templateUrl: './theme-dropdown.component.html',
  styleUrl: './theme-dropdown.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeDropdownComponent {
  themeService = inject(ThemeService);
}
