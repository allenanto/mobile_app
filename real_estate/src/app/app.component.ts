import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Search', url: '/folder/Search', icon: 'search' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Reserved', url: '/folder/Reserved', icon: 'archive' },
    { title: 'Logout', url: '/folder/Logout', icon: 'log-out' },
  ];
  constructor() {}
}
