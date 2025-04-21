
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Services/user';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  successMessage = '';

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('register');
    this.http.post<{ user: any }>('https://api.realworld.io/api/users', {
      user: this.form.getRawValue()
    }).subscribe((response) => {
      console.log('response', response);
      localStorage.setItem('token', response.user.token);


      // Redirect after 2 seconds
      setTimeout(() => {
        this.successMessage = '';
        this.router.navigateByUrl('/');
      }, 2000);
    });
  }

  signin() {
    this.router.navigateByUrl('login');
  }
}
