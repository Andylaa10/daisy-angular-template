import {Component} from '@angular/core';
import {ThemeDropdownComponent} from '../components/theme-dropdown/theme-dropdown.component';
import {NavBarItemsComponent} from '../components/nav-bar-items/nav-bar-items.component';


@Component({
  selector: 'app-header',
  imports: [
    ThemeDropdownComponent,
    NavBarItemsComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
}
