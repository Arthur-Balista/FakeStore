import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'https://api.escuelajs.co/api/v1';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.api}/auth/login`, {
      email,
      password
    });
  }

  salvarToken(token: string): void {
    localStorage.setItem('token', token);
  }

  obterToken(): string | null {
    return localStorage.getItem('token');
  }

  estaLogado(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}