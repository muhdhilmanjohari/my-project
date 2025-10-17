import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    email: 'muhdhilmanjohari@gmail.com',
    phone: '011-2423-2919',
    location: 'Kulim, Kedah, Malaysia',
    github: 'https://github.com/muhdhilmanjohari'
  };

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  formSubmitted = false;
  submitSuccess = false;

  onSubmit() {
    // In a real application, you would send this data to a backend service
    console.log('Form submitted:', this.formData);
    
    this.formSubmitted = true;
    this.submitSuccess = true;

    // Reset form after 3 seconds
    setTimeout(() => {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.formSubmitted = false;
      this.submitSuccess = false;
    }, 3000);
  }

  isFormValid(): boolean {
    return !!(
      this.formData.name.trim() &&
      this.formData.email.trim() &&
      this.formData.subject.trim() &&
      this.formData.message.trim()
    );
  }
}