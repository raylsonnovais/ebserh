import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidebarComponent {
  menuItems = [
    { label: 'Botões', route: '/buttons', icon: 'fas fa-hand-pointer' },
    { label: 'Cards', route: '/cards', icon: 'fas fa-id-card' },
    { label: 'Carrossel', route: '/carousel', icon: 'fas fa-images' },
    { label: 'Checkbox', route: '/checkbox', icon: 'fas fa-check-square' },
    { label: 'Cookiebar', route: '/cookiebar', icon: 'fas fa-cookie' },
    { label: 'Tabelas', route: '/tables', icon: 'fas fa-table' }
  ];
}
