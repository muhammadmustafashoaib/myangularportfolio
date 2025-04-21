import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  profileForm!: FormGroup;
  showConfirmDialog = false;
  showSuccessMessage = false;
  countries = [
    'Pakistan', 'India', 'United States', 'United Kingdom', 'Canada', 'Germany', 'Australia'
  ];
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['Mustafa', Validators.required],
      lastName: ['Shoaib', Validators.required],
      dob: [''],
      userType: [{ value: 'Investor', disabled: true }],
      nationality: ['Pakistan', Validators.required],
      email: ['abc@gmail.com', [Validators.required, Validators.email]],
      aboutMe: ['Mustafa Shoaib , Angular Frontend Developer']
    });
  }
  
  confirmSubmit(): void {
    if (this.profileForm.valid) {
      this.showConfirmDialog = true;
    } else {
      this.markAllTouched();
    }
  }
  
  submitForm(): void {
    this.showConfirmDialog = false;
    this.showSuccessMessage = true;
    console.log(this.profileForm.getRawValue());
    setTimeout(() => (this.showSuccessMessage = false), 3000);
  }
  
  markAllTouched(): void {
    this.profileForm.markAllAsTouched();
  }
  
  inputClass(controlName: string): string {
    const control = this.profileForm.get(controlName);
    if (!control) return 'form-input';
    return `form-input ${control.touched && control.invalid ? 'border-red-500' : ''} ${control.touched && control.valid ? 'border-green-500' : ''}`;
  }
  
  showError(controlName: string): boolean {
    const control = this.profileForm.get(controlName);
    return !!(control && control.touched && control.invalid);
  }
  
  emailErrorMessage(): string {
    const emailControl = this.profileForm.get('email');
    if (emailControl?.hasError('required')) return 'Email is required';
    if (emailControl?.hasError('email')) return 'Invalid email format (missing @)';
    return '';
  }
  

}
