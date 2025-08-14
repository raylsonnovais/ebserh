import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides = ['Página 1', 'Página 2', 'Página 3', 'Página 4', 'Página 5'];

  // Um índice por carrossel
  indices = {
    base: 0,
    circular: 0,
    interno: 0,
    textual: 0,
    hibw: 0,
    hibh: 0
  };

  // Navegação comum
  prev(type: keyof typeof this.indices, isCircular = false) {
    if (this.indices[type] > 0) {
      this.indices[type]--;
    } else if (isCircular) {
      this.indices[type] = this.slides.length - 1;
    }
  }

  next(type: keyof typeof this.indices, isCircular = false) {
    if (this.indices[type] < this.slides.length - 1) {
      this.indices[type]++;
    } else if (isCircular) {
      this.indices[type] = 0;
    }
  }

  goTo(type: keyof typeof this.indices, index: number) {
    this.indices[type] = index;
  }
}
