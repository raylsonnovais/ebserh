import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { AvatarComponent } from '../../avatar/avatar.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopbarComponent {
  @Input() title: string = 'Nome do Sistema';
  @Input() systemUrl: string = '/';
  @Input() showSearch: boolean = false;

  @Output() logoutClick = new EventEmitter<void>();

  onLogout() {
    this.logoutClick.emit();
  }

  onPrivacy() {
    console.log('Privacidade clicada');
  }
}
