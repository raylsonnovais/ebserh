import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AvatarMenuItem {
  label: string;
  action?: () => void;
  href?: string;
}

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvatarComponent implements OnInit {
  /**
   * Nome completo do usuário
   */
  @Input() userName = 'Fulano da Silva';

  /**
   * Cor de fundo do avatar (classe do design system, ex: 'bg-orange-vivid-30')
   */
  @Input() backgroundClass = 'bg-orange-vivid-30';

  /**
   * Cor do texto dentro do avatar (classe do design system, ex: 'text-pure-0')
   */
  @Input() textColorClass = 'text-pure-0';

  /**
   * Lista de itens do menu do avatar
   */
  @Input() menuItems: AvatarMenuItem[] = [];

  /**
   * Estado do dropdown
   */
  isMenuOpen = false;

  get firstLetter(): string {
    return this.userName.charAt(0).toUpperCase();
  }

  get firstName(): string {
    return this.userName.split(' ')[0];
  }

  ngOnInit() { }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('#avatar-container')) {
      this.closeMenu();
    }
  }
}
