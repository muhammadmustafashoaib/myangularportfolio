import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sales-add',
  templateUrl: './sales-add.component.html',
  styleUrls: ['./sales-add.component.css']
})
export class SalesAddComponent {
  form!: FormGroup;
  isSuccess: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      code: ['', Validators.required],
      title: ['', Validators.required],
      classification: ['', Validators.required],
      principle: ['', Validators.required],
      frequency: ['', Validators.required],
      description: ['', Validators.required],
      isActive: [false],
      isAdvanceTaxExempt: [false]
    });
  }

  // Method to handle submit with confirmation
  confirmSubmit(): void {
    const confirmed = window.confirm('Are you sure you want to submit this form?');

    if (confirmed) {
      this.submitForm();
    }
  }

  // Form submission method
  submitForm(): void {
    if (this.form.valid) {
      // Simulate form submission (you can replace this with actual submission logic)
      console.log('Form Submitted:', this.form.value);

      // Show success message
      this.isSuccess = true;

      // Optionally reset the form after submission
      this.form.reset();

      // Hide the success message after a few seconds
      setTimeout(() => {
        this.isSuccess = false;
      }, 3000); // Hide after 3 seconds
    } else {
      this.form.markAllAsTouched();
    }
  }

  inputClass(field: string) {
    const control = this.form.get(field);
    return {
      'ng-valid ng-touched': control?.valid && control?.touched,
      'ng-invalid ng-touched': control?.invalid && control?.touched
    };
  }
}
