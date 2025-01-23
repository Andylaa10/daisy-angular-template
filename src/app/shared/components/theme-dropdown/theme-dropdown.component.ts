import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {SettingsStore} from '../../../core/store/settings.store';

@Component({
  selector: 'app-theme-dropdown',
  imports: [],
  templateUrl: './theme-dropdown.component.html',
  styleUrl: './theme-dropdown.component.scss',
  standalone: true,
  providers: [SettingsStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeDropdownComponent {
  settingsStore = inject(SettingsStore);
  themes = this.settingsStore.themeState.themes;
  selectedTheme = this.settingsStore.themeState.selectedTheme;

  setTheme(theme: string) {
    console.log(theme);
    this.settingsStore.setTheme(theme);
  }
}
