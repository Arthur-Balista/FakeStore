import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  form;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  entrar() {

    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    this.authService.login(email!, password!).subscribe({

      next: (res: any) => {

        this.authService.salvarToken(res.access_token);

        this.router.navigate(['/dashboard']);

      },

      error: () => {

        alert('Email ou senha inválidos');

      }

    });

  }
}