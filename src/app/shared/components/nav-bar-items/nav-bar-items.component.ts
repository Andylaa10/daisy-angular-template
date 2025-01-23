import {Component, input, ViewEncapsulation} from '@angular/core';

// This component only takes these 2 as valid input
type MenuPlacementType = 'menu-horizontal' | 'menu-vertical';


@Component({
  selector: 'app-nav-bar-items',
  imports: [],
  templateUrl: './nav-bar-items.component.html',
  styleUrl: './nav-bar-items.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})

export class NavBarItemsComponent {
  menuPlacement = input<MenuPlacementType>("menu-horizontal")
}
