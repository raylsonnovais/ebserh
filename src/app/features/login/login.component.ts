// src/app/features/login/login.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {NgxMaskDirective} from 'ngx-mask';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Importa o nosso novo CSS
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {
  cpf = '';
  // Na tela real, a senha só aparece depois, então vamos remover por enquanto
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.errorMessage = '';
    // Simulação: Após o CPF, o usuário iria para a tela de senha.
    // Para a nossa PoC, vamos simular o login direto.
    // Um CPF e uma "senha" fake são passados para o serviço.
    if (!this.authService.login(this.cpf, 'fakePassword')) {
      this.errorMessage = 'CPF inválido ou erro na simulação.';
    }
  }
}
