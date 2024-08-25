import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
      <h2>Register for RendezCue</h2>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" formControlName="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" formControlName="password" required>
      </div>
      <div>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" formControlName="confirmPassword" required>
      </div>
      <button type="submit" [disabled]="!registrationForm.valid">Register</button>
    </form>
  `,
  styles: [
    `
    form { display: flex; flex-direction: column; max-width: 300px; margin: auto; }
    div { margin-bottom: 15px; }
    label { display: block; margin-bottom: 5px; }
    input { width: 100%; padding: 8px; }
    button { padding: 10px; background-color: #007bff; color: white; border: none; cursor: pointer; }
    button:disabled { background-color: #cccccc; }
    `
  ]
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const { email, password } = this.registrationForm.value;
      this.authService.register(email, password).subscribe({
        next: () => {
          console.log('Registration successful');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Registration failed', error);
          // Handle error (e.g., display error message to user)
        }
      });
    }
  }
}