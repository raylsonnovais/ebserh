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
    { label: 'Início', route: '/dashboard', icon: 'fas fa-home' },
    
    { label: 'Botões', route: '/buttons', icon: 'fas fa-hand-pointer' },
    { label: 'Cards', route: '/cards', icon: 'fas fa-id-card' },
    { label: 'Carrossel', route: '/carousel', icon: 'fas fa-images' },
    { label: 'Checkbox', route: '/checkbox', icon: 'fas fa-check-square' },
    { label: 'Datas', route: '/datetimepicker', icon: 'fas fa-calendar-alt' },
    { label: 'Divider', route: '/divider', icon: 'fas fa-grip-lines-vertical' },
    { label: 'Input', route: '/input', icon: 'fas fa-edit' },
    { label: 'Item', route: '/item', icon: 'fas fa-check-circle' },
    { label: 'Listas', route: '/list', icon: 'fas fa-list' },
    { label: 'Magic Button', route: '/magic-button', icon: 'fas fa-cart-plus' },
    { label: 'Mensagens', route: '/message', icon: 'fas fa-envelope' },
    { label: 'Modal', route: '/modal', icon: 'fas fa-exclamation-triangle' },
    { label: 'Notificação', route: '/notification', icon: 'fas fa-comment' },
    { label: 'Paginação', route: '/pagination', icon: 'fas fa-file-alt' },
    { label: 'Botões Radio', route: '/radio-button', icon: 'fas fa-check-circle' },
    { label: 'Scrim', route: '/scrim', icon: 'fas fa-border-all' },
    { label: 'Select', route: '/select', icon: 'fas fa-check-square' },
    { label: 'Skip Link', route: '/skip-link', icon: 'fas fa-arrow-right' },
    { label: 'Step', route: '/step', icon: 'fas fa-arrow-right' },
    { label: 'Switch', route: '/switch', icon: 'fas fa-toggle-on' },
    { label: 'Tab', route: '/tab', icon: 'fas fa-bars' },
    { label: 'Tabelas', route: '/table', icon: 'fas fa-table' },
    { label: 'Tags', route: '/tag', icon: 'fas fa-tag' },
    { label: 'Text Area', route: '/text-area', icon: 'fas fa-font' },
    { label: 'Tooltip', route: '/tooltip', icon: 'fas fa-toolbox' },
    { label: 'Upload', route: '/upload', icon: 'fas fa-upload' },
    { label: 'Wizard', route: '/wizard', icon: 'fas fa-hat-wizard' }
  ];
}
