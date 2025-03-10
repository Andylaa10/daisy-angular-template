import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {selectSelectedTheme, selectThemes} from '../../../core/store/settings-store/settings.selectors';
import {themeStart} from '../../../core/store/settings-store/settings.actions';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-theme-dropdown',
  imports: [
    AsyncPipe
  ],
  templateUrl: './theme-dropdown.component.html',
  styleUrl: './theme-dropdown.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeDropdownComponent {
  private store: Store<AppState> = inject(Store);
  themes = this.store.select(selectThemes);
  selectedTheme = this.store.select(selectSelectedTheme);

  setTheme(theme: string) {
    this.store.dispatch(themeStart({theme: theme}))
  }
}
