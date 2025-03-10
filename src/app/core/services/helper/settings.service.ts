import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  set theme(theme: string) {
    localStorage.setItem('theme', theme);
  }
}
