import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ContactForm } from '../../interfaces/user.interface';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const formData: ContactForm = this.contactForm.value;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Contact form submitted:', formData);
        this.isSubmitting = false;
        this.snackBar.open('Message sent successfully! We\'ll get back to you soon.', 'Close', {
          duration: 5000,
          panelClass: ['success-snackbar']
        });
        this.contactForm.reset();
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    
    if (field?.hasError('required')) {
      return `${this.getFieldDisplayName(fieldName)} is required`;
    }
    if (field?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (field?.hasError('minlength')) {
      const minLength = field.errors?.['minlength'].requiredLength;
      return `${this.getFieldDisplayName(fieldName)} must be at least ${minLength} characters`;
    }
    return '';
  }

  private getFieldDisplayName(fieldName: string): string {
    const fieldNames: { [key: string]: string } = {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message'
    };
    return fieldNames[fieldName] || fieldName;
  }
}
