import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent {
  onClick(action: string) {
    alert(`Botão clicado: ${action}`);
  }
}
