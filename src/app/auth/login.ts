import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  loginForm: FormGroup;
  loginError = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;

    if (email === 'admin@test.com' && password === 'admin123') {
      localStorage.setItem('token', 'mock-token');
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/admin']);
    } else if (email === 'customer@test.com' && password === 'customer123') {
      localStorage.setItem('token', 'mock-token');
      localStorage.setItem('role', 'customer');
      this.router.navigate(['/customer']);
    } else {
      this.loginError = true;
    }
  }
}