import themes from 'daisyui/theme/object';

export interface ThemeState {
  themes: string[] | undefined;
  selectedTheme: string;
}

export const initialThemeState: ThemeState = {
  themes: Object.keys(themes),
  selectedTheme: localStorage.getItem('theme') ?? '',
};
