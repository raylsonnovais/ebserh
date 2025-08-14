// src/app/shared/components/layout/layout.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { AuthService } from '../../../core/services/auth.service'; // 1. Importe aqui
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, BreadcrumbComponent, AvatarComponent], // 2. Adicione aos imports
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutComponent {
  constructor(private authService: AuthService) { }

  onPrivacy() {
    console.log('Privacidade clicada');
  }

  logout(): void {
    this.authService.logout();
  }
}
