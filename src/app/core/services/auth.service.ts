import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) { }

  private hasToken(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }

  login(cpf: string, pass: string): boolean {
    if (cpf && pass) {
      sessionStorage.setItem('auth_token', 'dummy-token'); // Simulação
      this.loggedIn.next(true);
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  logout(): void {
    sessionStorage.removeItem('auth_token');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.hasToken();
  }
}
