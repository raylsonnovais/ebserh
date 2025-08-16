import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cookiebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookiebar.component.html',
  styleUrls: ['./cookiebar.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CookiebarComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // Simula exibição automática do cookiebar
    setTimeout(() => {
      this.show();
    }, 500);
  }

  show(): void {
    const cookiebar = this.el.nativeElement.querySelector('.br-cookiebar');
    this.renderer.removeClass(cookiebar, 'd-none');
  }

  hide(): void {
    const cookiebar = this.el.nativeElement.querySelector('.br-cookiebar');
    this.renderer.addClass(cookiebar, 'd-none');
  }

  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.hide();
  }

  declineCookies(): void {
    localStorage.setItem('cookiesAccepted', 'false');
    this.hide();
  }
}
