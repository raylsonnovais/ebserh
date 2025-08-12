import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) {}

  login(cpf: string, pass: string): boolean {
    if (cpf && pass) { // Simulação simples
      this.loggedIn.next(true);
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
