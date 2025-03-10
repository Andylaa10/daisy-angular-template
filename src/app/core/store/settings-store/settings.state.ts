import themes from 'daisyui/src/theming/themes';

export interface SettingsState {
  selectedTheme: string;
  themes: string[];
}

export const initialThemeState: SettingsState = {
  selectedTheme: localStorage.getItem('theme') ?? '',
  themes: Object.keys(themes),
};
