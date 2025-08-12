import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface AccordionItem {
  title: string;
  content: string;
  isOpen?: boolean; // Controla o estado (aberto/fechado)
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccordionComponent {
  /**
   * Lista de itens a serem exibidos no accordion.
   * Ex: [{ title: 'Título 1', content: 'Conteúdo 1' }]
   */
  @Input() accordionItems: AccordionItem[] = [];

  /**
   * Se definido como true, apenas um item pode ser aberto por vez.
   */
  @Input() singleOpen = false;

  constructor() {}

  /**
   * Alterna o estado de um item (aberto/fechado).
   * @param clickedItem - O item que foi clicado.
   */
  toggleItem(clickedItem: AccordionItem): void {
    // Se o modo 'singleOpen' estiver ativo
    if (this.singleOpen) {
      this.accordionItems.forEach(item => {
        // Fecha todos os outros itens, exceto o que foi clicado
        if (item !== clickedItem) {
          item.isOpen = false;
        }
      });
    }

    clickedItem.isOpen = !clickedItem.isOpen;
  }
}
