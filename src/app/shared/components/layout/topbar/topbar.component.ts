import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopbarComponent {
  @Input() title: string = 'Nome do Sistema';
  @Input() systemUrl: string = '/';
  @Input() showSearch: boolean = false;
}
