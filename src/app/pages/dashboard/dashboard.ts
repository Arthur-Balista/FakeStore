import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}