import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="login-container">
      <h2>Login to RendezCue</h2>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="email">Email:</label>
          <input id="email" type="email" formControlName="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input id="password" type="password" formControlName="password" required>
        </div>
        <button type="submit" [disabled]="loginForm.invalid">Login</button>
      </form>
      <p *ngIf="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p class="register-link">Don't have an account? <a routerLink="/register">Register here</a></p>
    </div>
  `,
  styles: [`
    .login-container { max-width: 300px; margin: auto; padding: 20px; }
    .form-group { margin-bottom: 15px; }
    label { display: block; margin-bottom: 5px; }
    input { width: 100%; padding: 8px; }
    button { width: 100%; padding: 10px; background-color: #007bff; color: white; border: none; cursor: pointer; }
    button:disabled { background-color: #cccccc; }
    .error-message { color: red; }
    .register-link { margin-top: 15px; text-align: center; }
  `]
})
export class LoginComponent {
  loginForm;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email!, password!).subscribe({
        next: () => {
          this.router.navigate(['/activities']);
        },
        error: (error) => {
          this.errorMessage = 'Failed to login. Please check your credentials.';
          console.error('Login error:', error);
        }
      });
    }
  }
}