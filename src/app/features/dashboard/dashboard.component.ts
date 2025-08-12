
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionComponent, AccordionItem} from '../../shared/components/accordion/accordion.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  // Adicione o AccordionComponent aos imports do dashboard
  imports: [CommonModule, AccordionComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardComponent {

  // Crie uma lista de itens para o accordion
  faqItems: AccordionItem[] = [
    {
      title: 'Como altero minha senha?',
      content: 'Você pode alterar sua senha na seção "Meu Perfil", clicando em "Segurança e Privacidade".'
    },
    {
      title: 'Onde encontro minhas notificações?',
      content: 'Suas notificações estão disponíveis no card "Notificações" nesta mesma página.'
    },
    {
      title: 'Como entro em contato com o suporte?',
      content: 'Acesse a "Central de Ajuda" na seção de Acesso Rápido para ver as opções de contato.'
    }
  ];
}
