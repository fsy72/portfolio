import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private fb = inject(FormBuilder);
  private contact = inject(ContactService);

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', [Validators.required, Validators.maxLength(2000)]],
    website: [''], // honeypot anti-spam
  });
  sending = false;
  sent = false;

  async onSubmit() {
    if (this.form.invalid || this.form.value.website) return;
    this.sending = true;
    try {
      const { website, ...msg } = this.form.getRawValue();
      await this.contact.send(msg);
      this.sent = true;
      this.form.reset();
    } catch {
      alert("Erreur lors de l'envoi, réessaie plus tard.");
    } finally {
      this.sending = false;
    }
  }
}
