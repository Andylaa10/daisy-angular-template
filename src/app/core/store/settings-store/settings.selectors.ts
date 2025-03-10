import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsState } from './settings.state';

export const SETTINGS_STATE_NAME: string = 'theme';

const selectSettingsState =
  createFeatureSelector<SettingsState>(SETTINGS_STATE_NAME);

export const selectSelectedTheme = createSelector(
  selectSettingsState,
  (theme: SettingsState) => {
    return theme.selectedTheme;
  }
);

export const selectThemes = createSelector(
  selectSettingsState,
  (theme: SettingsState) => {
    return theme.themes;
  }
);
