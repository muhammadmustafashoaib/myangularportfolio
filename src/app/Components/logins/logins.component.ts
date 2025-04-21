import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent {
navigate (){
  this.router.navigate(['signup'])
}

  Form: FormGroup;
serverErrors: any = {};

  constructor(private fb: FormBuilder, private http: HttpClient , private router:Router) {
    this.Form = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.Form.invalid) {
      this.Form.markAllAsTouched();
      
    }

    // Submit form to the server
    this.http.post('https://sandbox11-api.Rica.com/Api/user/login',this.Form.value).subscribe(
        response => {
        console.log('Form submitted', response);
        this.router.navigateByUrl('dashboard')
    },
      error => {
        if (error.status === 400) {
          this.serverErrors = error.error.errors || {};
        } 
        else {
          console.error('Error submitting form:', error);
        }
      }
    );
  }


}
