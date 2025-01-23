import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {inject} from '@angular/core';
import {ThemeService} from '../services/theme.service';
import {initialSettingsState} from '../state/settings.state';
import {ThemeState} from '../state/theme.state';

export const SettingsStore = signalStore(
  withState(initialSettingsState),
  withMethods((store) => {
    const themeService = inject(ThemeService);

    return {
      setTheme(theme: string): void {
        themeService.Theme = theme;
        //Is there a better way to do this
        const themeState: ThemeState = {
          themes: store.themeState.themes(),
          selectedTheme: theme
        }
        patchState(store, {themeState: themeState});
      }
    }
  }),
)
