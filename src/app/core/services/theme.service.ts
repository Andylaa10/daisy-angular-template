import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  set Theme(theme: string) {
    localStorage.setItem('theme', theme);
  }
}
