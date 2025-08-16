import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-magic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './magic-button.component.html',
  styleUrls: ['./magic-button.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MagicButtonComponent { }
