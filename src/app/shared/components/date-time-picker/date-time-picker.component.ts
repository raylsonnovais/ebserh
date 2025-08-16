import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import flatpickr from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

@Component({
  selector: 'app-date-time-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DateTimePickerComponent implements AfterViewInit {
  @ViewChild('pickerContainer', { static: false }) pickerContainer!: ElementRef;

  ngAfterViewInit(): void {
    const elements = this.pickerContainer.nativeElement.querySelectorAll('.br-datetimepicker');

    elements.forEach((component: HTMLElement) => {
      this.initDateTimePicker(component);
    });
  }

  private initDateTimePicker(component: HTMLElement): void {
    const input = component.querySelector('input');
    if (!input) return;

    const type = component.getAttribute('data-type') || 'date';
    const modeAttr = component.getAttribute('data-mode');
    const allowedModes = ['single', 'multiple', 'range', 'time'] as const;
    const mode = allowedModes.includes(modeAttr as any) ? modeAttr as typeof allowedModes[number] : 'single';

    let format = 'd/m/Y';
    let enableTime = false;
    let noCalendar = false;

    switch (type) {
      case 'time':
        format = 'H:i';
        enableTime = true;
        noCalendar = true;
        input.setAttribute('maxlength', '5');
        break;
      case 'datetime-local':
        format = 'd/m/Y H:i';
        enableTime = true;
        break;
      case 'datetime-range':
        format = 'd/m/Y';
        break;
      default:
        format = 'd/m/Y';
        break;
    }

    flatpickr.localize(Portuguese);

    flatpickr(component, {
      allowInput: true,
      dateFormat: format,
      enableTime,
      noCalendar,
      wrap: true,
      disableMobile: true,
      mode,
      minuteIncrement: 1,
      nextArrow: '<button class="br-button circle small" type="button"><i class="fas fa-chevron-right"></i></button>',
      prevArrow: '<button class="br-button circle small" type="button"><i class="fas fa-chevron-left"></i></button>'
    });

  }
}
