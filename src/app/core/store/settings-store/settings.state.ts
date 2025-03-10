import themes from 'daisyui/theme/object';

export interface SettingsState {
  selectedTheme: string;
  themes: string[];
}

export const initialThemeState: SettingsState = {
  selectedTheme: localStorage.getItem('theme') ?? '',
  themes: Object.keys(themes),
};
