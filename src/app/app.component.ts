import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLoadingListenerComponent } from './shared/components/loading/router-loading-listener.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLoadingListenerComponent, RouterOutlet],
  template: `
    <app-router-loading-listener></app-router-loading-listener>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
