import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      'service_2t9ourj',      // 🔁 Replace with your actual service ID
      'template_sk787nb',     // 🔁 Replace with your template ID
      e.target as HTMLFormElement,
      'BMlQ-s7rDucrSgAGG'       // 🔁 Replace with your user/public key
    ).then(() => {
      alert('✅ Message Sent Successfully!');
    }).catch((error) => {
      console.error('❌ Failed to send message', error);
      alert('❌ Failed to send message.');
    });
  }
}
