import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const component = this.el.nativeElement;

    this.setCheckboxBehavior(component);
    this.setRadioBehavior(component);
  }

  private setCheckboxBehavior(component: HTMLElement): void {
    const checkboxes = component.querySelectorAll<HTMLInputElement>(
      '.br-checkbox input[type="checkbox"]'
    );

    checkboxes.forEach((checkbox) => {
      // Inicializa classe 'selected'
      if (checkbox.checked) {
        component.classList.add('selected');
      }

      checkbox.addEventListener('click', (event: Event) => {
        const target = event.currentTarget as HTMLInputElement;
        if (target.checked) {
          component.classList.add('selected');
        } else {
          component.classList.remove('selected');
        }
      });
    });
  }

  private setRadioBehavior(component: HTMLElement): void {
    const radios = component.querySelectorAll<HTMLInputElement>(
      '.br-radio input[type="radio"]'
    );

    radios.forEach((radio) => {
      // Inicializa radio selecionado
      if (radio.checked) {
        radio.setAttribute('checked', '');
        component.classList.add('selected');
      }

      radio.addEventListener('click', (event: Event) => {
        const target = event.currentTarget as HTMLInputElement;
        const parent = component.parentElement;

        if (!parent) return;

        const allItems = parent.querySelectorAll('.br-item');

        allItems.forEach((item) => {
          const radioInputs = item.querySelectorAll<HTMLInputElement>(
            '.br-radio input[type="radio"]'
          );

          radioInputs.forEach((radioItem) => {
            if (radioItem === target) {
              radioItem.setAttribute('checked', '');
              item.classList.add('selected');
            } else {
              radioItem.removeAttribute('checked');
              item.classList.remove('selected');
            }
          });
        });
      });
    });
  }
}
