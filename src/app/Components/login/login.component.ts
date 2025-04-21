import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.title.setTitle('Login');
  }

  navigate() {
    this.router.navigate(['signup']);
  }

  Form: FormGroup;
  serverErrors: any = {};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private title: Title
  ) {
    this.Form = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.Form.invalid) {
      this.Form.markAllAsTouched();
      return;
    }

    const { Username, Password } = this.Form.value;

    if (Username === 'admin' && Password === 'Test123@') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigateByUrl('/dashboard');
    } else {
      this.serverErrors = {
        Username: Username !== 'admin' ? ['Invalid username'] : [],
        Password: Password !== 'Test123@' ? ['Invalid password'] : [],

      };
    }
  }

  signup() {
    this.router.navigateByUrl('signup');
  }

  showPassword: boolean = false;

togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}

 eyeIcon: string = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>`;

  eyeSlashIcon: string = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.06 10.06 0 012.18-3.368m3.36-2.38A9.953 9.953 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.96 9.96 0 01-4.293 5.368M3 3l18 18" />
    </svg>`;

}
