import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-scrim',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scrim.component.html',
  styleUrls: ['./scrim.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ScrimComponent { }
