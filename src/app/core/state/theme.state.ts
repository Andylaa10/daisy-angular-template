import themes from 'daisyui/src/theming/themes';

export type ThemeState = {
  themes: string[] | undefined
  selectedTheme: string;
}

export const initialThemeState: ThemeState = {
  themes: Object.keys(themes),
  selectedTheme: localStorage.getItem('theme') ?? '',
};
