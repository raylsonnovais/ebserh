import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-skip-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skip-link.component.html',
  styleUrls: ['./skip-link.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkipLinkComponent { }
