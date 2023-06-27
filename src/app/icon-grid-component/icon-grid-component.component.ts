import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-grid-component',
  templateUrl: './icon-grid-component.component.html',
  styleUrls: ['./icon-grid-component.component.scss']
})
export class IconGridComponentComponent {
  icons: string[] = [
    // Array containing all the icon names, and the icons
    'home',
    'account_balance',
    'chrome_reader_mode',
    'touch_app',
    'mail',
    'movie_creation',
    'wb_cloudy',
    'directions',
    'menu',
    'star',
    // ... add more icons
    ];
}
