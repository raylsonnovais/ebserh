// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';
import { SettingsComponent } from './features/dashboard/settings/settings.component'; // Importe o novo componente

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
        data: { breadcrumb: 'Painel de Controle' }, // Adicionando dado à rota
        children: [
          {
            path: 'settings',
            component: SettingsComponent,
            data: { breadcrumb: 'Configurações' }, // Rota filha com seu dado
          },
        ],
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
