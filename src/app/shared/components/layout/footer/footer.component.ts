import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  private list!: HTMLElement | null;
  private britems: HTMLElement[] = [];
  private resizeListener: (() => void) | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.list = this.el.nativeElement.querySelector('.br-list.horizontal');
    this._setUp();
    this._setBehavior();
  }

  ngOnDestroy(): void {
    if (this.resizeListener) {
      this.resizeListener();
    }
  }

  private _setUp(): void {
    this.list = this.el.nativeElement.querySelector('.br-list.horizontal');
  }

  private _setBehavior(): void {
    this._setCollapseBehavior();

    // listener de resize
    this.resizeListener = this.renderer.listen('window', 'resize', () => {
      if (window.matchMedia('(min-width: 992px)').matches) {
        document
          .querySelectorAll<HTMLElement>('.br-footer .br-list:not(.horizontal)')
          .forEach((trigger) => (trigger.style.display = 'block'));
      } else {
        document
          .querySelectorAll<HTMLElement>('.br-footer .br-list:not(.horizontal)')
          .forEach((trigger) => (trigger.style.display = 'none'));

        document
          .querySelectorAll<HTMLElement>('.br-footer i')
          .forEach((iconComponent) => {
            iconComponent.classList.remove('fa-angle-up');
            iconComponent.classList.add('fa-angle-down');
          });
      }
    });
  }

  private _setCollapseBehavior(): void {
    this.britems = [];
    if (this.list) {
      this.list.querySelectorAll<HTMLElement>('.br-list').forEach((trigger) => {
        if (window.matchMedia('(max-width: 992px)').matches) {
          trigger.style.display = 'none';
        }
      });

      this.list.querySelectorAll<HTMLElement>('.br-item').forEach((trigger) => {
        this.renderer.listen(trigger, 'click', (e) => {
          if (window.matchMedia('(max-width: 992px)').matches) {
            this._showList(e);
          }
        });
        this.renderer.listen(trigger, 'keydown', (e: KeyboardEvent) => {
          if (e.key === 'Enter' && window.matchMedia('(max-width: 992px)').matches) {
            this._showList(e);
          }
        });
        this.britems.push(trigger);
      });
    }
  }

  private _showList(e: any): void {
    let parent = e.target.parentElement;
    parent = parent.classList.contains('col-2')
      ? parent
      : e.target.closest('.col-2');

    this._closeAllColumns(parent);

    parent.querySelectorAll('.br-list').forEach((trigger: HTMLElement) => {
      trigger.style.display =
        trigger.style.display === 'block' ? 'none' : 'block';

      const iconComponent = parent.querySelector('i');
      if (iconComponent) {
        trigger.style.display === 'block'
          ? this._iconAngleUP(iconComponent)
          : this._iconAngleDOWN(iconComponent);
      }

      this._setAriaAttributes(trigger, e);
    });
  }

  private _closeAllColumns(target: HTMLElement): void {
    (this.el.nativeElement
      .querySelectorAll('.br-list:not(.horizontal)') as NodeListOf<HTMLElement>)
      .forEach((trigger) => {
        if (target !== trigger.parentElement) {
          trigger.style.display = 'none';
          (this.el.nativeElement
            .querySelectorAll('.header i') as NodeListOf<HTMLElement>)
            .forEach((iconComponent) => this._iconAngleDOWN(iconComponent));
        }
      });
  }

  private _iconAngleUP(iconComponent: Element): void {
    iconComponent.classList.remove('fa-angle-down');
    iconComponent.classList.add('fa-angle-up');
  }

  private _iconAngleDOWN(iconComponent: Element): void {
    iconComponent.classList.remove('fa-angle-up');
    iconComponent.classList.add('fa-angle-down');
  }

  private _setAriaAttributes(optionTriggerExternal: HTMLElement, event: any): void {
    const itemList = this.list?.querySelectorAll('.br-item');
    itemList?.forEach(() => {
      const listId = `list-${Math.floor(Math.random() * 10000)}`;
      const isBlock = optionTriggerExternal.style.display === 'block';
      const parentElement = event.target.parentElement;

      parentElement.setAttribute('id', listId);
      parentElement.setAttribute('data-visible', String(isBlock));
      parentElement.setAttribute('aria-expanded', String(isBlock));
      parentElement.setAttribute('aria-label', isBlock ? 'expandido' : 'recolhido');
      parentElement.setAttribute('aria-controls', listId);
      parentElement.setAttribute('data-group', 'group1');
      parentElement.setAttribute('data-target', listId);
    });
  }
}
