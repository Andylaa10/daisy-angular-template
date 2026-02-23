import themes from 'daisyui/theme/object';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  get Themes(): string[] {
    return Object.keys(themes);
  }

  set Theme(theme: string) {
    localStorage.setItem('theme', theme);
  }

  get Theme(): string {
    return localStorage.getItem('theme') ?? '';
  }
}
