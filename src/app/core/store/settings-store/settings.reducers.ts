import { Action, createReducer, on } from '@ngrx/store';
import { initialThemeState, SettingsState } from './settings.state';
import { themeSuccess } from './settings.actions';

const _themeReducer = createReducer(
  initialThemeState,
  on(themeSuccess, (state: SettingsState, action): SettingsState => {
    return {
      ...state,
      selectedTheme: action.theme,
    };
  }),
);

export function themeReducer(
  state: SettingsState | undefined,
  action: Action
): SettingsState {
  return _themeReducer(state, action);
}
