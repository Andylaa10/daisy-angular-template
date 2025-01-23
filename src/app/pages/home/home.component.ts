import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {SettingsStore} from '../../core/store/settings.store';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss',
  providers: [SettingsStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  settingsStore = inject(SettingsStore);
  themes = this.settingsStore.themeState.themes;
  selectedTheme = this.settingsStore.themeState.selectedTheme;

  setTheme(theme: string) {
    console.log(theme);
    this.settingsStore.setTheme(theme);
  }

}
