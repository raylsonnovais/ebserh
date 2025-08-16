import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SettingsComponent } from './features/dashboard/settings/settings.component';
import { LoginComponent } from './features/login/login.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

import { ButtonComponent } from './shared/components/button/button.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { DateTimePickerComponent } from './shared/components/date-time-picker/date-time-picker.component';
import { DividerComponent } from './shared/components/divider/divider.component';
import { InputComponent } from './shared/components/input/input.component';
import { ItemComponent } from './shared/components/item/item.component';
import { ListComponent } from './shared/components/list/list.component';
import { MagicButtonComponent } from './shared/components/magic-button/magic-button.component';
import { MessageComponent } from './shared/components/message/message.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { NotificationComponent } from './shared/components/notification/notification.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { RadioButtonComponent } from './shared/components/radio-button/radio-button.component';
import { ScrimComponent } from './shared/components/scrim/scrim.component';
import { SelectComponent } from './shared/components/select/select.component';
import { SkipLinkComponent } from './shared/components/skip-link/skip-link.component';
import { StepComponent } from './shared/components/step/step.component';
import { SwitchComponent } from './shared/components/switch/switch.component';
import { TabComponent } from './shared/components/tab/tab.component';
import { TableComponent } from './shared/components/table/table.component';
import { TagComponent } from './shared/components/tag/tag.component';
import { TextAreaComponent } from './shared/components/text-area/text-area.component';
import { TooltipComponent } from './shared/components/tooltip/tooltip.component';
import { UploadComponent } from './shared/components/upload/upload.component';
import { WizardComponent } from './shared/components/wizard/wizard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { breadcrumb: 'Painel de Controle' },
        children: [
          {
            path: 'settings',
            component: SettingsComponent,
            data: { breadcrumb: 'Configurações' }
          }
        ]
      },

      { path: 'buttons', component: ButtonComponent, data: { breadcrumb: 'Botões' } },
      { path: 'cards', component: CardsComponent, data: { breadcrumb: 'Cards' } },
      { path: 'carousel', component: CarouselComponent, data: { breadcrumb: 'Carrossel' } },
      { path: 'checkbox', component: CheckboxComponent, data: { breadcrumb: 'Checkbox' } },
      { path: 'datetimepicker', component: DateTimePickerComponent, data: { breadcrumb: 'Datas' } },
      { path: 'divider', component: DividerComponent, data: { breadcrumb: 'Divider' } },
      { path: 'input', component: InputComponent, data: { breadcrumb: 'Input' } },
      { path: 'item', component: ItemComponent, data: { breadcrumb: 'Item' } },
      { path: 'list', component: ListComponent, data: { breadcrumb: 'Listas' } },
      { path: 'magic-button', component: MagicButtonComponent, data: { breadcrumb: 'Magic Button' } },
      { path: 'message', component: MessageComponent, data: { breadcrumb: 'Mensagens' } },
      { path: 'modal', component: ModalComponent, data: { breadcrumb: 'Modais' } },
      { path: 'notification', component: NotificationComponent, data: { breadcrumb: 'Notificação' } },
      { path: 'pagination', component: PaginationComponent, data: { breadcrumb: 'Paginação' } },
      { path: 'radio-button', component: RadioButtonComponent, data: { breadcrumb: 'Botões Radio' } },
      { path: 'scrim', component: ScrimComponent, data: { breadcrumb: 'Scrim' } },
      { path: 'select', component: SelectComponent, data: { breadcrumb: 'Select' } },
      { path: 'skip-link', component: SkipLinkComponent, data: { breadcrumb: 'Skip Link' } },
      { path: 'step', component: StepComponent, data: { breadcrumb: 'Step' } },
      { path: 'switch', component: SwitchComponent, data: { breadcrumb: 'Switch' } },
      { path: 'tab', component: TabComponent, data: { breadcrumb: 'Tab' } },
      { path: 'table', component: TableComponent, data: { breadcrumb: 'Tabelas' } },
      { path: 'tag', component: TagComponent, data: { breadcrumb: 'Tags' } },
      { path: 'text-area', component: TextAreaComponent, data: { breadcrumb: 'Text Area' } },
      { path: 'tooltip', component: TooltipComponent, data: { breadcrumb: 'Tooltip' } },
      { path: 'upload', component: UploadComponent, data: { breadcrumb: 'Upload' } },
      { path: 'wizard', component: WizardComponent, data: { breadcrumb: 'Wizard' } },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
