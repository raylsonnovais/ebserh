import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-cookiebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookiebar.component.html',
  styleUrls: ['./cookiebar.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CookiebarComponent implements AfterViewInit {
  ngAfterViewInit(): void {

  }
}
