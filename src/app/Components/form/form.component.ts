import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  allocationForm: FormGroup | any;
  distributions = ['Unit 1', 'Unit 2', 'Unit 3'];
  principles = ['Principle 1', 'Principle 2'];
  channels = ['Channel 1', 'Channel 2'];
  connects = ['Connect 1', 'Connect 2'];
  designations = ['Designation 1', 'Designation 2'];

  showConfirmDialog = false;
  showSuccessMsg = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.allocationForm = this.fb.group({
      distributions: ['', Validators.required],
      principles: ['', Validators.required],
      channel: ['', Validators.required],
      connect: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      designation: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  getControlClass(controlName: string): string {
    const control = this.allocationForm.get(controlName);
    return control?.touched && control?.invalid ? 'border-red-500' : 'border-gray-300';
  }

  onSubmit(): void {
    if (this.allocationForm.valid) {
      this.showConfirmDialog = true;
    } else {
      this.allocationForm.markAllAsTouched();
      this.showSuccessMsg = false; // hide success if validation fails
    }
  }

  handleConfirmation(confirm: boolean): void {
    this.showConfirmDialog = false;
  
    if (confirm) {
      console.log(this.allocationForm.value);
      this.showSuccessMsg = true;
  
      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        this.showSuccessMsg = false;
      }, 2000);
  
      // Optional: reset the form after submission
      // this.allocationForm.reset();
    }
  }
}
