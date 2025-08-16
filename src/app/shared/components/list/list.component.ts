import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListComponent {
  constructor(private host: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    this.initCollapseBehavior()
  }

  private initCollapseBehavior(): void {
    const root = this.host.nativeElement
    const triggers = root.querySelectorAll<HTMLElement>('[data-toggle="collapse"]')

    triggers.forEach((trigger) => {
      const targetId = trigger.getAttribute('data-target')
      const icon = trigger.querySelector('i.fas')
      const targetElement = targetId ? document.getElementById(targetId) : null

      if (!targetElement) return

      trigger.addEventListener('click', () => {
        const isHidden = targetElement.hasAttribute('hidden')

        if (isHidden) {
          targetElement.removeAttribute('hidden')
        } else {
          targetElement.setAttribute('hidden', 'true')
        }

        if (icon) {
          icon.classList.toggle('fa-angle-down', !isHidden)
          icon.classList.toggle('fa-angle-up', isHidden)
        }
      })
    })
  }
}
